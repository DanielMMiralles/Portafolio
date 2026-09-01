import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Globe } from 'lucide-react';
import danielPhoto from '../assets/daniel_studio_centered.jpg';

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
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <div className="section-label">// sobre mí & capacidades</div>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              Sobre Mí & Capacidades
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              <p>
                Ingeniero de Sistemas (en espera de título) por la Universidad Santa María (USM) con 3 años de experiencia construyendo soluciones tecnológicas.
              </p>
              <p>
                Especializado en arquitectura de software y desarrollo de soluciones adaptadas a las necesidades del cliente.
              </p>
            </div>

            {/* Quick Facts */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--amber)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Lechería, Venezuela</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GraduationCap size={16} color="var(--amber)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>USM — Ingeniería de Sistemas</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={16} color="var(--amber)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Español (Nativo) · Inglés Avanzado (IFISA)</span>
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
