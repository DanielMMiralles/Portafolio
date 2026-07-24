import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, BookOpen, X, Menu, Layers } from 'lucide-react';
import d4mmLogo from '../assets/d4mm_logo.jpg';

/* ── Logo Component ─────────────────────────── */
const D4MMLogo = () => (
  <img
    src={d4mmLogo}
    alt="D4MM logo"
    style={{ height: '32px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }}
  />
);

/* ── Nav Items ──────────────────────────────── */
const navItems = [
  { name: 'Inicio',      icon: Home,      id: 'home'       },
  { name: 'Sobre Mí',    icon: User,      id: 'about'      },
  { name: 'Experiencia', icon: Briefcase, id: 'experience' },
  { name: 'Formación',   icon: BookOpen,  id: 'training'   },
  { name: 'Habilidades', icon: Code,      id: 'skills'     },
  { name: 'Proyectos',   icon: Layers,    id: 'projects'   },
  { name: 'Contacto',    icon: Mail,      id: 'contact'    },
];

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on ESC */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Lock scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '3px', /* below progress bar */
          left: 0,
          right: 0,
          zIndex: 9000,
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
          background: scrolled
            ? 'rgba(10,0,0,0.75)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(193,18,31,0.2)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            style={{ background: 'none', border: 'none', padding: '4px', cursor: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to home"
          >
            <D4MMLogo />
          </motion.button>

          {/* Desktop nav */}
          <ul style={{
            display: 'flex',
            gap: '0.25rem',
            listStyle: 'none',
            alignItems: 'center',
          }} className="hidden-mobile">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} style={{ position: 'relative' }}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '0.5rem 0.85rem',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'var(--ember-orange)' : 'var(--ember-ash-dim)',
                      transition: 'color 0.2s',
                      position: 'relative',
                    }}
                    whileHover={{ color: '#F77F00' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={15} />
                    {item.name}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(193,18,31,0.12)',
                          border: '1px solid rgba(193,18,31,0.35)',
                          borderRadius: '8px',
                          zIndex: -1,
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setIsOpen(true)}
            style={{
              background: 'none',
              border: '1px solid var(--border-ember)',
              borderRadius: '8px',
              padding: '0.45rem',
              cursor: 'none',
              color: 'var(--ember-ash)',
              display: 'none',
            }}
            className="show-mobile"
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9100,
                background: 'rgba(10,0,0,0.7)',
                backdropFilter: 'blur(4px)',
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0, right: 0, bottom: 0,
                width: 'min(320px, 85vw)',
                background: 'var(--ember-surface)',
                borderLeft: '1px solid var(--border-ember)',
                zIndex: 9200,
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <D4MMLogo />
                <motion.button
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'none', color: 'var(--ember-muted)', padding: '4px' }}
                  whileTap={{ scale: 0.85 }}
                >
                  <X size={22} />
                </motion.button>
              </div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: activeSection === item.id ? 'rgba(193,18,31,0.12)' : 'transparent',
                      border: `1px solid ${activeSection === item.id ? 'rgba(193,18,31,0.35)' : 'transparent'}`,
                      color: activeSection === item.id ? 'var(--ember-orange)' : 'var(--ember-ash-dim)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: activeSection === item.id ? 600 : 400,
                      cursor: 'none',
                      textAlign: 'left',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
