import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Software Developer',
    company: 'Adakademy, C.A.',
    period: '2025 — ACTUALIDAD',
    location: 'Lechería, Anzoátegui',
    type: 'Jornada Completa',
    bullets: [
      'Desarrollo de agentes autónomos inteligentes para captación automatizada de clientes, registro y pagos.',
      'Software de gestión documental centralizado para empresa local.',
      'Refactorización y arquitectura para escalabilidad, alta disponibilidad y seguridad.',
      'Middleware especializado para pasarela de pagos segura.',
      'Sistema ERP integral para el sector naviero.',
    ],
    tech: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'n8n', 'TailwindCSS'],
  },
  {
    role: 'Software Developer',
    company: 'Freelance / Consultoría',
    period: '2023 — ACTUALIDAD',
    location: 'Modalidad Remota',
    type: 'Freelance / Consultoría',
    bullets: [
      'App móvil con integración de agente IA de atención al cliente vía WhatsApp para distribuidora.',
      'Gestión de logística y operaciones empresariales con captación automática.',
      'Integración de pasarelas de pago y automatizaciones de flujos operacionales (backups, CI/CD).',
      'Landing Pages de alto rendimiento y conversión.',
    ],
    tech: ['Flutter', 'Python', 'FastAPI', 'Django', 'LangGraph', 'Supabase', 'SQL Server', 'Figma'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">// experiencia laboral</div>
          <h2 className="section-title">Experiencia Laboral</h2>
          <p className="section-desc" style={{ marginBottom: '3rem' }}>
            Registro de trayectoria y desarrollo en entornos de producción.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="warm-card"
              style={{ padding: '2rem' }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--amber)', background: 'var(--amber-soft)', border: '1px solid var(--border-subtle)', padding: '0.15rem 0.5rem', borderRadius: '999px' }}>
                      {exp.type}
                    </span>
                  </div>
                  <div style={{ fontSize: '1rem', color: 'var(--amber)', fontWeight: 600, marginTop: '2px' }}>{exp.company}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', fontSize: '0.82rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={13} color="var(--amber)" />
                    {exp.period}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)' }}>
                    <MapPin size={13} />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--amber)', flexShrink: 0, marginTop: '2px' }}>→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-muted)' }}>
                {exp.tech.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
