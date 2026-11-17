import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { personalInfo } from '../data/personal';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'DevOps', href: '#devops' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-2 left-0 right-0 z-50 flex justify-center transition-all duration-300`}
      role="banner"
    >
      <nav
        className={`flex items-center justify-between w-full max-w-6xl mx-4 px-4 py-3 rounded-xl border transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 frosted border-border shadow-sm'
            : 'bg-transparent border-transparent'
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-sm font-bold text-text-primary hover:text-accent-primary transition-colors duration-200"
          aria-label={`${personalInfo.name} - Home`}
        >
          harsh<span className="text-accent-primary">.</span>dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-accent-primary bg-accent-primary-dim font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume download */}
        <a
          href={personalInfo.resumeUrl}
          download
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border text-text-primary hover:border-accent-primary hover:text-accent-primary hover:shadow-glow-subtle transition-all duration-200 card-highlight"
          aria-label="Download resume"
        >
          <Download size={14} />
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary transition-colors duration-200"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-4 right-4 bg-surface/95 frosted border border-border rounded-xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col p-2" role="list">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = active === id;
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-2.5 text-sm rounded-lg transition-colors duration-200 ${
                        isActive
                          ? 'text-accent-primary bg-accent-primary-dim font-medium'
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
                      }`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2 pt-2 border-t border-border">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-2 rounded-lg transition-colors duration-200"
                  aria-label="Download resume"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
