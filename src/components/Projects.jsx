import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Cpu, Database, Shield, FileText, CheckCircle2, Layers, X, ArrowDown, Network } from 'lucide-react';

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
    architecture: {
      pattern: 'Arquitectura Modular por Capas & Colas en Memoria',
      summary: 'Centralización de operaciones marítimas con alta concurrencia en puerto y sincronización asíncrona de inventario.',
      layers: [
        {
          name: '1. Frontend & Dashboards Operativos',
          tech: 'React SPA + Vite + TailwindCSS',
          role: 'Tableros de control en tiempo real para bitácoras marítimas, estado de buques y órdenes de compra.',
        },
        {
          name: '2. API Gateway & Capa Modular',
          tech: 'NestJS Framework + Guards JWT / RBAC',
          role: 'Enrutamiento modularizado, validación estricta de esquemas DTO y control granular de roles navieros.',
        },
        {
          name: '3. Procesamiento Asíncrono & Cache',
          tech: 'Redis + Worker Queues',
          role: 'Manejo de picos de carga en inventario de piezas navales y conciliación automática de facturas.',
        },
        {
          name: '4. Persistencia & Contenedores',
          tech: 'PostgreSQL + Docker Engine',
          role: 'Integridad transaccional ACID en movimientos logísticos y despliegue aislado y reproducible.',
        },
      ],
      keyDecisions: [
        'Aislamiento de módulos en NestJS para permitir escalar el subsistema de facturación sin afectar la bitácora de navegación.',
        'Sincronización con Redis para evitar bloqueos pesados en bases de datos relacionales durante auditorías de stock.',
        'Diseño de base de datos con índices compuestos optimizados para consultas temporales de tracking de buques.',
      ],
    },
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
    architecture: {
      pattern: 'Grafo Dirigido de Agentes Autónomos (State Machine)',
      summary: 'Orquestación reactiva multi-paso capaz de razonar, consultar herramientas en tiempo real y preservar memoria conversacional.',
      layers: [
        {
          name: '1. Canal Perimetral & Webhooks',
          tech: 'Meta WhatsApp Cloud API + Webhook Receiver',
          role: 'Ingesta inmediata de mensajes con verificación de firmas de seguridad y control de duplicados.',
        },
        {
          name: '2. Orquestador Cognitivo (Grafo)',
          tech: 'LangGraph + Python (FastAPI)',
          role: 'Máquina de estados finitos que clasifica la intención (consulta, cotización, soporte o queja) y ejecuta la ruta óptima.',
        },
        {
          name: '3. Tooling & RAG Semántico',
          tech: 'pgvector + Supabase Database',
          role: 'Búsqueda por similitud semántica en catálogo de productos, validación de stock y cálculo dinámico de precios.',
        },
        {
          name: '4. Pipeline Transaccional & Fallback',
          tech: 'PostgreSQL + Notificaciones en Tiempo Real',
          role: 'Creación de pre-órdenes, enlace de pago y derivación automática a operadores humanos si el agente detecta frustración.',
        },
      ],
      keyDecisions: [
        'Implementación con LangGraph para evitar bucles infinitos y garantizar determinismo en estados críticos de checkout.',
        'Caché de embeddings de preguntas frecuentes que redujo en 60% la latencia de respuesta al usuario.',
        'Mapeo estricto de Pydantic para validar entradas de herramientas y mitigar inyecciones de prompt.',
      ],
    },
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
    architecture: {
      pattern: 'Middleware Perimetral con Idempotencia & Circuit Breaker',
      summary: 'Capa intermedia de alta seguridad que actúa como puente blindado entre sistemas centrales y pasarelas bancarias externas.',
      layers: [
        {
          name: '1. Endpoint Blindado & Firma HMAC',
          tech: 'NestJS Edge Controller + Request Signatures',
          role: 'Validación criptográfica de integridad y origen de cada solicitud financiera entrante.',
        },
        {
          name: '2. Capa de Idempotencia & Locks',
          tech: 'Redis Distributed Locks (Redlock)',
          role: 'Garantía matemática de ejecución única por Idempotency-Key, impidiendo dobles cargos ante problemas de conectividad.',
        },
        {
          name: '3. Resiliencia & Circuit Breaker',
          tech: 'Políticas de Reintento Exponencial + Fallback',
          role: 'Monitoreo de estado de pasarelas bancarias; apertura de circuito ante fallos para proteger el sistema.',
        },
        {
          name: '4. Bóveda Segura & Auditoría Inmutable',
          tech: 'Cifrado AES-256-GCM + Logs Particionados',
          role: 'Tokenización de datos sensibles y almacenamiento de trazas de auditoría transaccional con sellado de tiempo.',
        },
      ],
      keyDecisions: [
        'Zero-trust en payloads de pago: validación de esquemas y sanitización estricta antes de encolar transacciones.',
        'Cifrado en reposo para metadatos transaccionales y rotación periódica de claves de encriptación.',
        'Validación de resiliencia mediante pruebas de carga intensivas simulando fallos intermitentes de red.',
      ],
    },
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
    architecture: {
      pattern: 'Row Level Security (RLS) Driven Architecture',
      summary: 'Sistema empresarial donde la seguridad y las políticas de acceso se ejecutan directamente en el motor de datos.',
      layers: [
        {
          name: '1. Frontend Reactivo & Previewer',
          tech: 'React 19 + TailwindCSS + Drag & Drop UI',
          role: 'Navegador de archivos de alto rendimiento con previsualización segura de documentos sin descarga directa.',
        },
        {
          name: '2. Capa de Autenticación & RBAC',
          tech: 'Supabase Auth + JWT Custom Claims',
          role: 'Autenticación multifactor y asignación de alcances por departamento organizacional.',
        },
        {
          name: '3. Motor de Políticas en Base de Datos',
          tech: 'PostgreSQL Row-Level Security (RLS)',
          role: 'Políticas declarativas SQL que imposibilitan cualquier acceso no autorizado, incluso ante fallos de la aplicación.',
        },
        {
          name: '4. Almacenamiento & Auditoría Forense',
          tech: 'S3 Storage (Signed URLs) + Triggers SQL',
          role: 'Descargas temporales firmadas con expiración a los 60s y registro inmutable de cada lectura o modificación.',
        },
      ],
      keyDecisions: [
        'Despliegue de seguridad en el núcleo de la base de datos (RLS) en vez de depender exclusivamente del código frontend.',
        'URLs temporales firmadas para evitar URLs públicas de almacenamiento expuestas a fugas.',
        'Triggers automáticos en PostgreSQL para auditoría ciega que los usuarios ni administradores pueden alterar.',
      ],
    },
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
  const [selectedArchitecture, setSelectedArchitecture] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedArchitecture(null);
      }
    };
    if (selectedArchitecture) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArchitecture]);

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
              Por acuerdos de confidencialidad (NDA), el código fuente es privado. Explora el desglose técnico y las arquitecturas diseñadas:
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

                  {/* Footer Action & Tech Stack */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--border-muted)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.6rem',
                      }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
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

                      {proj.architecture && (
                        <button
                          onClick={() => setSelectedArchitecture(proj)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--amber)',
                            background: 'rgba(245, 158, 11, 0.08)',
                            border: '1px solid var(--border-subtle)',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '6px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--amber)';
                            e.currentTarget.style.color = '#0c0a09';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(245, 158, 11, 0.08)';
                            e.currentTarget.style.color = 'var(--amber)';
                          }}
                        >
                          <Layers size={13} />
                          <span>Ver Arquitectura</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <AnimatePresence>
        {selectedArchitecture && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArchitecture(null)}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(12, 10, 9, 0.85)',
                backdropFilter: 'blur(10px)',
              }}
            />

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '780px',
                maxHeight: '90vh',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '2rem',
                overflowY: 'auto',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(245, 158, 11, 0.1)',
                zIndex: 101,
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-muted)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--amber)',
                        background: 'var(--amber-soft)',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        fontWeight: 600,
                      }}
                    >
                      {selectedArchitecture.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      // ANÁLISIS DE ARQUITECTURA
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    {selectedArchitecture.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--amber)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    Patrón: {selectedArchitecture.architecture.pattern}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArchitecture(null)}
                  style={{
                    color: 'var(--text-muted)',
                    padding: '6px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--amber)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-muted)';
                  }}
                  title="Cerrar modal (Esc)"
                  aria-label="Cerrar modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Summary */}
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                {selectedArchitecture.architecture.summary}
              </p>

              {/* Layers Breakdown */}
              <div style={{ marginBottom: '2rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--amber)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Network size={14} />
                  <span>Flujo de Datos & Capas de Sistema</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {selectedArchitecture.architecture.layers.map((layer, lIdx) => (
                    <div key={layer.name}>
                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-muted)',
                          borderRadius: '10px',
                          padding: '0.9rem 1.1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.35rem',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                            {layer.name}
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.72rem',
                              color: 'var(--amber)',
                              background: 'var(--amber-soft)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '4px',
                            }}
                          >
                            {layer.tech}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                          {layer.role}
                        </p>
                      </div>

                      {lIdx < selectedArchitecture.architecture.layers.length - 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.2rem 0' }}>
                          <ArrowDown size={14} color="var(--amber)" style={{ opacity: 0.6 }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Decisions */}
              <div
                style={{
                  background: 'rgba(245, 158, 11, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginBottom: '1.75rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--amber)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  Decisiones Arquitectónicas Clave:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedArchitecture.architecture.keyDecisions.map((dec, dIdx) => (
                    <li key={dIdx} style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--amber)', flexShrink: 0 }}>✔</span>
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Close Button Footer */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedArchitecture(null)}
                  className="btn-amber"
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
                >
                  Entendido / Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
