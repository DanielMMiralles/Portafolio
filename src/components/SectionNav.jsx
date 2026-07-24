import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionNav — Fixed vertical dot navigation showing active section.
 * Shows on the right side, 8 pips for 7 sections.
 */
const SECTIONS = [
  { id: 'home',       label: 'Inicio' },
  { id: 'about',      label: 'Sobre Mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'training',   label: 'Formación' },
  { id: 'skills',     label: 'Habilidades' },
  { id: 'projects',   label: 'Proyectos' },
  { id: 'contact',    label: 'Contacto' },
];

const SectionNav = ({ activeSection }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Sección rápida"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 8000,
      }}
    >
      {SECTIONS.map((s) => {
        const isActive = activeSection === s.id;
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            title={s.label}
            aria-label={`Ir a ${s.label}`}
            style={{
              background: 'none',
              border: 'none',
              padding: '4px',
              cursor: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              animate={{
                width:      isActive ? '18px' : '4px',
                height:     isActive ? '4px'  : '4px',
                background: isActive
                  ? 'var(--ember-orange)'
                  : 'var(--ember-faint)',
                boxShadow: isActive
                  ? '0 0 8px rgba(247,127,0,0.6)'
                  : 'none',
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: '99px' }}
            />
          </button>
        );
      })}
    </nav>
  );
};

export default SectionNav;
