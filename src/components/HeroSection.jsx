import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import InteractiveWorkspace from './InteractiveWorkspace';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/DanielMMiralles',
    icon: <Github size={18} />,
    label: 'GitHub',
    color: '#ffffff',
    bg: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(255, 255, 255, 0.4)',
  },
  {
    href: 'https://www.linkedin.com/in/daniel-mata-33112a254/',
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    color: '#0A66C2',
    bg: 'rgba(10, 102, 194, 0.14)',
    border: '#0A66C2',
  },
  {
    href: 'https://wa.me/+584248677833',
    icon: <WhatsAppIcon size={18} />,
    label: 'WhatsApp',
    color: '#25D366',
    bg: 'rgba(37, 211, 102, 0.14)',
    border: '#25D366',
  },
  {
    href: 'mailto:damm172004@gmail.com',
    icon: <Mail size={18} />,
    label: 'Email',
    color: '#EA4335',
    bg: 'rgba(234, 67, 53, 0.14)',
    border: '#EA4335',
  },
  {
    href: 'https://www.instagram.com/daniel.a.mm/',
    icon: <Instagram size={18} />,
    label: 'Instagram',
    color: '#E1306C',
    bg: 'rgba(225, 48, 108, 0.14)',
    border: '#E1306C',
  },
];

const HeroSection = () => {
  return (
    <section id="top" style={{ paddingTop: '8rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        {/* Top: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '750px', marginBottom: '3rem' }}
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
          >
            Hola, soy{' '}
            <span style={{ color: 'var(--amber)' }}>Daniel M. Miralles</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '650px',
            }}
          >
            Ingeniero de Sistemas (en espera de título) con 3 años de experiencia en desarrollo de soluciones tecnológicas aplicadas. Entusiasta de la innovación potenciada con IA y el aprendizaje constante.
          </motion.p>

          {/* CTAs + Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
          >
            <motion.a
              href="#projects"
              className="btn-amber"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Ver Casos de Estudio</span>
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contacto
            </motion.a>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem' }}>
              {SOCIAL_LINKS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="social-icon"
                  style={{
                    transition: 'color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = s.border;
                    e.currentTarget.style.backgroundColor = s.bg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-muted)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom: Interactive Workspace Component with Hotspots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <InteractiveWorkspace />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
