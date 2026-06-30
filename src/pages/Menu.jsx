import { useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { menuCategories } from '../data/menuData'

gsap.registerPlugin(ScrollTrigger)

function MenuItemCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5">
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <h3 className="text-monkey-brown font-bold text-base leading-snug">{item.name}</h3>
        <span className="flex-shrink-0 text-monkey-orange font-semibold text-sm whitespace-nowrap">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="text-monkey-brown/65 text-sm leading-relaxed">{item.description}</p>
      )}
    </div>
  )
}

export default function Menu() {
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
          delay: 0.2,
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-monkey-cream min-h-screen">
      {/* Page header */}
      <section className="bg-monkey-brown pt-32 pb-14 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-monkey-orange font-semibold text-sm tracking-widest uppercase mb-3">
            Made Fresh Daily
          </p>
          <span
            ref={underlineRef}
            className="block w-10 h-px bg-monkey-orange mx-auto mb-5 origin-left"
            aria-hidden="true"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-monkey-cream">Our Menu</h1>
          <p className="mt-4 text-monkey-cream/70 text-base md:text-lg max-w-xl mx-auto">
            Protein-packed, made fresh, never compromising on flavor.
          </p>
        </motion.div>
      </section>

      {/* Sticky category tabs */}
      <nav
        className="sticky top-16 md:top-20 z-30 bg-monkey-cream/95 backdrop-blur-md border-b border-monkey-brown/10"
        aria-label="Menu categories"
      >
        <ul className="flex items-center gap-2 px-4 sm:px-6 py-3 overflow-x-auto scrollbar-hide max-w-5xl mx-auto">
          {menuCategories.map((cat) => (
            <li key={cat.id} className="flex-shrink-0">
              <a
                href={`#${cat.id}`}
                className="block rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-monkey-brown/70 hover:text-monkey-brown hover:bg-monkey-brown/5 transition-colors duration-200"
              >
                {cat.tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {menuCategories.map((cat) => (
          <motion.section
            id={cat.id}
            key={cat.id}
            className="scroll-mt-36 md:scroll-mt-40"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-monkey-brown mb-2">{cat.label}</h2>
            {cat.note && (
              <p className="text-monkey-brown/55 text-sm italic mb-6">{cat.note}</p>
            )}
            <div className={`grid sm:grid-cols-2 gap-4 ${cat.note ? '' : 'mt-6'}`}>
              {cat.items.map((item) => (
                <MenuItemCard key={item.name} item={item} />
              ))}
            </div>

            {cat.id === 'kids' && (
              <p className="mt-6 text-sm text-monkey-brown/60 italic">
                Ask about our gluten-free and dairy-free options
              </p>
            )}
          </motion.section>
        ))}
      </div>

      {/* Footer note */}
      <div className="px-6 pb-20 text-center">
        <p className="text-monkey-brown/50 text-sm max-w-md mx-auto">
          Menu items and pricing may vary. Visit us in Tampa, FL for the full experience.
        </p>
      </div>
    </main>
  )
}
