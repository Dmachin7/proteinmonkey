import { useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import aboutPhoto from '../assets/about-photo.jpg'

gsap.registerPlugin(ScrollTrigger)

const badges = [
  { label: 'Family Owned', icon: '🏡' },
  { label: 'Dog Friendly', icon: '🐾' },
  { label: 'Macro Friendly', icon: '💪' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const imgWrapRef = useRef(null)
  const wipeRef = useRef(null)
  const photoRef = useRef(null)
  const underlineRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(photoRef.current, { scale: 1.18 })

      gsap.timeline({
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })
        .to(wipeRef.current, {
          scaleX: 0,
          duration: 1.1,
          ease: 'power3.inOut',
          transformOrigin: 'right',
        })
        .to(photoRef.current, {
          scale: 1,
          duration: 1.3,
          ease: 'power3.out',
        }, '-=1.0')

      gsap.fromTo(
        underlineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.out',
          transformOrigin: 'left',
          scrollTrigger: {
            trigger: underlineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="bg-monkey-cream py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text Column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          <p className="text-monkey-orange font-semibold text-sm tracking-widest uppercase mb-3">
            Our Story
          </p>
          <span
            ref={underlineRef}
            className="block w-10 h-px bg-monkey-orange mb-5 origin-left"
            aria-hidden="true"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-monkey-brown leading-tight mb-6">
            Real Food. Real People. Right Here in Tampa.
          </h2>
          <p className="text-monkey-brown/75 text-base md:text-lg leading-relaxed mb-8">
            A family-run healthy café in the heart of Westchase, owned by Luis
            and Emily. We believe eating healthy should never mean sacrificing
            flavor. Every item on our menu is made fresh with real ingredients
            — and if you're tracking your macros, we've got you covered.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 bg-monkey-orange/15 text-monkey-brown font-semibold text-sm px-4 py-2 rounded-full border border-monkey-orange/30"
              >
                <span aria-hidden="true">{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="order-1 md:order-2"
        >
          <div ref={imgWrapRef} className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img
              ref={photoRef}
              src={aboutPhoto}
              alt="Luis and Emily at Protein Monkey café"
              className="w-full h-full object-cover"
            />
            {/* Wipe reveal panel */}
            <div
              ref={wipeRef}
              className="absolute inset-0 bg-monkey-brown origin-right"
              aria-hidden="true"
            />

            {/* Decorative corner accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-monkey-orange/20 rounded-tl-full pointer-events-none" />
          </div>

          {/* Decorative offset box */}
          <div className="absolute -z-10 translate-x-6 -translate-y-6 w-full h-full rounded-3xl bg-monkey-orange/20 hidden md:block" />
        </motion.div>
      </div>
    </section>
  )
}
