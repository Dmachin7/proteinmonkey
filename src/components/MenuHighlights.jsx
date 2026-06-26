import { motion } from 'framer-motion'

const menuItems = [
  {
    id: 'shakes',
    title: 'Protein Shakes',
    description:
      `Thick, creamy, and packed with clean protein. Choose from dozens of flavors — because "boring shake" isn't in our vocabulary.`,
    image: '/src/assets/ProteinShake.jpg',
    imageAlt: 'Protein shake from Protein Monkey',
    accent: 'from-amber-400/30 to-monkey-orange/10',
    emoji: '🥤',
  },
  {
    id: 'juices',
    title: 'Loaded Teas',
    description:
      'Bold flavor, real energy. Our loaded teas are packed with vitamins and antioxidants — the upgrade your afternoon deserves.',
    image: '/src/assets/menu-2.jpg',
    imageAlt: 'Loaded tea from Protein Monkey',
    accent: 'from-green-400/20 to-emerald-300/10',
    emoji: '🧋',
  },
  {
    id: 'waffles',
    title: 'Protein Waffles',
    description:
      'Golden, fluffy, and secretly macro-friendly. The waffle you can eat every day and never feel guilty about.',
    image: '/src/assets/menu-1.jpg',
    imageAlt: 'Protein waffles from Protein Monkey',
    accent: 'from-yellow-300/30 to-amber-200/10',
    emoji: '🧇',
  },
  {
    id: 'seasonal',
    title: 'Seasonal Specials',
    description:
      `Always something new. We rotate limited items with whatever's fresh, fun, and in season — follow us to stay in the loop.`,
    image: '/src/assets/menu-4.jpg',
    imageAlt: 'Seasonal special from Protein Monkey',
    accent: 'from-monkey-orange/20 to-pink-300/10',
    emoji: '✨',
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
  return (
    <motion.article
      variants={cardVariants}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextSibling.style.display = 'flex'
          }}
        />
        {/* Fallback placeholder */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.accent} hidden items-center justify-center bg-monkey-cream`}
          aria-hidden="true"
        >
          <div className="text-center">
            <div className="text-5xl mb-2">{item.emoji}</div>
            <p className="text-monkey-brown/50 text-xs font-medium">
              {/* TODO: drop {item.id} photo in src/assets/menu-{item.id}.jpg */}
              Photo coming soon
            </p>
          </div>
        </div>
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
          <a
            href="https://www.doordash.com/store/protein-monkey-tampa-23748556/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-monkey-brown text-monkey-cream font-semibold text-sm px-7 py-3 rounded-full hover:bg-monkey-orange hover:text-monkey-brown transition-all duration-200"
          >
            See Full Menu on DoorDash →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
