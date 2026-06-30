import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoSrc from '../assets/Logo.png'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/menu', isRoute: true },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Order', href: '/#order' },
  { label: 'Visit Us', href: '/#visit' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const isSolid = isScrolled || isOpen || pathname !== '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-monkey-brown/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" aria-label="Protein Monkey Home" className="flex-shrink-0">
            <img
              src={logoSrc}
              alt="Protein Monkey logo"
              className="h-14 md:h-16 w-auto"
              style={{ filter: 'brightness(4) saturate(1.1) hue-rotate(12deg)' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-monkey-cream font-medium text-sm tracking-wide hover:text-monkey-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-monkey-cream font-medium text-sm tracking-wide hover:text-monkey-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="https://www.doordash.com/store/protein-monkey-tampa-23748556/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-monkey-orange text-monkey-brown font-semibold text-sm px-5 py-2 rounded-full hover:brightness-110 transition-all duration-200"
              >
                Order Now
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-monkey-cream rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-6 h-0.5 bg-monkey-cream rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-monkey-cream rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-monkey-brown border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) =>
                link.isRoute ? (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className="block py-3 text-monkey-cream font-medium text-base hover:text-monkey-orange transition-colors duration-200 border-b border-white/10 last:border-0"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ) : (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block py-3 text-monkey-cream font-medium text-base hover:text-monkey-orange transition-colors duration-200 border-b border-white/10 last:border-0"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                )
              )}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <a
                  href="https://www.doordash.com/store/protein-monkey-tampa-23748556/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block text-center bg-monkey-orange text-monkey-brown font-semibold py-3 rounded-full hover:brightness-110 transition-all duration-200"
                >
                  Order Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
