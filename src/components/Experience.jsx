import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Software Developer / Full Stack Engineer',
    company: 'Adakademy, C.A.',
    period: '2025 — ACTUALIDAD',
    location: 'Lechería, Anzoátegui (Híbrido / Remoto)',
    type: 'Jornada Completa',
    bullets: [
      'ERP Marítimo & Backend (Narval-SGN): Desarrollo del núcleo operativo con Python, Django REST Framework y PostgreSQL, centralizando gestión de buques, ingesta de manifiestos de carga y facturación portuaria.',
      'Seguridad Transaccional & Pagos: Implementación de una capa de idempotencia con bloqueos distribuidos en Redis (Redlock) para procesar webhooks financieros y eliminar cobros duplicados ante reintentos de red.',
      'Agente IA Comercial (Proyecto IMA): Diseño de flujos conversacionales con estado (LangGraph, FastAPI y pgvector) conectados a WhatsApp para atención y cotizaciones automáticas 24/7.',
      'Dashboards Interactivos & Frontend: Construcción de interfaces ricas en datos con React y TailwindCSS con autenticación segura por tokens y componentes reutilizables.',
      'DevOps & Estándares: Estandarización de entornos contenerizados con Docker Compose y controles de calidad automatizados en repositorios.',
    ],
    tech: ['Python', 'Django REST Framework', 'PostgreSQL', 'React', 'TypeScript', 'Redis', 'LangGraph', 'Docker'],
  },
  {
    role: 'Software Engineer & Architect',
    company: 'Consultoría de Software Independiente',
    period: '2023 — ACTUALIDAD',
    location: 'Modalidad 100% Remota',
    type: 'Freelance / Consultoría',
    bullets: [
      'DevBrain MCP Server (v3.7): Creación de un Sistema Operativo Cognitivo open-source bajo Model Context Protocol (29 tools, memoria Hebbiana FTS5, marco D-ODD y compresión AST con -85% consumo de tokens).',
      'Ecosistema Logístico AliaLog + Asistente "Alia": Arquitectura integral con NestJS (Clean Architecture), app móvil Flutter offline-first para choferes y chatbot de WhatsApp para pedidos de clientes y reportes gerenciales en vivo.',
      'Plataforma Lidera SaaS Enterprise: Desarrollo Full Stack con React 19, TypeScript, TanStack Query/Table, aislamiento multi-empresa mediante PostgreSQL Row-Level Security (RLS) y testing E2E con Playwright.',
      'Automatización de procesos operativos, respaldos programados y despliegues continuos (CI/CD con GitHub Actions).',
    ],
    tech: ['NestJS', 'Flutter', 'React 19', 'TypeScript', 'FastAPI', 'Supabase / PostgreSQL RLS', 'MCP', 'Playwright'],
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
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="section-desc" style={{ marginBottom: '3rem' }}>
            Trayectoria liderando la arquitectura y entrega de sistemas en entornos de producción reales.
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
