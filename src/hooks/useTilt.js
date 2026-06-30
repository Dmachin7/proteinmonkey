import { useRef } from 'react'
import gsap from 'gsap'

export default function useTilt(strength = 10) {
  const ref = useRef(null)
  const quickX = useRef(null)
  const quickY = useRef(null)

  const ensureQuickSetters = () => {
    if (!ref.current) return
    if (!quickX.current) {
      quickX.current = gsap.quickTo(ref.current, 'rotateX', { duration: 0.4, ease: 'power3.out' })
      quickY.current = gsap.quickTo(ref.current, 'rotateY', { duration: 0.4, ease: 'power3.out' })
    }
  }

  const onMouseMove = (e) => {
    if (!ref.current) return
    ensureQuickSetters()
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    quickY.current(px * strength)
    quickX.current(-py * strength)
  }

  const onMouseLeave = () => {
    if (!ref.current) return
    ensureQuickSetters()
    quickX.current(0)
    quickY.current(0)
  }

  return { ref, onMouseMove, onMouseLeave }
}
