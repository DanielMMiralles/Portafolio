import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(12, 10, 9, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-muted)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Brand: D4MM Monogram + Full Name */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
              fontSize: '0.8rem',
              color: '#0c0a09',
              background: 'var(--amber)',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '-0.02em',
              margin: '2',
            }}
          >
            D4MM
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Daniel M. Miralles
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-amber"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://drive.google.com/file/d/18qr2iQbVwR6aHBbOYjvMctdb8Dygegxk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}
          >
            <FileText size={14} />
            <span>CV</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-toggle"
          aria-label="Menú"
          style={{ color: 'var(--text-primary)', display: 'none', padding: '0.5rem' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-subtle)', padding: '1.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/18qr2iQbVwR6aHBbOYjvMctdb8Dygegxk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber"
              style={{ justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <FileText size={16} />
              Visualizar CV
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
