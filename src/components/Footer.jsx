import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const FOOTER_LINKS = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/DanielMMiralles' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-mata-33112a254/' },
  { icon: Mail,     label: 'Email',    href: 'mailto:damm172004@gmail.com' },
];


const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: 'var(--ember-bg)',
        borderTop: '1px solid var(--border-ember)',
        padding: '3rem 1.5rem 2rem',
        position: 'relative',
      }}
    >
      {/* Back to top */}
      <div style={{
        position: 'absolute',
        top: '-22px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
      }}>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4, scale: 1.05, boxShadow: '0 8px 24px var(--glow-red)' }}
          whileTap={{ scale: 0.92 }}
          style={{
            background: 'var(--ember-crimson)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ember-ash)',
            cursor: 'none',
            boxShadow: '0 4px 16px var(--glow-red)',
          }}
          aria-label="Volver arriba"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>

      <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
        {/* Logo wordmark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--ember-crimson), var(--ember-orange), var(--ember-amber))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}
        >
          D4MM
        </motion.div>

        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          {FOOTER_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ color: 'var(--ember-orange)', y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: 'var(--ember-muted)',
                transition: 'color 0.2s',
                display: 'flex', alignItems: 'center',
              }}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Tech stack used */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.4rem',
          marginBottom: '1.75rem',
        }}>
        </div>

        {/* Copyright */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          color: 'var(--ember-faint)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
        }}>
          © {new Date().getFullYear()} Daniel Mata · Hecho con{' '}
          <Heart size={12} style={{ color: 'var(--ember-crimson)', fill: 'var(--ember-crimson)' }} />
          {' '}y mucho ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
