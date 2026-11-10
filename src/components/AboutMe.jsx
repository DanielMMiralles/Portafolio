import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Globe } from 'lucide-react';
import danielPhoto from '../assets/daniel_profile_formal.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Photo Centered */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                width: '240px',
                height: '300px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid var(--border-subtle)',
                flexShrink: 0,
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 24px rgba(245, 158, 11, 0.08)',
              }}
              className="about-photo"
            >
              <img
                src={danielPhoto}
                alt="Daniel M. Miralles"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
              />
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <div className="section-label">// sobre mí & capacidades</div>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              Sobre Mí & Capacidades
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1.03rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              <p>
                Como Ingeniero de Sistemas y Arquitecto de Software, mi enfoque es construir sistemas confiables y escalables que resuelvan problemas reales de negocio sin añadir complejidad innecesaria.
              </p>
              <p>
                Cuento con más de 3 años de experiencia respetando los fundamentos de la ingeniería —estado predecible, integridad de datos y alta disponibilidad— mientras integro de forma pragmática estándares modernos como agentes de IA y Model Context Protocol (MCP).
              </p>
            </div>

            {/* Quick Facts */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--amber)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Lechería, Venezuela (UTC-4)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GraduationCap size={16} color="var(--amber)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>USM — Ingeniería de Sistemas</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={16} color="var(--amber)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Español (Nativo) · Inglés B2</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .about-photo {
            width: 180px !important;
            height: 225px !important;
            margin: 0 auto;
          }
          .about-grid .section-label,
          .about-grid .section-title {
            justify-content: center;
          }
          .about-grid div[style*="justifyContent"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
