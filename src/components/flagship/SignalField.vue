<script setup lang="ts">
/**
 * A living "signal network": drifting nodes, proximity links, and pulses
 * that travel along links. It leans toward the pointer. Decorative only.
 * Stops entirely when off-screen, when the tab is hidden, or when motion
 * is paused, leaving a single still frame.
 */
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{ paused?: boolean; intensity?: number }>(), { paused: false, intensity: 1 })
const canvas = ref<HTMLCanvasElement | null>(null)

type Node = { x: number; y: number; vx: number; vy: number; r: number; hue: 0 | 1 }
type Pulse = { a: number; b: number; t: number; speed: number }
let ctx: CanvasRenderingContext2D | null = null
let nodes: Node[] = []
let pulses: Pulse[] = []
let width = 0, height = 0, dpr = 1
let frame = 0
let visible = true
let last = 0
const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false }
let observer: IntersectionObserver | null = null
let resizeObserver: ResizeObserver | null = null
const LINK = 150

function seed() {
  const area = width * height
  const count = Math.round(Math.max(26, Math.min(92, area / 15000)) * props.intensity)
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    r: Math.random() * 1.3 + 0.6,
    hue: Math.random() < 0.18 ? 1 : 0,
  }))
  pulses = []
}

function resize() {
  const el = canvas.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  width = Math.max(1, rect.width)
  height = Math.max(1, rect.height)
  dpr = Math.min(2, window.devicePixelRatio || 1)
  el.width = Math.round(width * dpr)
  el.height = Math.round(height * dpr)
  ctx = el.getContext('2d')
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
  seed()
  draw(0)
}

function draw(dt: number) {
  if (!ctx) return
  ctx.clearRect(0, 0, width, height)
  // Pointer easing
  pointer.x += (pointer.tx - pointer.x) * 0.08
  pointer.y += (pointer.ty - pointer.y) * 0.08
  for (const n of nodes) {
    n.x += n.vx * dt * 0.06
    n.y += n.vy * dt * 0.06
    if (pointer.active) {
      const dx = pointer.x - n.x, dy = pointer.y - n.y
      const d2 = dx * dx + dy * dy
      if (d2 < 220 * 220 && d2 > 1) { n.x += dx * 0.0009 * dt * 0.06; n.y += dy * 0.0009 * dt * 0.06 }
    }
    if (n.x < -20) n.x = width + 20; else if (n.x > width + 20) n.x = -20
    if (n.y < -20) n.y = height + 20; else if (n.y > height + 20) n.y = -20
  }
  // Links
  ctx.lineWidth = 1
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i]
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j]
      const dx = a.x - b.x, dy = a.y - b.y
      const d2 = dx * dx + dy * dy
      if (d2 > LINK * LINK) continue
      const k = 1 - Math.sqrt(d2) / LINK
      ctx.strokeStyle = `rgba(69, 215, 255, ${(k * 0.16).toFixed(3)})`
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
      if (dt && pulses.length < 14 && Math.random() < 0.00035 * dt * 0.06) pulses.push({ a: i, b: j, t: 0, speed: 0.0006 + Math.random() * 0.0008 })
    }
    if (pointer.active) {
      const dx = a.x - pointer.x, dy = a.y - pointer.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < 190) {
        ctx.strokeStyle = `rgba(69, 215, 255, ${((1 - d / 190) * 0.42).toFixed(3)})`
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke()
      }
    }
  }
  // Nodes
  for (const n of nodes) {
    ctx.fillStyle = n.hue ? 'rgba(169, 155, 255, .85)' : 'rgba(150, 228, 255, .8)'
    ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill()
  }
  // Pulses: bright packets travelling along links
  pulses = pulses.filter(p => {
    p.t += p.speed * dt
    const a = nodes[p.a], b = nodes[p.b]
    if (!a || !b || p.t >= 1) return false
    const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t
    const g = ctx!.createRadialGradient(x, y, 0, x, y, 9)
    g.addColorStop(0, 'rgba(200, 245, 255, .95)')
    g.addColorStop(1, 'rgba(69, 215, 255, 0)')
    ctx!.fillStyle = g
    ctx!.beginPath(); ctx!.arc(x, y, 9, 0, Math.PI * 2); ctx!.fill()
    return true
  })
}

function loop(now: number) {
  frame = 0
  const dt = Math.min(48, now - (last || now))
  last = now
  draw(dt)
  schedule()
}
function schedule() {
  if (frame || props.paused || !visible || document.hidden) return
  frame = requestAnimationFrame(loop)
}
function stop() { cancelAnimationFrame(frame); frame = 0; last = 0 }

function onPointer(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || !canvas.value) return
  const rect = canvas.value.getBoundingClientRect()
  pointer.tx = event.clientX - rect.left
  pointer.ty = event.clientY - rect.top
  if (!pointer.active) { pointer.x = pointer.tx; pointer.y = pointer.ty }
  pointer.active = pointer.ty > -40 && pointer.ty < rect.height + 40
}
function onLeave() { pointer.active = false }
function onVisibility() { if (document.hidden) stop(); else schedule() }

watch(() => props.paused, (paused) => { if (paused) { stop(); draw(0) } else schedule() })

onMounted(() => {
  resize()
  resizeObserver = new ResizeObserver(() => resize())
  if (canvas.value) resizeObserver.observe(canvas.value)
  observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) schedule(); else stop() })
  if (canvas.value) observer.observe(canvas.value)
  window.addEventListener('pointermove', onPointer, { passive: true })
  document.documentElement.addEventListener('pointerleave', onLeave)
  document.addEventListener('visibilitychange', onVisibility)
  schedule()
})
onBeforeUnmount(() => {
  stop()
  observer?.disconnect()
  resizeObserver?.disconnect()
  window.removeEventListener('pointermove', onPointer)
  document.documentElement.removeEventListener('pointerleave', onLeave)
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <canvas ref="canvas" class="fs-signal" aria-hidden="true" />
</template>
