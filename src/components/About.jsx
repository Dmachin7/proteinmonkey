import { motion } from 'framer-motion'
import aboutPhoto from '../assets/about-photo.jpg'

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
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            {/*
              TODO: drop the real about photo at src/assets/about-photo.jpg
              The styled fallback below will show until the image is in place.
            */}
            <img
              src={aboutPhoto}
              alt="Luis and Emily at Protein Monkey café"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            {/* Fallback placeholder */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-monkey-orange to-amber-600 hidden items-center justify-center"
              aria-hidden="true"
            >
              <div className="text-center text-monkey-white/80 p-8">
                <div className="text-6xl mb-4">🐒</div>
                <p className="font-semibold text-lg">Photo coming soon</p>
                <p className="text-sm opacity-70 mt-1">
                  Drop about-photo.jpg in src/assets/
                </p>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-monkey-orange/20 rounded-tl-full" />
          </div>

          {/* Decorative offset box */}
          <div className="absolute -z-10 translate-x-6 -translate-y-6 w-full h-full rounded-3xl bg-monkey-orange/20 hidden md:block" />
        </motion.div>
      </div>
    </section>
  )
}
