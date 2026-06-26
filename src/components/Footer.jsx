import { Instagram, Facebook } from 'lucide-react'
import logoSrc from '../assets/Logo.png'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Order', href: '#order' },
  { label: 'Visit Us', href: '#visit' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/proteinmonkey/',
    Icon: Instagram,
  },
  {
    label: 'Facebook',
    // TODO: replace href with real Facebook page URL when available
    href: '#',
    Icon: Facebook,
  },
]

export default function Footer() {
  return (
    <footer className="bg-monkey-brown text-monkey-cream/70 pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <a href="#" aria-label="Protein Monkey Home">
              <img
                src={logoSrc}
                alt="Protein Monkey"
                className="h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(6) hue-rotate(-5deg)' }}
              />
            </a>
            <p className="text-monkey-cream/55 text-sm leading-relaxed max-w-xs">
              Tampa's favorite healthy café. Protein shakes, waffles, green
              juices &amp; more — made fresh every day in West Park Village.
            </p>
          </div>

          {/* Nav Links Column */}
          <div>
            <h3 className="text-monkey-white font-semibold text-sm mb-4 tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-monkey-cream/60 text-sm hover:text-monkey-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social Column */}
          <div>
            <h3 className="text-monkey-white font-semibold text-sm mb-4 tracking-wide">
              Connect
            </h3>
            <div className="flex gap-3 mb-5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-monkey-orange hover:text-monkey-brown text-monkey-cream/70 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href="tel:+17863763441"
              className="text-monkey-cream/50 text-sm hover:text-monkey-orange transition-colors duration-200"
            >
              (786) 376-3441
            </a>
            <p className="text-monkey-cream/50 text-sm mt-1">
              10110 Montague St
              <br />
              Tampa, FL 33626
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-monkey-cream/40 text-sm text-center sm:text-left">
            © 2025 Protein Monkey. All rights reserved.
          </p>
          <p className="text-monkey-orange/70 text-sm font-medium text-center">
            Fueling Tampa, one shake at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
