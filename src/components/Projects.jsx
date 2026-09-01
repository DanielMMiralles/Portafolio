import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Cpu, Database, Shield, FileText, CheckCircle2 } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'ERP Naviero & Gestión de Flota',
    category: 'Enterprise / Logistics',
    filterTag: 'backend',
    icon: Database,
    metric: '-40%',
    metricLabel: 'Tiempo logístico',
    challenge:
      'Control descentralizado e ineficiente de operaciones de flota naval, logística de carga, stock de repuestos y facturación empresarial.',
    solution:
      'Diseño y desarrollo de arquitectura modular NestJS con PostgreSQL y frontend React de alta velocidad, centralizando el estado operativo de buques, control de insumos en tiempo real y facturación automatizada.',
    impact: 'Reducción del 40% en tiempos de procesamiento contable-logístico y cero discrepancias en inventario naval.',
    stack: ['NestJS', 'PostgreSQL', 'React', 'TailwindCSS', 'Docker', 'Redis'],
  },
  {
    id: '02',
    title: 'Agente IA Autónomo & CRM WhatsApp',
    category: 'IA & Automatización',
    filterTag: 'ai',
    icon: Cpu,
    metric: '85%',
    metricLabel: 'Consultas 24/7',
    challenge:
      'Alta demanda de atención comercial por WhatsApp 24/7 sin personal suficiente para calificar prospectos, cotizar y coordinar logística de despachos.',
    solution:
      'Desarrollo de un sistema de agentes autónomos con LangGraph y FastAPI integrados con la API de WhatsApp y Supabase, permitiendo a los agentes consultar stock en vivo y agendar pedidos automáticamente.',
    impact: 'Automatización del 85% de las consultas entrantes y atención comercial ininterrumpida las 24 horas.',
    stack: ['Flutter', 'Python', 'LangGraph', 'FastAPI', 'Supabase', 'React'],
  },
  {
    id: '03',
    title: 'Middleware de Pasarela de Pagos Segura',
    category: 'Backend & Security',
    filterTag: 'backend',
    icon: Shield,
    metric: '99.99%',
    metricLabel: 'Disponibilidad',
    challenge:
      'Interconectar sistemas empresariales legacy con procesadores de pago encriptados manteniendo baja latencia, seguridad estricta y tolerancia a fallos.',
    solution:
      'Construcción de una capa middleware en Node.js y NestJS containerizada en Docker, aplicando arquitectura orientada a eventos, cifrado AES-256 en tránsito y sistema de reintentos idempotentes.',
    impact: 'Procesamiento de transacciones sub-segundo con 99.99% de disponibilidad operativa durante picos de tráfico.',
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'Docker', 'TypeScript', 'Redis'],
  },
  {
    id: '04',
    title: 'Sistema de Gestión Documental Corporativo',
    category: 'Full Stack Enterprise',
    filterTag: 'fullstack',
    icon: FileText,
    metric: '100%',
    metricLabel: 'Auditoría inmutable',
    challenge:
      'Gestión caótica de permisos, falta de trazabilidad y riesgos de filtración en la documentación legal e interna de la empresa.',
    solution:
      'Plataforma web construida con React y Supabase (PostgreSQL RLS) con control de acceso basado en roles (RBAC), auditoría inmutable de lecturas y versionado completo de archivos.',
    impact: 'Resguardo e inmutabilidad del 100% de la documentación crítica corporativa con auditoría en tiempo real.',
    stack: ['React', 'TailwindCSS', 'Supabase', 'PostgreSQL', 'TypeScript'],
  },
];

const FILTERS = [
  { id: 'all', label: 'Todos los Casos' },
  { id: 'backend', label: 'Backend & Sistemas' },
  { id: 'ai', label: 'IA & Automatización' },
  { id: 'fullstack', label: 'Full Stack' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.filterTag === activeFilter ||
            (activeFilter === 'backend' && p.filterTag === 'fullstack')
        );

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <div className="section-label">
              <Lock size={14} />
              <span>// casos de estudio (nda)</span>
            </div>
            <h2 className="section-title">Casos de Estudio</h2>
            <p className="section-desc" style={{ margin: 0 }}>
              Por acuerdos de confidencialidad (NDA), el código fuente es privado. A continuación detallo la resolución técnica:
            </p>
          </div>

          {/* Filter Pills with Animated Background */}
          <div
            style={{
              display: 'flex',
              gap: '4px',
              background: 'rgba(28, 25, 23, 0.8)',
              padding: '4px',
              borderRadius: '10px',
              border: '1px solid var(--border-muted)',
              flexWrap: 'wrap',
              position: 'relative',
            }}
          >
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '7px',
                    color: isActive ? '#0c0a09' : 'var(--text-secondary)',
                    fontWeight: isActive ? 600 : 400,
                    zIndex: 2,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'var(--amber)',
                        borderRadius: '7px',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {f.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 2-Column Balanced Grid with AnimatePresence */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const Icon = proj.icon;

              return (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="warm-card"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '16px',
                    border: '1px solid var(--border-muted)',
                    background: 'var(--bg-card)',
                  }}
                >
                  <div>
                    {/* Top Bar: Icon + Category + Metric Badge */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1.25rem',
                        paddingBottom: '0.85rem',
                        borderBottom: '1px solid var(--border-muted)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: 'var(--amber-soft)',
                            border: '1px solid var(--border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--amber)',
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={16} />
                        </div>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {proj.category}
                        </span>
                      </div>

                      {/* Clean Compact Metric Badge */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '5px',
                          background: 'rgba(245, 158, 11, 0.08)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: 'var(--amber)',
                          }}
                        >
                          {proj.metric}
                        </span>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {proj.metricLabel}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3,
                        marginBottom: '0.75rem',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {proj.title}
                    </h3>

                    {/* Solution Details */}
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '1rem',
                      }}
                    >
                      {proj.solution}
                    </p>

                    {/* Impact Callout */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.82rem',
                        color: '#fbbf24',
                        background: 'rgba(245, 158, 11, 0.04)',
                        border: '1px solid rgba(245, 158, 11, 0.12)',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        lineHeight: 1.45,
                        marginBottom: '1.25rem',
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{proj.impact}</span>
                    </div>
                  </div>

                  {/* Footer: Tech Stack Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--border-muted)',
                    }}
                  >
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="pill"
                        style={{ fontSize: '0.72rem', padding: '0.2rem 0.55rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
