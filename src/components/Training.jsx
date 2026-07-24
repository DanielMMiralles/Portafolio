import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, BookOpen, Globe } from 'lucide-react';
import { SectionHeader } from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const trainings = [
  {
    title: 'Ingeniería en Sistemas',
    institution: 'Universidad Santa María — Núcleo Oriente',
    date: '2020 — ACTUALIDAD (Finalizando)',
    description: 'Formación integral en ingeniería de sistemas, programación avanzada, diseño de bases de datos, arquitectura de software y gestión de proyectos tecnológicos.',
    icon: GraduationCap,
    color: 'var(--ember-orange)',
    logo: 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/Logo_USM.png',
  },
  {
    title: 'Certificado de Desarrollo Web Backend',
    institution: 'Adakademy',
    date: '2023',
    description: 'Desarrollo de servicios backend, construcción y consumo de REST APIs, integración de bases de datos relacionales y autenticación con Node.js.',
    icon: Award,
    color: 'var(--ember-amber)',
    logo: 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/adakademy_logo_azul.png',
  },
  {
    title: 'Certificado de Desarrollo Web Frontend',
    institution: 'Adakademy',
    date: '2023',
    description: 'Especialización en desarrollo frontend con React, manejo de estado, diseño responsivo avanzado con CSS/Tailwind y consumo de APIs.',
    icon: BookOpen,
    color: 'var(--ember-crimson)',
    logo: 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/adakademy_logo_azul.png',
  },
  {
    title: 'Certificado de Inglés Avanzado',
    institution: 'Instituto IFISA',
    date: '2017',
    description: 'Dominio avanzado del idioma inglés (lectura, escritura y comunicación fluida en entornos profesionales y técnicos).',
    icon: Globe,
    color: 'var(--ember-amber)',
    logo: null,
  },
];

/* ── Timeline Node ───────────────────────────── */
const TimelineNode = ({ color }) => (
  <div style={{
    width: '16px', height: '16px',
    borderRadius: '50%',
    background: color,
    border: '3px solid var(--ember-bg)',
    boxShadow: `0 0 0 3px ${color}40, 0 0 16px ${color}60`,
    flexShrink: 0,
    zIndex: 2,
    animation: 'node-pulse 2.5s infinite',
  }} />
);

/* ── Training Card ───────────────────────────── */
const TrainingCard = ({ item, index, isLeft }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        paddingLeft: isLeft ? 0 : 'calc(50% + 2rem)',
        paddingRight: isLeft ? 'calc(50% + 2rem)' : 0,
        marginBottom: '2.5rem',
      }}
      className="timeline-card-row"
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          background: 'var(--ember-card)',
          border: `1px solid ${item.color}30`,
          borderRadius: '16px',
          padding: '1.5rem',
          maxWidth: '420px',
          width: '100%',
          position: 'relative',
          boxShadow: `0 4px 24px ${item.color}15`,
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        whileHover={{
          borderColor: item.color + '70',
          boxShadow: `0 8px 32px ${item.color}30`,
          y: -4,
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
          {/* Logo or Icon */}
          <div style={{
            width: '46px', height: '46px',
            borderRadius: '12px',
            background: 'rgba(10,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0,
            border: `1px solid ${item.color}35`,
          }}>
            {item.logo ? (
              <img src={item.logo} alt={item.institution} style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
            ) : (
              <Icon size={22} color={item.color} />
            )}
          </div>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--ember-ash)',
              marginBottom: '3px',
            }}>{item.title}</h3>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: item.color,
            }}>{item.institution} · {item.date}</span>
          </div>
        </div>
        <p style={{
          color: 'var(--ember-muted)',
          fontSize: '0.88rem',
          lineHeight: 1.65,
        }}>{item.description}</p>
      </motion.div>
    </div>
  );
};

/* ── Training ────────────────────────────────── */
const Training = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    const trigger = ScrollTrigger.create({
      trigger: line.parentElement,
      start: 'top 80%',
      end: 'bottom 30%',
      scrub: 0.5,
      onUpdate: (self) => {
        line.style.height = `${self.progress * 100}%`;
      },
    });
    return () => trigger.kill();
  }, []);

  return (
    <section
      id="training"
      style={{
        padding: '7rem 1.5rem',
        background: '#0A0000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          eyebrow="✦ Educación y Certificaciones ✦"
          title="Formación"
          subtitle="Grado en Ingeniería de Sistemas y certificaciones especializadas en desarrollo web e inglés."
        />

        {/* Timeline wrapper */}
        <div style={{ position: 'relative', marginTop: '3.5rem' }}>
          {/* Vertical line track */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0, bottom: 0,
            width: '2px',
            background: 'var(--ember-card-2)',
            transform: 'translateX(-50%)',
          }} className="timeline-line-track">
            {/* Animated fill */}
            <div
              ref={lineRef}
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '0%',
                background: 'linear-gradient(to bottom, var(--ember-crimson), var(--ember-orange), var(--ember-amber))',
                borderRadius: '1px',
                boxShadow: '0 0 8px var(--glow-orange)',
                transition: 'height 0.1s',
              }}
            />
          </div>

          {/* Center nodes */}
          {trainings.map((item, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: `calc(${(i / (trainings.length - 1)) * 85}% + 30px)`,
                zIndex: 3,
              }}
              className="timeline-node-center"
            >
              <TimelineNode color={item.color} />
            </div>
          ))}

          {/* Cards */}
          {trainings.map((item, i) => (
            <TrainingCard key={i} item={item} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line-track,
          .timeline-node-center { display: none !important; }
          .timeline-card-row {
            padding-left: 0 !important;
            padding-right: 0 !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Training;
