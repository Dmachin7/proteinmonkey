import { motion } from 'framer-motion'

export default function OrderNow() {
  return (
    <section id="order" className="bg-monkey-brown py-20 md:py-28 px-6 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-accent) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Orange glow top-right */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Label */}
          <p className="text-monkey-orange font-semibold text-sm tracking-widest uppercase mb-5">
            Can't Make It In?
          </p>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-monkey-white leading-tight mb-5">
            We've Got{' '}
            <span className="text-monkey-orange">You.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-monkey-cream/70 text-base md:text-lg max-w-lg mx-auto mb-10">
            Order your favorites delivered straight to your door. Fresh,
            fast, and worth every bite.
          </p>

          {/* DoorDash CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <a
              href="https://www.doordash.com/store/protein-monkey-tampa-23748556/"
              className="inline-flex items-center gap-3 bg-[#FF3008] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* DoorDash logo mark (simplified) */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
              Order on DoorDash
            </a>
          </motion.div>

          {/* Secondary text */}
          <p className="mt-6 text-monkey-cream/40 text-sm">
            Also available for pickup — just swing by West Park Village.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
