<script setup lang="ts">
// Single-draw-call GPU point-cloud world morphing across seven formations in sync with Lenis scroll.
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as THREE from 'three'
import { buildFormations } from '@/utils/particleFormations'
import { experiences, skills } from '@/data/portfolioData'

const props = defineProps<{
  position: number
  paused: boolean
  activeRole: number
  activeSkill: number
  activePlace: number
  isDark: boolean
}>()
const emit = defineEmits<{ (e: 'ready'): void; (e: 'unavailable'): void }>()

const host = ref<HTMLElement | null>(null)

const VERT = /* glsl */ `
attribute vec3 aTarget;
attribute float aAccent;
attribute float aSeed;
uniform float uMorph;
uniform float uTime;
uniform float uPixelRatio;
uniform float uScale;
uniform vec3 uFocus;
uniform float uFocusStrength;
varying float vAccent;
varying float vFocus;
varying float vDepth;

float easeInOutCubic(float x) {
  return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) * 0.5;
}

void main() {
  float delay = aSeed * 0.22;
  float t = clamp((uMorph - delay) / (1.0 - 0.22), 0.0, 1.0);
  float m = easeInOutCubic(t);

  vec3 p = mix(position, aTarget, m);

  float transit = sin(m * 3.14159265);
  vec3 swirl = vec3(
    sin(aSeed * 43.0 + uTime * 0.9),
    cos(aSeed * 31.0 - uTime * 0.8),
    sin(aSeed * 19.0 + uTime * 0.7)
  );
  p += swirl * (0.014 + transit * 0.16);

  float dFocus = length(p - uFocus);
  float f = uFocusStrength * smoothstep(0.95, 0.0, dFocus);

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;

  float depth = clamp(-mv.z, 1.4, 12.0);
  float size = uScale * (1.2 + aAccent * 1.9 + f * 2.1) * (4.2 / depth);
  gl_PointSize = clamp(size * uPixelRatio, 1.2, 24.0);

  vAccent = aAccent;
  vFocus = f;
  vDepth = smoothstep(10.5, 2.2, depth);
}
`

const FRAG = /* glsl */ `
precision highp float;
uniform vec3 uColorBase;
uniform vec3 uColorAccent;
uniform vec3 uColorFocus;
uniform float uAlphaScale;
varying float vAccent;
varying float vFocus;
varying float vDepth;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float r = length(uv) * 2.0;
  if (r > 1.0) discard;
  float core = pow(1.0 - r, 2.1);

  vec3 col = mix(uColorBase, uColorAccent, clamp(vAccent * 1.15, 0.0, 1.0));
  col = mix(col, uColorFocus, clamp(vFocus, 0.0, 1.0));

  float alpha = core * (0.28 + vAccent * 0.55 + vFocus * 0.45) * vDepth * uAlphaScale;
  gl_FragColor = vec4(col, alpha);
}
`

const CAM: { x: number; y: number; z: number; rx: number; ry: number; ox: number }[] = [
  { x: 0, y: 0.05, z: 5.2, rx: 0.08, ry: 0.25, ox: 1.25 },
  { x: 0, y: 0.0, z: 5.0, rx: 0.0, ry: -0.2, ox: -1.2 },
  { x: 0, y: 0.0, z: 5.5, rx: 0.04, ry: 0.08, ox: 1.15 },
  { x: 0, y: 0.0, z: 5.1, rx: 0.02, ry: 0.0, ox: -1.15 },
  { x: 0, y: 0.0, z: 5.4, rx: 0.05, ry: 0.3, ox: 1.3 },
  { x: 0, y: 0.0, z: 5.4, rx: 0.0, ry: 0.0, ox: -1.15 },
  { x: 0, y: -0.1, z: 5.3, rx: 0.0, ry: 0.0, ox: 0.0 },
]

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let cloud: THREE.Points | null = null
let stars: THREE.Points | null = null
let starMat: THREE.PointsMaterial | null = null
let geo: THREE.BufferGeometry | null = null
let mat: THREE.ShaderMaterial | null = null
let posAttr: THREE.BufferAttribute | null = null
let targetAttr: THREE.BufferAttribute | null = null
let accentAttr: THREE.BufferAttribute | null = null
let formations: ReturnType<typeof buildFormations> = []

let raf = 0
let lastTime = 0
let shown = 0
let pairA = -1
let pairB = -1
let pointerX = 0
let pointerY = 0
let smoothPX = 0
let smoothPY = 0
let portrait = false
let ro: ResizeObserver | null = null

const focusVec = new THREE.Vector3()
const focusTarget = new THREE.Vector3()

function applyThemeColors(dark: boolean) {
  if (!mat) return
  if (dark) {
    mat.uniforms.uColorBase.value.set(0x7c9685)
    mat.uniforms.uColorAccent.value.set(0xb8e892)
    mat.uniforms.uColorFocus.value.set(0xe0b079)
    mat.uniforms.uAlphaScale.value = 1.0
    mat.blending = THREE.AdditiveBlending
  } else {
    mat.uniforms.uColorBase.value.set(0x3f5447)
    mat.uniforms.uColorAccent.value.set(0x1f5934)
    mat.uniforms.uColorFocus.value.set(0x8f4f1a)
    mat.uniforms.uAlphaScale = { value: 1.35 }
    mat.blending = THREE.NormalBlending
  }
  mat.needsUpdate = true
  if (starMat) {
    starMat.color.set(dark ? 0x9ab0a2 : 0x52665a)
    starMat.opacity = dark ? 0.28 : 0.22
  }
}

function setup() {
  const el = host.value
  if (!el) return
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
  } catch {
    emit('unavailable')
    return
  }
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  renderer.setPixelRatio(dpr)
  el.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(42, 1, 0.1, 40)

  const mobile = window.matchMedia('(max-width: 760px)').matches
  const count = mobile ? 5500 : 10000
  formations = buildFormations(count, experiences.length, skills.map((s) => s.items.length))

  geo = new THREE.BufferGeometry()
  posAttr = new THREE.BufferAttribute(new Float32Array(formations[0].positions), 3)
  targetAttr = new THREE.BufferAttribute(new Float32Array(formations[1].positions), 3)
  accentAttr = new THREE.BufferAttribute(new Float32Array(formations[0].accent), 1)
  const seeds = new Float32Array(count)
  for (let i = 0; i < count; i++) seeds[i] = (i * 0.61803398875) % 1
  geo.setAttribute('position', posAttr)
  geo.setAttribute('aTarget', targetAttr)
  geo.setAttribute('aAccent', accentAttr)
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))

  mat = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uMorph: { value: 0 },
      uTime: { value: 0 },
      uPixelRatio: { value: dpr },
      uScale: { value: mobile ? 3.0 : 3.4 },
      uFocus: { value: new THREE.Vector3() },
      uFocusStrength: { value: 0 },
      uColorBase: { value: new THREE.Color(0x7c9685) },
      uColorAccent: { value: new THREE.Color(0xb8e892) },
      uColorFocus: { value: new THREE.Color(0xe0b079) },
      uAlphaScale: { value: 1.0 },
    },
  })
  cloud = new THREE.Points(geo, mat)
  scene.add(cloud)

  const starCount = mobile ? 360 : 720
  const starGeo = new THREE.BufferGeometry()
  const starPos = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i++) {
    starPos[i * 3] = (Math.random() - 0.5) * 22
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 14
    starPos[i * 3 + 2] = -3 - Math.random() * 10
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
  starMat = new THREE.PointsMaterial({
    color: 0x9ab0a2,
    size: 0.026,
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
  })
  stars = new THREE.Points(starGeo, starMat)
  scene.add(stars)

  applyThemeColors(props.isDark)
  shown = props.position
  resize()
  renderFrame(performance.now(), false)
  emit('ready')
}

function resize() {
  const el = host.value
  if (!el || !renderer || !camera || !mat) return
  const w = Math.max(1, el.clientWidth)
  const h = Math.max(1, el.clientHeight)
  portrait = w < 820 || w / h < 0.95
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  renderer.setPixelRatio(dpr)
  renderer.setSize(w, h, false)
  camera.aspect = w / h
  camera.fov = portrait ? 50 : 42
  camera.updateProjectionMatrix()
  mat.uniforms.uPixelRatio.value = dpr
}

function updateBuffers(a: number, b: number, m: number) {
  if (!posAttr || !targetAttr || !accentAttr || !geo) return
  const fa = formations[a]
  const fb = formations[b]
  if (a !== pairA || b !== pairB) {
    ;(posAttr.array as Float32Array).set(fa.positions)
    ;(targetAttr.array as Float32Array).set(fb.positions)
    posAttr.needsUpdate = true
    targetAttr.needsUpdate = true
    pairA = a
    pairB = b
  }
  const out = accentAttr.array as Float32Array
  const aa = fa.accent
  const ab = fb.accent
  const inv = 1 - m
  for (let i = 0; i < out.length; i++) out[i] = aa[i] * inv + ab[i] * m
  accentAttr.needsUpdate = true
}

function computeFocus(chapter: number, m: number): number {
  const idx = m < 0.5 ? chapter : Math.min(6, chapter + 1)
  const f = formations[idx]
  if (!f?.anchors.length) return 0
  const pick =
    idx === 3
      ? props.activePlace
      : idx === 4
        ? props.activeRole
        : idx === 5
          ? props.activeSkill
          : -1
  if (pick < 0) return 0
  const a = f.anchors[pick % f.anchors.length]
  focusTarget.set(a[0], a[1], a[2])
  const closeness = 1 - Math.min(1, Math.abs(shown - idx) * 1.6)
  return Math.max(0, closeness)
}

function renderFrame(now: number, loop: boolean) {
  if (!renderer || !scene || !camera || !cloud || !mat) return
  const dt = Math.min(0.05, (now - (lastTime || now)) / 1000)
  lastTime = now

  // High-response critical damping so 3D formations stay locked to Lenis sub-pixel scroll without double-lag.
  if (props.paused) {
    shown = props.position
  } else {
    shown += (props.position - shown) * (1 - Math.exp(-dt * 16))
  }
  if (Math.abs(props.position - shown) < 0.0004) shown = props.position

  const clamped = Math.max(0, Math.min(5.9999, shown))
  const a = Math.floor(clamped)
  const b = Math.min(6, a + 1)
  const m = shown >= 6 ? 1 : clamped - a

  updateBuffers(a, b, m)
  mat.uniforms.uMorph.value = m
  mat.uniforms.uTime.value = props.paused ? 0 : now * 0.001

  const strength = computeFocus(a, m)
  focusVec.lerp(focusTarget, 1 - Math.exp(-dt * 12))
  mat.uniforms.uFocus.value.copy(focusVec)
  mat.uniforms.uFocusStrength.value += (strength - mat.uniforms.uFocusStrength.value) * (1 - Math.exp(-dt * 10))

  smoothPX += (pointerX - smoothPX) * 0.08
  smoothPY += (pointerY - smoothPY) * 0.08

  const ca = CAM[a]
  const cb = CAM[b]
  const sm = m * m * (3 - 2 * m)
  const ox = (ca.ox + (cb.ox - ca.ox) * sm) * (portrait ? 0 : 1)
  const oy = portrait ? 0.82 : ca.y + (cb.y - ca.y) * sm
  const oz = (ca.z + (cb.z - ca.z) * sm) * (portrait ? 1.18 : 1)

  cloud.position.set(ox, oy, 0)
  const idle = props.paused ? 0 : Math.sin(now * 0.00028) * 0.12
  const finalfade = Math.max(0, Math.min(1, 6 - shown))
  cloud.rotation.x = ca.rx + (cb.rx - ca.rx) * sm + smoothPY * 0.14 * finalfade
  cloud.rotation.y = ca.ry + (cb.ry - ca.ry) * sm + idle * finalfade + smoothPX * 0.22 * finalfade

  camera.position.set(smoothPX * 0.16, -smoothPY * 0.12, oz)
  camera.lookAt(0, portrait ? -0.18 : 0, 0)

  if (stars && !props.paused) {
    stars.rotation.y = now * 0.00003 - shown * 0.08
    stars.position.x = -smoothPX * 0.3
    stars.position.y = smoothPY * 0.2
  }

  renderer.render(scene, camera)
  if (loop) raf = requestAnimationFrame((ts) => renderFrame(ts, true))
}

function syncLoop() {
  cancelAnimationFrame(raf)
  lastTime = performance.now()
  if (props.paused || document.hidden) {
    renderFrame(lastTime, false)
    return
  }
  raf = requestAnimationFrame((ts) => renderFrame(ts, true))
}

function onPointer(e: PointerEvent) {
  pointerX = (e.clientX / Math.max(1, window.innerWidth) - 0.5) * 2
  pointerY = (e.clientY / Math.max(1, window.innerHeight) - 0.5) * 2
}

watch(
  () => [props.position, props.activeRole, props.activeSkill, props.activePlace],
  () => {
    if (props.paused) renderFrame(performance.now(), false)
  },
)
watch(() => props.paused, syncLoop)
watch(() => props.isDark, (dark) => {
  applyThemeColors(dark)
  if (props.paused) renderFrame(performance.now(), false)
})

onMounted(() => {
  setup()
  if (!renderer) return
  ro = new ResizeObserver(() => {
    resize()
    if (props.paused) renderFrame(performance.now(), false)
  })
  if (host.value) ro.observe(host.value)
  window.addEventListener('pointermove', onPointer, { passive: true })
  document.addEventListener('visibilitychange', syncLoop)
  syncLoop()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
  window.removeEventListener('pointermove', onPointer)
  document.removeEventListener('visibilitychange', syncLoop)
  geo?.dispose()
  mat?.dispose()
  renderer?.dispose()
})
</script>

<template>
  <div ref="host" class="pj-canvas" aria-hidden="true" />
</template>
