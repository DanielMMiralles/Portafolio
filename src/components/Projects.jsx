import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Cpu,
  Database,
  Shield,
  FileText,
  CheckCircle2,
  Layers,
  X,
  ArrowDown,
  Network,
  Truck,
  Terminal,
  ExternalLink,
  Maximize2,
} from 'lucide-react';

import archDevbrain from '../assets/arch/arch_devbrain.svg';
import archAlialog from '../assets/arch/arch_alialog.svg';
import archNarval from '../assets/arch/arch_narval.svg';
import archIma from '../assets/arch/arch_ima.svg';
import archPayments from '../assets/arch/arch_payments.svg';
import archLidera from '../assets/arch/arch_lidera.svg';

const PROJECTS = [
  {
    id: '01',
    title: 'DevBrain MCP Server (v3.7) — Sistema Operativo Cognitivo',
    category: 'IA & Arquitectura Cognitiva (MCP)',
    filterTag: 'ai',
    icon: Terminal,
    metric: '-85%',
    metricLabel: 'Consumo Tokens',
    repoUrl: 'https://github.com/DanielMMiralles/devbrain-mcp',
    diagramImg: archDevbrain,
    challenge:
      'Los agentes de IA sufren de amnesia de contexto entre sesiones, sesgo de confirmación y alto consumo de tokens al analizar bases de código extensas.',
    solution:
      'Servidor unificado Model Context Protocol (MCP) en Python con 29 herramientas nativas que conecta agentes con +6,350 notas técnicas mediante búsqueda FTS5 y memoria Hebbiana (<20ms), protocolo de decisiones D-ODD (Tesis vs. Antítesis) en SQLite WAL y compresión AST.',
    impact:
      'Reducción del 85% en el consumo de tokens de contexto, latencia de recuperación menor a 20ms y trazabilidad inmutable de decisiones de ingeniería.',
    stack: ['Python 3.12', 'MCP (JSON-RPC)', 'SQLite WAL / FTS5', 'AST Code Slicing', 'Obsidian Vault', 'Pytest'],
    architecture: {
      pattern: 'Servidor MCP Unificado, Memoria Hebbiana & Marco D-ODD (Cynefin Gate)',
      summary:
        'Actúa como Controlador Lógico Programable (PLC) entre clientes IA (Antigravity, Claude Desktop, Cursor) y el conocimiento estructurado del ingeniero.',
      layers: [
        {
          name: '1. Protocolo MCP & Despachador PLC (29 Tools)',
          tech: 'JSON-RPC 2.0 sobre Stdio + Python 3.12',
          role: 'Interfaz estándar sin estado que expone herramientas de memoria, auditoría, empaquetado de código y enrutamiento de modelos (LOCAL_FAST / ORCHESTRATE).',
        },
        {
          name: '2. Memoria Neuroplástica & Búsqueda FTS5',
          tech: 'SQLite FTS5 + Reranker Sináptico de Hebb',
          role: 'Indexa más de 6,350 documentos técnicos y pondera resultados por co-activación histórica en menos de 20 milisegundos.',
        },
        {
          name: '3. Marco D-ODD & Decision Ledger Inmutable',
          tech: 'Gate Semántico Cynefin + SQLite WAL',
          role: 'Aísla contextos entre Tesis (conocimiento previo) y Antítesis (primeros principios) evaluando 5 dimensiones de riesgo antes de aprobar cambios.',
        },
        {
          name: '4. AST Slicer & Grafo Sintáctico de Código',
          tech: 'Python AST Parser + Graphify DB',
          role: 'Extrae firmas, contratos e interfaces reduciendo el tamaño del contexto en un 85% y mapeando el radio de impacto entre módulos.',
        },
      ],
      keyDecisions: [
        'Comunicación pura por stdio JSON-RPC sin dependencias web pesadas para garantizar arranque instantáneo en cualquier IDE.',
        'Uso de SQLite en modo WAL para soportar lecturas y escrituras concurrentes de múltiples agentes sin bloqueos.',
        'Poda sintáctica mediante árboles AST para enviar a los modelos solo las firmas relevantes en vez de archivos crudos completos.',
      ],
    },
  },
  {
    id: '02',
    title: 'AliaLog + Asistente "Alia" — Plataforma Logística 360°',
    category: 'Enterprise Logistics & Mobile',
    filterTag: 'fullstack',
    icon: Truck,
    metric: '360°',
    metricLabel: 'Sync Tiempo Real',
    diagramImg: archAlialog,
    challenge:
      'Falta de visibilidad en entregas en ruta, pérdida de datos en zonas sin señal móvil, registro manual de pedidos por chat y descuadres entre almacén y camiones.',
    solution:
      'Ecosistema integral compuesto por un backend modular en NestJS (Clean Architecture), app móvil Flutter con soporte offline-first para choferes, panel web React para almacén y el asistente conversacional "Alia" en WhatsApp para clientes y gerencia.',
    impact:
      'Eliminación de discrepancias de inventario entre almacén y vehículos, ingesta automática de pedidos por WhatsApp y operación continua sin internet en ruta.',
    stack: ['NestJS', 'Flutter (Dart)', 'PostgreSQL / Supabase', 'React', 'WhatsApp Cloud API', 'Docker'],
    architecture: {
      pattern: 'Clean / Hexagonal Architecture + Sincronización Móvil Offline-First',
      summary:
        'Conecta a los 4 actores de la operación (Clientes, Dueño, Almacén y Choferes) bajo un único núcleo transaccional en PostgreSQL.',
      layers: [
        {
          name: '1. Flujo de Clientes (Vía Asistente "Alia" en WhatsApp)',
          tech: 'Meta WhatsApp API + NLP Parser + OrderService',
          role: 'El cliente solicita productos por WhatsApp -> Alia extrae ítems y cantidades -> valida stock en vivo -> registra la orden atómicamente en PostgreSQL y la encola para despacho.',
        },
        {
          name: '2. Flujo de Gerencia (Vía Asistente "Alia" en WhatsApp)',
          tech: 'WhatsApp API + DispatchService + KPI Reporter',
          role: 'El dueño consulta el avance operativo por chat -> Alia consulta el estado en vivo y entrega métricas de pedidos completados, camiones en calle y alertas de stock.',
        },
        {
          name: '3. Flujo de Almacén (Vía Dashboard Web)',
          tech: 'React SPA + TypeScript + TailwindCSS',
          role: 'Los operadores consolidan los pedidos del día, asignan lotes de carga a los vehículos disponibles y liberan las hojas de ruta.',
        },
        {
          name: '4. Flujo de Choferes en Calle (Vía App Móvil Flutter)',
          tech: 'Flutter / Dart + Almacenamiento Local + SyncService',
          role: 'El chofer descarga la ruta localmente. Con o sin cobertura móvil registra cada entrega, y al recuperar señal la app sincroniza los cambios con la base de datos central.',
        },
      ],
      keyDecisions: [
        'Separación estricta de capas en NestJS (Dominio, Casos de Uso e Infraestructura) para mantener la lógica de despacho desacoplada.',
        'Transacciones ACID en PostgreSQL al transferir mercancía del almacén al inventario móvil del camión.',
        'Cola de sincronización idempotente en Flutter para evitar duplicación de confirmaciones de entrega al reconectar.',
      ],
    },
  },
  {
    id: '03',
    title: 'Narval-SGN — ERP Naviero & Facturación Portuaria',
    category: 'Enterprise ERP / Maritime',
    filterTag: 'backend',
    icon: Database,
    metric: '-40%',
    metricLabel: 'Tiempo Operativo',
    diagramImg: archNarval,
    challenge:
      'Control disperso de operaciones marítimas, procesamiento manual de manifiestos de carga, seguimiento de especificaciones de buques y retrasos en la liquidación de servicios portuarios.',
    solution:
      'Desarrollo del núcleo backend empresarial con Python, Django 6.0, Django REST Framework y PostgreSQL, integrado a tableros administrativos en React y contenerizado con Docker para centralizar flota, manifiestos y facturación.',
    impact:
      'Reducción del 40% en tiempos de liquidación contable-portuaria y trazabilidad documental completa por embarcación y maniobra.',
    stack: ['Python', 'Django 6.0', 'Django REST Framework', 'PostgreSQL', 'React', 'Docker'],
    architecture: {
      pattern: 'Arquitectura Empresarial Modular con Django REST Framework & PostgreSQL ACID',
      summary:
        'Centralización de operaciones marítimas y portuarias con validación estricta de contratos OpenAPI e integridad relacional.',
      layers: [
        {
          name: '1. Panel Operativo & Administrativo Web',
          tech: 'React SPA + Vite + TailwindCSS',
          role: 'Tableros de control para bitácoras de buques, carga de manifiestos, estados de cuenta y permisos por rol operativo.',
        },
        {
          name: '2. Capa de API & Control de Acceso (RBAC)',
          tech: 'Django 6.0 + Django REST Framework',
          role: 'Serialización de alto rendimiento, validación de reglas de negocio marítimas y autenticación segura basada en tokens.',
        },
        {
          name: '3. Módulos de Flota, Manifiestos & Liquidación',
          tech: 'Python Domain Services + OpenAPI Specs',
          role: 'Procesamiento estructurado de conocimientos de embarque (BL), cálculo automatizado de tarifas portuarias y control documental.',
        },
        {
          name: '4. Persistencia Relacional & Contenedores',
          tech: 'PostgreSQL + Docker Compose',
          role: 'Modelado relacional normalizado con bloqueos transaccionales e índices compuestos para reportes históricos y auditoría.',
        },
      ],
      keyDecisions: [
        'Elección de Django 6.0 y DRF por su robustez en modelado relacional complejo, migraciones seguras y seguridad empresarial nativa.',
        'Diseño de esquemas PostgreSQL con restricciones de integridad estrictas para impedir inconsistencias en cobros de muelle.',
        'Estandarización de entornos locales y de producción mediante contenedores Docker.',
      ],
    },
  },
  {
    id: '04',
    title: 'IMA (Adakademy) — Agente IA Comercial & Cotizador 24/7',
    category: 'IA & Automatización Comercial',
    filterTag: 'ai',
    icon: Cpu,
    metric: '+80%',
    metricLabel: 'Consultas 24/7',
    diagramImg: archIma,
    challenge:
      'Saturación del equipo comercial ante cientos de mensajes diarios por WhatsApp solicitando información de catálogo, precios y presupuestos fuera de horario laboral.',
    solution:
      'Arquitectura de agente conversacional con estado desarrollada en Adakademy usando Python, FastAPI y LangGraph (StateGraph), conectada a búsqueda vectorial con pgvector en Supabase y la API oficial de WhatsApp.',
    impact:
      'Automatización de más del 80% de las consultas y cotizaciones entrantes, reduciendo el tiempo de respuesta de horas a menos de 3 segundos sin alucinaciones de precios.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'pgvector (RAG)', 'Supabase', 'WhatsApp API'],
    architecture: {
      pattern: 'Máquina de Estados Cíclica (LangGraph StateGraph) + RAG Semántico',
      summary:
        'Orquestación cognitiva multi-turno que combina comprensión en lenguaje natural con herramientas de cálculo determinista en Python.',
      layers: [
        {
          name: '1. Receptor Asíncrono de Webhooks',
          tech: 'FastAPI + Pydantic v2 + HMAC Verification',
          role: 'Ingesta de eventos de Meta WhatsApp Cloud API con validación criptográfica de firmas y control de mensajes duplicados.',
        },
        {
          name: '2. Orquestador de Estado (StateGraph)',
          tech: 'LangGraph + Session Checkpointing',
          role: 'Grafo cíclico que mantiene la memoria de la conversación, clasifica la intención del cliente y decide qué herramienta invocar.',
        },
        {
          name: '3. Búsqueda Semántica de Catálogo (RAG)',
          tech: 'PostgreSQL pgvector + Embeddings',
          role: 'Localiza productos y servicios por similitud semántica incluso cuando el usuario escribe con errores ortográficos o sinónimos.',
        },
        {
          name: '4. Cotizador Determinista & Handoff Humano',
          tech: 'Python Pricing Tool + Derivación Inteligente',
          role: 'Ejecuta toda la matemática de precios e impuestos en código backend seguro y transfiere al asesor humano si detecta casos complejos.',
        },
      ],
      keyDecisions: [
        'Separación total entre el razonamiento lingüístico del LLM y el cálculo matemático de precios para garantizar 0% de alucinaciones financieras.',
        'Uso de grafos cíclicos en LangGraph para permitir que el usuario modifique cantidades o ítems sin perder el hilo de la cotización.',
        'Validación estricta de argumentos de tool-calling mediante esquemas Pydantic antes de consultar la base de datos.',
      ],
    },
  },
  {
    id: '05',
    title: 'Middleware de Pasarela de Pagos & Idempotencia',
    category: 'Backend, Concurrency & FinTech',
    filterTag: 'backend',
    icon: Shield,
    metric: '99.99%',
    metricLabel: 'Disponibilidad',
    diagramImg: archPayments,
    challenge:
      'Evitar cobros duplicados y condiciones de carrera al procesar webhooks financieros bajo picos de tráfico y reintentos automáticos de red entre sistemas empresariales y bancos.',
    solution:
      'Construcción de un middleware transaccional en NestJS y Node.js con bloqueos distribuidos en Redis (patrón Redlock), validación de firmas HMAC, Circuit Breaker y auditoría cifrada con AES-256 en PostgreSQL.',
    impact:
      'Cero cobros duplicados en producción, latencia promedio inferior a 250ms y 99.99% de disponibilidad operativa en ráfagas concurrentes.',
    stack: ['NestJS', 'Node.js', 'Redis (Redlock)', 'PostgreSQL', 'TypeScript', 'Docker'],
    architecture: {
      pattern: 'Middleware Perimetral con Idempotencia Distribuida (Redlock) & Circuit Breaker',
      summary:
        'Puente transaccional blindado que garantiza ejecución matemática única por cada operación financiera entrante.',
      layers: [
        {
          name: '1. Controlador Perimetral & Firma Criptográfica',
          tech: 'NestJS Edge Controller + HMAC-SHA256',
          role: 'Verifica autenticidad, sello de tiempo e integridad del payload antes de admitir la transacción en el pipeline.',
        },
        {
          name: '2. Capa de Idempotencia & Exclusión Mutua',
          tech: 'Redis Distributed Locks (Patrón Redlock)',
          role: 'Adquiere un bloqueo atómico en memoria por cada Idempotency-Key en <5ms, neutralizando peticiones concurrentes idénticas.',
        },
        {
          name: '3. Resiliencia & Circuit Breaker',
          tech: 'Reintentos con Backoff Exponencial',
          role: 'Monitorea la salud de las pasarelas externas y abre el circuito ante caídas bancarias para evitar saturación en cascada.',
        },
        {
          name: '4. Bóveda Transaccional & Auditoría',
          tech: 'PostgreSQL ACID + Cifrado AES-256-GCM',
          role: 'Almacena estados definitivos y trazas forenses inmutables verificadas con suites de carga concurrente en Jest.',
        },
      ],
      keyDecisions: [
        'Implementación de bloqueos distribuidos en Redis antes de tocar PostgreSQL para absorber ráfagas de reintentos sin degradar el motor SQL.',
        'Política Zero-Trust en webhooks externos: sanitización y verificación de firmas obligatoria en cada endpoint.',
        'Pruebas automatizadas de concurrencia simulando decenas de webhooks simultáneos con la misma clave transaccional.',
      ],
    },
  },
  {
    id: '06',
    title: 'Lidera SaaS Enterprise — Plataforma Multi-Tenant & RLS',
    category: 'Full Stack SaaS & Security',
    filterTag: 'fullstack',
    icon: FileText,
    metric: '100%',
    metricLabel: 'Aislamiento RLS',
    diagramImg: archLidera,
    challenge:
      'Proveer una plataforma web rápida e intuitiva donde múltiples empresas gestionen sus operaciones y documentos críticos con garantía absoluta de que ningún cliente pueda acceder a datos de otro.',
    solution:
      'Arquitectura SaaS multi-tenant con React 19, TypeScript, TanStack Query/Table y Zustand en el frontend, respaldada por políticas declarativas Row-Level Security (RLS) en PostgreSQL y pruebas End-to-End automatizadas con Playwright.',
    impact:
      'Aislamiento matemático del 100% entre organizaciones a nivel de motor de base de datos, tablas dinámicas instantáneas y cero regresiones en despliegues.',
    stack: ['React 19', 'TypeScript', 'TanStack Query/Table', 'Zustand', 'PostgreSQL RLS', 'Playwright E2E'],
    architecture: {
      pattern: 'Database-Enforced Multi-Tenancy (PostgreSQL RLS) & Automated E2E QA',
      summary:
        'Plataforma empresarial donde las reglas de aislamiento por organización viven directamente en el motor SQL y se verifican continuamente.',
      layers: [
        {
          name: '1. Interfaz Empresarial de Alta Densidad',
          tech: 'React 19 + TypeScript + TanStack + Zustand',
          role: 'Tablas interactivas con filtrado instantáneo, caché asíncrono con actualizaciones optimistas y previsualización segura de archivos.',
        },
        {
          name: '2. Identidad Multi-Empresa & RBAC',
          tech: 'Supabase Auth / Django + JWT Custom Claims',
          role: 'Inyecta el identificador de organización (tenant_id) y el rol departamental dentro del token criptográfico de sesión.',
        },
        {
          name: '3. Motor de Seguridad por Fila (RLS)',
          tech: 'PostgreSQL Row-Level Security + Signed URLs',
          role: 'Políticas SQL nativas que filtran cada lectura o escritura según el tenant del token, complementadas con enlaces S3 que expiran en 60s.',
        },
        {
          name: '4. Pipeline de Calidad End-to-End',
          tech: 'Playwright Automated Testing + Triggers SQL',
          role: 'Suite E2E que simula usuarios reales verificando flujos de autenticación, aislamiento de permisos y auditoría inmutable.',
        },
      ],
      keyDecisions: [
        'Delegación de la seguridad multi-tenant al motor PostgreSQL (RLS) para impedir fugas de datos incluso ante errores humanos en controladores.',
        'Combinación de TanStack Query para estado de servidor y Zustand para estado de interfaz, logrando navegación sin recargas.',
        'Automatización con Playwright E2E como requisito previo a producción para blindar los flujos críticos de negocio.',
      ],
    },
  },
];

const FILTERS = [
  { id: 'all', label: 'Todos los Proyectos (6)' },
  { id: 'ai', label: 'IA, Agentes & MCP' },
  { id: 'backend', label: 'Backend & ERP' },
  { id: 'fullstack', label: 'Full Stack, SaaS & Mobile' },
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
              <Layers size={14} />
              <span>// proyectos destacados &amp; arquitectura de sistemas</span>
            </div>
            <h2 className="section-title">Proyectos &amp; Casos de Estudio</h2>
            <p className="section-desc" style={{ margin: 0 }}>
              Explora los diagramas de arquitectura, el flujo de información entre capas y las decisiones de ingeniería de mis desarrollos principales:
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
                        marginBottom: '1.15rem',
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
                        fontSize: '1.18rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3,
                        marginBottom: '0.75rem',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {proj.title}
                    </h3>

                    {/* Interactive Architecture Diagram Preview Card */}
                    {proj.diagramImg && (
                      <div
                        onClick={() => setSelectedArchitecture(proj)}
                        title="Haz clic para ampliar el diagrama de arquitectura y flujo de datos"
                        style={{
                          position: 'relative',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          border: '1px solid var(--border-subtle)',
                          background: '#0c0a09',
                          marginBottom: '1rem',
                          cursor: 'pointer',
                        }}
                      >
                        <img
                          src={proj.diagramImg}
                          alt={`Arquitectura ${proj.title}`}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '8px',
                            right: '8px',
                            background: 'rgba(12, 10, 9, 0.85)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '6px',
                            padding: '0.2rem 0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '0.68rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--amber)',
                          }}
                        >
                          <Maximize2 size={11} />
                          <span>Ampliar Flujo</span>
                        </div>
                      </div>
                    )}

                    {/* Solution Details */}
                    <p
                      style={{
                        fontSize: '0.88rem',
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
                        fontSize: '0.81rem',
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
                            style={{ fontSize: '0.7rem', padding: '0.2rem 0.52rem' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {proj.repoUrl && (
                          <a
                            href={proj.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              fontSize: '0.75rem',
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--text-primary)',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid var(--border-muted)',
                              padding: '0.35rem 0.65rem',
                              borderRadius: '6px',
                            }}
                          >
                            <ExternalLink size={12} />
                            <span>GitHub</span>
                          </a>
                        )}

                        {proj.architecture && (
                          <button
                            onClick={() => setSelectedArchitecture(proj)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.76rem',
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
                background: 'rgba(12, 10, 9, 0.88)',
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
                maxWidth: '860px',
                maxHeight: '92vh',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '2rem',
                overflowY: 'auto',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(245, 158, 11, 0.12)',
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
                  marginBottom: '1.25rem',
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
                      // DIAGRAMA DE ARQUITECTURA &amp; FLUJO DE DATOS
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    {selectedArchitecture.title}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--amber)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
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
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {selectedArchitecture.architecture.summary}
              </p>

              {/* Full Resolution Architecture Diagram */}
              {selectedArchitecture.diagramImg && (
                <div
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)',
                    background: '#0c0a09',
                    marginBottom: '1.75rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <img
                    src={selectedArchitecture.diagramImg}
                    alt={`Diagrama de arquitectura de ${selectedArchitecture.title}`}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              )}

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
                  <span>Desglose de Flujos de Información &amp; Capas</span>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                {selectedArchitecture.repoUrl ? (
                  <a
                    href={selectedArchitecture.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.84rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--amber)',
                    }}
                  >
                    <ExternalLink size={14} />
                    <span>Ver Repositorio Público en GitHub</span>
                  </a>
                ) : (
                  <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Lock size={12} /> Código protegido por acuerdo de confidencialidad (NDA)
                  </span>
                )}

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
