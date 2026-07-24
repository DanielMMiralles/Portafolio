import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap, ScrollTrigger } from '../utils/gsap';
import MagneticButton from './MagneticButton';
import d4mmIcon from '../assets/d4mm_icon.jpg';
import { ShieldCheck, Cpu, Database, FileText, ChevronRight, Lock } from 'lucide-react';

/* ─── Case Studies Data (NDA Protected Completed Projects) ─── */
const CASE_STUDIES = [
  {
    id: 1,
    title: 'ERP Naviero & Gestión de Flota',
    category: 'Enterprise / Logistics',
    icon: Database,
    accent: '#E0234E',
    glow: 'rgba(224,35,78,0.18)',
    number: '01',
    challenge: 'Control descentralizado e ineficiente de operaciones de flota naval, logística de carga, stock de repuestos y facturación empresarial.',
    solution: 'Diseño y desarrollo de arquitectura modular NestJS con PostgreSQL y frontend React de alta velocidad, centralizando el estado operativo de buques, control de insumos en tiempo real y facturación automatizada.',
    impact: 'Reducción del 40% en tiempos de procesamiento contable-logístico y cero discrepancias en inventario naval.',
    stack: ['NestJS', 'PostgreSQL', 'React', 'TailwindCSS', 'Docker'],
  },
  {
    id: 2,
    title: 'Agente IA Autónomo & CRM WhatsApp',
    category: 'IA & Automatización',
    icon: Cpu,
    accent: '#F77F00',
    glow: 'rgba(247,127,0,0.18)',
    number: '02',
    challenge: 'Alta demanda de atención comercial por WhatsApp 24/7 sin personal suficiente para calificar prospectos, cotizar y coordinar logística de despachos.',
    solution: 'Desarrollo de un sistema de agentes autónomos con LangGraph y FastAPI integrados con la API de WhatsApp y Supabase, permitiendo a los agentes consultar stock en vivo y agendar pedidos automáticamente.',
    impact: 'Automatización del 85% de las consultas entrantes y atención comercial ininterrumpida las 24 horas.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'Supabase', 'React'],
  },
  {
    id: 3,
    title: 'Middleware de Pasarela de Pagos Segura',
    category: 'Backend & Security',
    icon: ShieldCheck,
    accent: '#3ECF8E',
    glow: 'rgba(62,207,142,0.18)',
    number: '03',
    challenge: 'Interconectar sistemas empresariales legacy con procesadores de pago encriptados manteniendo baja latencia, seguridad estricta y tolerancia a fallos.',
    solution: 'Construcción de una capa middleware en Node.js y NestJS containerizada en Docker, aplicando arquitectura orientada a eventos, cifrado AES-256 en tránsito y sistema de reintentos idempotentes.',
    impact: 'Procesamiento de transacciones sub-segundo con 99.99% de disponibilidad operativa durante picos de tráfico.',
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'Docker', 'TypeScript'],
  },
  {
    id: 4,
    title: 'Sistema de Gestión Documental Corporativo',
    category: 'Full Stack Enterprise',
    icon: FileText,
    accent: '#FCBF49',
    glow: 'rgba(252,191,73,0.18)',
    number: '04',
    challenge: 'Gestión caótica de permisos, falta de trazabilidad y riesgos de filtración en la documentación legal e interna de la empresa.',
    solution: 'Plataforma web construida con React y Supabase (PostgreSQL RLS) con control de acceso basado en roles (RBAC), auditoría inmutable de lecturas y versionado completo de archivos.',
    impact: 'Resguardo e inmutabilidad del 100% de la documentación crítica corporativa con auditoría en tiempo real.',
    stack: ['React', 'TailwindCSS', 'Supabase', 'PostgreSQL'],
  },
];

/* ─── Case Study Card Component ─── */
const CaseStudyCard = ({ study, index }) => {
  const cardRef = useRef(null);
  const [activeTab, setActiveTab] = useState('solution'); // 'challenge' | 'solution' | 'impact'
  const Icon = study.icon;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40, rotateX: 6 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        position: 'relative',
        background: 'rgba(15, 3, 3, 0.85)',
        border: '1px solid rgba(90, 64, 53, 0.3)',
        borderRadius: '20px',
        padding: '2rem',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        transition: 'border-color 0.4s, box-shadow 0.4s',
        willChange: 'transform',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = study.accent + '66';
        e.currentTarget.style.boxShadow = `0 0 45px ${study.glow}, 0 20px 60px rgba(0,0,0,0.5)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(90, 64, 53, 0.3)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top Accent Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${study.accent}, transparent)`,
        }}
      />

      {/* Ghost Number */}
      <div
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '0.8rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '4.5rem',
          lineHeight: 1,
          color: `${study.accent}0E`,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        {study.number}
      </div>

      <div>
        {/* Header Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: `${study.accent}15`,
                border: `1px solid ${study.accent}44`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: study.accent,
              }}
            >
              <Icon size={20} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: study.accent,
                  opacity: 0.9,
                }}
              >
                {study.category}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--ember-ash)',
                  margin: 0,
                }}
              >
                {study.title}
              </h3>
            </div>
          </div>
        </div>

        {/* NDA Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(90, 64, 53, 0.4)',
            borderRadius: '999px',
            padding: '0.2rem 0.65rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.58rem',
            color: 'var(--ember-muted)',
            marginBottom: '1.25rem',
          }}
        >
          <Lock size={10} color="var(--ember-orange)" />
          <span>Código Protegido bajo NDA</span>
        </div>

        {/* Navigation Tabs (Desafío / Solución / Impacto) */}
        <div
          style={{
            display: 'flex',
            gap: '0.25rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
            padding: '3px',
            marginBottom: '1rem',
            border: '1px solid rgba(90, 64, 53, 0.3)',
          }}
        >
          {[
            { id: 'solution', label: 'Resolución Técnica' },
            { id: 'challenge', label: 'El Desafío' },
            { id: 'impact', label: 'Resultado' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '0.35rem 0.5rem',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                cursor: 'pointer',
                background: activeTab === tab.id ? `${study.accent}22` : 'transparent',
                color: activeTab === tab.id ? study.accent : 'var(--ember-muted)',
                fontWeight: activeTab === tab.id ? 600 : 400,
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Content */}
        <div style={{ minHeight: '95px', marginBottom: '1.25rem' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'solution' && (
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: study.accent,
                      letterSpacing: '0.08em',
                      marginBottom: '0.3rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <ChevronRight size={12} /> ARQUITECTURA E IMPLEMENTACIÓN
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--ember-ash-dim)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {study.solution}
                  </p>
                </div>
              )}

              {activeTab === 'challenge' && (
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--ember-orange)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.3rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <ChevronRight size={12} /> NECESIDAD DEL CLIENTE
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--ember-ash-dim)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {study.challenge}
                  </p>
                </div>
              )}

              {activeTab === 'impact' && (
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: '#3ECF8E',
                      letterSpacing: '0.08em',
                      marginBottom: '0.3rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <ChevronRight size={12} /> IMPACTO OBTENIDO
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--ember-ash-dim)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {study.impact}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(90, 64, 53, 0.25)',
        }}
      >
        {study.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.05em',
              padding: '0.2rem 0.55rem',
              borderRadius: '999px',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(90, 64, 53, 0.4)',
              color: 'var(--ember-muted)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── Background Constellation Component ─── */
const ConstellationBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 45;
    const dots = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random(),
      da: (Math.random() - 0.5) * 0.004,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.a = Math.max(0.05, Math.min(0.4, d.a + d.da));
        if (d.a <= 0.05 || d.a >= 0.4) d.da *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 127, 0, ${d.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

/* ─── Main Projects Section ─── */
const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 9vw, 8rem) 1.5rem',
        background: '#0A0000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ConstellationBg />

      {/* Ghost text background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(6rem, 15vw, 14rem)',
          color: 'rgba(193, 18, 31, 0.025)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.05em',
          zIndex: 0,
        }}
      >
        CASES
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem',
            }}
          >
            <img
              src={d4mmIcon}
              alt="D4MM"
              style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '6px', opacity: 0.85 }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ember-orange)',
              }}
            >
              Resolución Técnica · Casos de Estudio
            </span>
          </motion.div>

          <h2
            ref={headingRef}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              background: 'linear-gradient(120deg, #EAE2B7 0%, #F77F00 50%, #C1121F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: '0 0 1.25rem',
            }}
          >
            Proyectos & Soluciones
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.02rem)',
              color: 'var(--ember-muted)',
              maxWidth: '620px',
              margin: '0 auto 1.75rem',
              lineHeight: 1.75,
            }}
          >
            Por acuerdos de confidencialidad (NDA) con mis clientes, la interfaz y el código fuente permanecen privados. 
            A continuación detallo cómo abordé y resolví los principales desafíos técnicos.
          </p>

          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(247, 127, 0, 0.06)',
              border: '1px solid rgba(247, 127, 0, 0.25)',
              borderRadius: '999px',
              padding: '0.5rem 1.25rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--ember-amber)',
              letterSpacing: '0.08em',
            }}
          >
            <Lock size={12} color="#F77F00" />
            <span>4 Casos de Estudio Empresariales · Código Privado bajo NDA</span>
          </div>
        </div>

        {/* ── Case Studies Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        {/* ── CTA Row (Perfectly Aligned Buttons) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <MagneticButton strength={0.35}>
            <a
              href="https://github.com/DanielMMiralles"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember"
            >
              Ver GitHub →
            </a>
          </MagneticButton>

          <MagneticButton strength={0.35}>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline-ember"
            >
              Trabajemos juntos
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
