import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

const hours = [
  { day: 'Monday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Tuesday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Wednesday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Thursday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Friday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Saturday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Sunday', open: '10:00 AM', close: '3:00 PM' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function VisitUs() {
  return (
    <section id="visit" className="bg-monkey-cream py-20 md:py-28 px-6">
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
            Find Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-monkey-brown">
            Visit Us
          </h2>
          <p className="mt-4 text-monkey-brown/60 text-base md:text-lg">
            Come say hi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Hours + Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-monkey-orange/15 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-monkey-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-monkey-brown text-base mb-1">
                  Address
                </h3>
                <p className="text-monkey-brown/70 text-sm leading-relaxed">
                  10110 Montague St
                  <br />
                  Tampa, FL 33626
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-monkey-orange/15 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-monkey-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-monkey-brown text-base mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+17863763441"
                  className="text-monkey-brown/70 text-sm hover:text-monkey-orange transition-colors duration-200"
                >
                  (786) 376-3441
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-monkey-orange/15 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-monkey-orange" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-monkey-brown text-base mb-3">
                  Hours
                </h3>
                <ul className="space-y-2">
                  {hours.map(({ day, open, close }) => (
                    <li
                      key={day}
                      className="flex justify-between text-sm text-monkey-brown/70 border-b border-monkey-brown/10 pb-1.5 last:border-0"
                    >
                      <span className="font-medium">{day}</span>
                      <span>
                        {open} – {close}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Google Map Embed */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-monkey-orange/10 relative">
              <iframe
                src="https://maps.google.com/maps?q=10110+Montague+St+Tampa+FL+33626&output=embed&z=17"
                title="Protein Monkey location map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Get Directions link */}
            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10110+Montague+St,+Tampa,+FL+33626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-monkey-brown/70 hover:text-monkey-orange text-sm font-medium transition-colors duration-200"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
