import { useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useTilt from '../hooks/useTilt'
import imgShake from '../assets/ProteinShake.jpg'
import imgTea from '../assets/menu-2.jpg'
import imgWaffles from '../assets/menu-1.jpg'
import imgSeasonal from '../assets/menu-4.jpg'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  {
    id: 'shakes',
    title: 'Protein Shakes',
    description:
      `Thick, creamy, and packed with clean protein. Choose from dozens of flavors — because "boring shake" isn't in our vocabulary.`,
    image: imgShake,
    imageAlt: 'Protein shake from Protein Monkey',
  },
  {
    id: 'juices',
    title: 'Loaded Teas',
    description:
      'Bold flavor, real energy. Our loaded teas are packed with vitamins and antioxidants — the upgrade your afternoon deserves.',
    image: imgTea,
    imageAlt: 'Loaded tea from Protein Monkey',
  },
  {
    id: 'waffles',
    title: 'Protein Waffles',
    description:
      'Golden, fluffy, and secretly macro-friendly. The waffle you can eat every day and never feel guilty about.',
    image: imgWaffles,
    imageAlt: 'Protein waffles from Protein Monkey',
  },
  {
    id: 'seasonal',
    title: 'Seasonal Specials',
    description:
      `Always something new. We rotate limited items with whatever's fresh, fun, and in season — follow us to stay in the loop.`,
    image: imgSeasonal,
    imageAlt: 'Seasonal special from Protein Monkey',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

function MenuCard({ item }) {
  const { ref: tiltRef, onMouseMove, onMouseLeave } = useTilt(8)

  return (
    <motion.article
      variants={cardVariants}
      ref={tiltRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformPerspective: 800 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer will-change-transform"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-monkey-brown font-bold text-lg mb-2 group-hover:text-monkey-orange transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-monkey-brown/65 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}

export default function MenuHighlights() {
  const underlineRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    <section id="menu" className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p className="text-monkey-orange font-semibold text-sm tracking-widest uppercase mb-3">
            The Menu
          </p>
          <span
            ref={underlineRef}
            className="block w-10 h-px bg-monkey-orange mx-auto mb-5 origin-left"
            aria-hidden="true"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-monkey-brown">
            What We're Making
          </h2>
          <p className="mt-4 text-monkey-brown/60 text-base md:text-lg max-w-xl mx-auto">
            Everything made fresh, every day. No shortcuts, no compromises.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-monkey-brown/60 text-sm mb-4">
            Want the full picture?
          </p>
          <Link
            to="/menu"
            className="inline-block bg-monkey-brown text-monkey-cream font-semibold text-sm px-7 py-3 rounded-full hover:bg-monkey-orange hover:text-monkey-brown transition-all duration-200"
          >
            See Full Menu →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
