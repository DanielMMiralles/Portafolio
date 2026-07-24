import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { SectionHeader } from './ScrollReveal';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Adakademy, C.A.',
    location: 'Lechería, Anzoátegui',
    period: '2025 — ACTUALIDAD',
    type: 'Jornada Completa',
    highlights: [
      'Desarrollo de agentes autónomos inteligentes capaces de realizar captación automatizada de clientes, registro y procesamiento de pagos.',
      'Desarrollo e implementación de software de gestión documental centralizado para empresa local.',
      'Mantenimiento y refactorización de arquitectura para garantizar la escalabilidad, alta disponibilidad y seguridad de los proyectos.',
      'Implementación de middleware especializado para la creación de una pasarela de pagos segura.',
      'Desarrollo de sistema ERP integral para una empresa del sector naviero local.',
    ],
    tech: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'n8n', 'TailwindCSS'],
  },
  {
    role: 'Software Developer',
    company: 'Freelance',
    location: 'Modalidad Remota',
    period: '2023 — ACTUALIDAD',
    type: 'Freelance / Consultoría',
    highlights: [
      'Desarrollo de aplicación móvil con integración de agente autónomo de atención al cliente vía WhatsApp para empresa Distribuidora.',
      'Gestión de logística, manejo y programación de operaciones empresariales con captación automática de clientes.',
      'Desarrollo de middleware para la integración de pasarelas de pago seguras en sistemas de empresas locales.',
      'Automatización de flujos operacionales e infraestructura (backups de datos, pipelines CI/CD y tareas repetitivas).',
      'Desarrollo de Landing Pages de alto rendimiento y conversión para diversas empresas.',
    ],
    tech: ['Python', 'FastAPI', 'Django', 'LangGraph', 'Supabase', 'SQL Server', 'Figma'],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        padding: '7rem 1.5rem',
        background: 'var(--ember-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute', top: '25%', left: '-8%',
        width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(193,18,31,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          eyebrow="✦ Trayectoria Profesional ✦"
          title="Experiencia Laboral"
          subtitle="3+ años construyendo aplicaciones empresariales, agentes autónomos y pasarelas de pago."
        />

        {/* Experience List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '3.5rem' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                background: 'var(--ember-card)',
                border: '1px solid var(--border-ember)',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              whileHover={{
                borderColor: 'rgba(247,127,0,0.4)',
                boxShadow: '0 12px 40px rgba(193,18,31,0.15)',
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1.25rem',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--ember-ash)',
                    }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      background: 'rgba(193,18,31,0.12)',
                      border: '1px solid rgba(193,18,31,0.3)',
                      color: 'var(--ember-orange)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '999px',
                    }}>
                      {exp.type}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    color: 'var(--ember-amber)',
                    marginTop: '4px',
                    fontWeight: 600,
                  }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--ember-orange)',
                  }}>
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--ember-muted)',
                  }}>
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.75rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}>
                {exp.highlights.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2
                      size={18}
                      color="var(--ember-orange)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: 'var(--ember-ash-dim)',
                      lineHeight: 1.65,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--ember-muted)',
                  display: 'flex', alignItems: 'center', gap: '4px', marginRight: '4px',
                }}>
                  <Terminal size={12} /> Tech Stack:
                </span>
                {exp.tech.map(t => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
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
