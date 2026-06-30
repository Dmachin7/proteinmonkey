import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logoSrc from '../assets/Logo.png'
import wafflesVideo from '../assets/Waffles_Video.mp4'
import coffeeVideo from '../assets/Coffee_Video.mp4'

gsap.registerPlugin(ScrollTrigger)

const VIDEOS = [
  wafflesVideo,
  coffeeVideo,
]

const PANEL_SRCS = [
  VIDEOS[0], // Waffles
  VIDEOS[1], // Coffee
  VIDEOS[0], // Waffles
  VIDEOS[1], // Coffee
  VIDEOS[0], // Waffles
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0)
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const videoRefs = [ref0, ref1]
  const sectionRef = useRef(null)
  const videoLayerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    videoRefs.forEach((ref, i) => {
      if (!ref.current) return
      if (i === activeIdx) {
        ref.current.currentTime = 0
        ref.current.play().catch(() => {})
      } else {
        ref.current.pause()
      }
    })
  }, [activeIdx])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background video layer drifts + scales slightly faster than scroll for depth
      gsap.to(videoLayerRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Logo + CTA fade/scale out as the hero scrolls away
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -60,
        scale: 0.94,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-monkey-brown">
      <div ref={videoLayerRef} className="absolute inset-0">
      {/* Video 0 — Waffles */}
      <video
        ref={ref0}
        src={VIDEOS[0]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setActiveIdx(1)}
        className={`absolute inset-0 w-full h-full object-cover md:hidden transition-opacity duration-1000 ${
          activeIdx === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Video 1 — Coffee */}
      <video
        ref={ref1}
        src={VIDEOS[1]}
        muted
        playsInline
        preload="auto"
        onEnded={() => setActiveIdx(0)}
        className={`absolute inset-0 w-full h-full object-cover md:hidden transition-opacity duration-1000 ${
          activeIdx === 1 ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Desktop video panel strip */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center gap-5 pointer-events-none">
        {PANEL_SRCS.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            style={{ height: '68vh', aspectRatio: '9 / 16' }}
          >
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      </div>

      {/* Flat dark overlay — keeps text readable over any video frame */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Bottom gradient — cinematic fade into the section below, theme-aware */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, var(--color-dark) 0%, transparent 55%)',
        }}
      />

      {/* Subtle texture dots overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6 pt-24 pb-16">
        {/* Logo */}
        <motion.div {...fadeUp(0)}>
          <img
            src={logoSrc}
            alt="Protein Monkey"
            className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto mx-auto drop-shadow-2xl"
            style={{ filter: 'brightness(4) saturate(1.1) hue-rotate(12deg)' }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <Link
            to="/menu"
            className="inline-block bg-monkey-orange text-monkey-brown font-bold text-base px-8 py-3.5 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            See Our Menu
          </Link>
          <a
            href="https://www.doordash.com/store/protein-monkey-tampa-23748556/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-monkey-orange text-monkey-orange font-bold text-base px-8 py-3.5 rounded-full hover:bg-monkey-orange/10 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Order on DoorDash
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-monkey-orange/50 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-monkey-orange/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
