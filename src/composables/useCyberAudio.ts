import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { useExperienceStore } from '@/stores/experienceStore'
import { cyberJourney } from '@/composables/useCyberJourney'
import { flightAt, storyCopyAt } from '@/utils/cyberStory'

/** Original generative score: slow minor-ninth pads, a sparse pulse and travel air. */
export function useCyberAudio(journey = false) {
  const store = useExperienceStore()
  const musicVolume = useStorage('portfolio-music-volume', 35)
  const effectsVolume = useStorage('portfolio-effects-volume', 45)
  const isPlaying = ref(false)
  const error = ref('')
  let ctx: AudioContext | null = null
  let master: GainNode, music: GainNode, effects: GainNode, air: GainNode
  let airFilter: BiquadFilterNode, reverb: ConvolverNode
  let scheduler = 0, frame = 0, suspendTimer = 0
  let nextBeat = 0, step = 0, lastPosition = 0, lastTime = 0, lastChapter = -1, lastCue = -10
  let disposed = false
  let lastEffectTime = -10
  const chords = [[50, 57, 60, 64, 69], [46, 53, 57, 60, 65], [41, 53, 57, 60, 67], [48, 55, 60, 62, 67]]
  const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12)
  function note(midi: number, when: number, duration: number, level: number, bus: GainNode, type: OscillatorType = 'sine') {
    if (!ctx) return
    const oscillator = ctx.createOscillator(), envelope = ctx.createGain()
    oscillator.type = type
    oscillator.frequency.value = hz(midi)
    envelope.gain.setValueAtTime(0, when)
    envelope.gain.linearRampToValueAtTime(level, when + Math.min(0.8, duration * 0.2))
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + duration)
    oscillator.connect(envelope); envelope.connect(bus)
    if (bus === music) envelope.connect(reverb)
    oscillator.start(when); oscillator.stop(when + duration + 0.03)
    oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect() }
  }
  function mix() {
    if (!ctx) return
    music.gain.setTargetAtTime(Math.max(0, Math.min(100, Number(musicVolume.value))) / 100, ctx.currentTime, 0.15)
    effects.gain.setTargetAtTime(Math.max(0, Math.min(100, Number(effectsVolume.value))) / 100, ctx.currentTime, 0.08)
  }
  function schedule() {
    if (!ctx || ctx.state !== 'running' || !isPlaying.value || document.hidden || !journey) return
    if (nextBeat < ctx.currentTime) nextBeat = ctx.currentTime + 0.06
    while (nextBeat < ctx.currentTime + 0.18) {
      const chord = chords[Math.floor(step / 16) % chords.length]
      if (step % 16 === 0) chord.forEach((pitch, i) => note(pitch, nextBeat + i * 0.06, 8, i ? 0.033 : 0.055, music, 'sine'))
      if (step % 4 === 0) {
        const pitch = chord[(step / 4) % chord.length] + 12
        note(pitch, nextBeat, 1.7, 0.045, music, 'triangle')
        note(pitch, nextBeat + 0.42, 1.6, 0.014, music)
      }
      nextBeat += 60 / 72 / 2
      step++
    }
  }
  function update(time: number) {
    const position = cyberJourney.position
    const dt = Math.max(0.001, (time - (lastTime || time)) / 1000)
    const speed = Math.min(1, Math.abs(position - lastPosition) / dt / 0.32)
    lastPosition = position; lastTime = time
    if (ctx && isPlaying.value && ctx.state === 'running') {
      const travel = flightAt(position).travel
      const amount = journey ? speed * Math.sin(Math.PI * travel) : 0
      air.gain.setTargetAtTime(amount * 0.055, ctx.currentTime, 0.2)
      airFilter.frequency.setTargetAtTime(380 + amount * 1100, ctx.currentTime, 0.3)
      const chapter = storyCopyAt(position)
      if (journey && chapter.opacity > 0.97 && chapter.index !== lastChapter) {
        lastChapter = chapter.index
        if (ctx.currentTime - lastCue > 1.5) {
          lastCue = ctx.currentTime
          note(62 + chapter.index, ctx.currentTime, 0.7, 0.075, effects)
          note(69 + chapter.index, ctx.currentTime + 0.13, 1.1, 0.045, effects)
        }
      }
    }
    frame = requestAnimationFrame(update)
  }
  function create() {
    if (ctx) return ctx
    ctx = new AudioContext()
    master = ctx.createGain(); master.gain.value = 0
    const limiter = ctx.createDynamicsCompressor()
    limiter.threshold.value = -15; limiter.knee.value = 12; limiter.ratio.value = 8
    master.connect(limiter); limiter.connect(ctx.destination)
    music = ctx.createGain(); effects = ctx.createGain()
    music.connect(master); effects.connect(master)
    reverb = ctx.createConvolver()
    const impulse = ctx.createBuffer(2, ctx.sampleRate * 2.5, ctx.sampleRate)
    for (let channel = 0; channel < 2; channel++) {
      const samples = impulse.getChannelData(channel)
      for (let i = 0; i < samples.length; i++) samples[i] = (Math.random() * 2 - 1) * (1 - i / samples.length) ** 3 * 0.2
    }
    reverb.buffer = impulse
    // Wet audio passes through the music bus so its slider also silences tails.
    reverb.connect(music)
    const noise = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate)
    const samples = noise.getChannelData(0)
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1
    const source = ctx.createBufferSource(); source.buffer = noise; source.loop = true
    airFilter = ctx.createBiquadFilter(); airFilter.type = 'bandpass'; airFilter.Q.value = 0.45
    air = ctx.createGain(); air.gain.value = 0
    source.connect(airFilter); airFilter.connect(air); air.connect(effects); source.start()
    mix()
    nextBeat = ctx.currentTime + 0.1
    scheduler = window.setInterval(schedule, 100)
    frame = requestAnimationFrame(update)
    return ctx
  }
  async function enable() {
    try {
      clearTimeout(suspendTimer)
      const context = create()
      await context.resume()
      if (disposed) return
      if (context.state !== 'running') throw new Error('Audio not running')
      isPlaying.value = true; store.soundEnabled = true; error.value = ''
      lastChapter = storyCopyAt(cyberJourney.position).index
      master.gain.setTargetAtTime(0.7, context.currentTime, 0.4)
      schedule()
    } catch { error.value = 'Audio could not start. Tap sound to try again.'; isPlaying.value = false; store.soundEnabled = false }
  }
  function mute() {
    isPlaying.value = false; store.soundEnabled = false
    if (!ctx) return
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.05)
    suspendTimer = window.setTimeout(() => { void ctx?.suspend().catch(() => {}) }, 250)
  }
  async function toggle() { if (isPlaying.value) mute(); else await enable() }
  function cue(midi: number, duration = 0.1) {
    if (!store.soundEnabled || disposed || document.hidden) return
    if (!ctx && !journey) { void enable().then(() => cue(midi, duration)); return }
    if (!ctx || ctx.state !== 'running' || !isPlaying.value || ctx.currentTime - lastEffectTime < 0.045) return
    lastEffectTime = ctx.currentTime
    note(midi, ctx.currentTime, duration, 0.09, effects, 'sine')
  }
  function visibility() {
    if (!ctx) return
    if (document.hidden) { void ctx.suspend().catch(() => {}) }
    else if (isPlaying.value) { void ctx.resume().catch(() => { mute() }) }
  }
  watch([musicVolume, effectsVolume], mix)
  watch(() => store.soundEnabled, (enabled) => { if (!enabled && isPlaying.value) mute() })
  onMounted(() => document.addEventListener('visibilitychange', visibility))
  onBeforeUnmount(() => {
    disposed = true
    clearInterval(scheduler); clearTimeout(suspendTimer); cancelAnimationFrame(frame)
    document.removeEventListener('visibilitychange', visibility)
    void ctx?.close().catch(() => {})
    ctx = null
  })
  return { toggle, isPlaying, musicVolume, effectsVolume, error, playTick: () => cue(81), playLockOn: () => cue(74, 0.5), playKeyBlip: () => cue(86, 0.055) }
}
