import { ref, computed, onMounted, onUnmounted, type Ref } from 'vue'

export interface CylinderItemTransform {
  x: number
  z: number
  rotationY: number
  scale: number
  opacity: number
  zIndex: number
  isFront: boolean
  transform: string
}

export interface CylinderCarouselOptions {
  radius?: number
  friction?: number
  sensitivity?: number
  onRotate?: (angle: number, activeIndex: number) => void
}

/**
 * Modular 3D Cylinder Carousel Composable (Rule 4.2 compliant)
 * Uses Math.sin and Math.cos to project items onto a 3D cylindrical surface.
 */
export function useCylinderCarousel(
  itemCount: Ref<number> | number,
  options: CylinderCarouselOptions = {}
) {
  const count = computed(() => (typeof itemCount === 'number' ? itemCount : itemCount.value))
  const radius = ref(options.radius || 620)
  const friction = options.friction ?? 0.92
  const sensitivity = options.sensitivity ?? 0.0018

  // Rotation State (in radians)
  const currentAngle = ref(0)
  const targetAngle = ref(0)
  const velocity = ref(0)

  // Drag interaction state
  const isDragging = ref(false)
  let startX = 0
  let lastX = 0
  let animFrameId: number | null = null

  // Responsive radius calculation
  function updateRadius() {
    if (typeof window === 'undefined') return
    const w = window.innerWidth
    if (w < 640) {
      radius.value = 380
    } else if (w < 1024) {
      radius.value = 520
    } else if (w < 1440) {
      radius.value = 640
    } else {
      radius.value = 750
    }
  }

  // Angular step per item (in radians)
  const step = computed(() => (count.value > 0 ? (2 * Math.PI) / count.value : 0))

  // Normalized active item index closest to front (angle facing camera = 0)
  const activeIndex = computed(() => {
    if (count.value === 0) return 0
    const normalized = ((-currentAngle.value % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
    const index = Math.round(normalized / step.value) % count.value
    return (index + count.value) % count.value
  })

  // Degree readout for HUD telemetry
  const degreeReadout = computed(() => {
    const deg = (((currentAngle.value * 180) / Math.PI) % 360 + 360) % 360
    return deg.toFixed(1)
  })

  // Calculate 3D transformation for an item at index
  function getItemTransform(index: number): CylinderItemTransform {
    if (count.value === 0) {
      return {
        x: 0,
        z: 0,
        rotationY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 1,
        isFront: true,
        transform: 'none',
      }
    }

    // Base position angle for this item + current carousel rotation
    const angle = index * step.value + currentAngle.value

    // Mathematical cylindrical projection (Rule 4.2)
    const sinA = Math.sin(angle)
    const cosA = Math.cos(angle)

    const x = radius.value * sinA
    // z offset: 0 at front (cosA = 1), pushed back when cosA < 1
    const z = radius.value * (cosA - 1)

    // Tangent rotation so card faces outward perpendicular to cylinder radius
    const rotationY = -(angle * 180) / Math.PI

    // Depth sorting & fading
    // cosA ranges from 1.0 (dead front) to -1.0 (behind pillar)
    const depthNormalized = (cosA + 1) / 2 // 0 (back) to 1 (front)
    const isFront = cosA > 0.55
    const opacity = Math.max(0.1, Math.pow(depthNormalized, 1.8))
    const scale = 0.8 + 0.25 * Math.max(0, cosA)
    const zIndex = Math.round(depthNormalized * 100)

    const transform = `translate3d(${x.toFixed(2)}px, 0px, ${z.toFixed(2)}px) rotateY(${rotationY.toFixed(2)}deg) scale(${scale.toFixed(3)})`

    return {
      x,
      z,
      rotationY,
      scale,
      opacity,
      zIndex,
      isFront,
      transform,
    }
  }

  // Animation Loop (Dampening & Lerp)
  function tick() {
    if (!isDragging.value) {
      // Apply momentum
      targetAngle.value += velocity.value
      velocity.value *= friction

      if (Math.abs(velocity.value) < 0.00001) {
        velocity.value = 0
      }
    }

    // Smooth lerp towards target
    const diff = targetAngle.value - currentAngle.value
    currentAngle.value += diff * 0.12

    if (options.onRotate) {
      options.onRotate(currentAngle.value, activeIndex.value)
    }

    animFrameId = requestAnimationFrame(tick)
  }

  // Mouse wheel handler (translates vertical wheel to cylinder rotation)
  function handleWheel(e: WheelEvent) {
    e.preventDefault()
    const delta = e.deltaY || e.deltaX
    const impulse = -delta * sensitivity * 0.65
    targetAngle.value += impulse
    velocity.value = impulse * 0.4
  }

  // Drag / Touch gestures
  function handlePointerDown(e: MouseEvent | TouchEvent) {
    isDragging.value = true
    velocity.value = 0
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    startX = clientX
    lastX = clientX
  }

  function handlePointerMove(e: MouseEvent | TouchEvent) {
    if (!isDragging.value) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const dx = clientX - lastX
    lastX = clientX

    const deltaAngle = (dx / radius.value) * 1.2
    targetAngle.value += deltaAngle
    currentAngle.value += deltaAngle
    velocity.value = deltaAngle * 0.5
  }

  function handlePointerUp() {
    if (!isDragging.value) return
    isDragging.value = false
  }

  // Navigation commands
  function jumpToIndex(index: number) {
    if (count.value === 0) return
    // Target angle where index * step + angle = 0 (or nearest equivalent)
    const desired = -index * step.value
    // Find nearest equivalent full rotation to avoid spinning 360 backwards
    const twoPi = 2 * Math.PI
    const currentNorm = targetAngle.value % twoPi
    let diff = ((desired - currentNorm) % twoPi + twoPi) % twoPi
    if (diff > Math.PI) diff -= twoPi

    targetAngle.value += diff
    velocity.value = 0
  }

  function next() {
    targetAngle.value -= step.value
    velocity.value = 0
  }

  function prev() {
    targetAngle.value += step.value
    velocity.value = 0
  }

  onMounted(() => {
    updateRadius()
    window.addEventListener('resize', updateRadius, { passive: true })
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('touchend', handlePointerUp)
    animFrameId = requestAnimationFrame(tick)
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateRadius)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('touchend', handlePointerUp)
    }
    if (animFrameId !== null) {
      cancelAnimationFrame(animFrameId)
      animFrameId = null
    }
  })

  return {
    radius,
    currentAngle,
    targetAngle,
    activeIndex,
    degreeReadout,
    isDragging,
    getItemTransform,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    jumpToIndex,
    next,
    prev,
  }
}
