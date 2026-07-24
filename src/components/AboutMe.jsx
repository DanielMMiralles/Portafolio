import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, MapPin, Calendar, Layers, Code, Award, Globe } from 'lucide-react';
import danielClean from '../assets/daniel_clean.png';
import { SectionHeader } from './ScrollReveal';

/* ── Animated Counter ─────────────────────────── */
const Counter = ({ to, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const frames = 60;
    const step = to / frames;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += step;
        if (start >= to) { setCount(to); clearInterval(interval); }
        else setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, to, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Stat Card ─────────────────────────────────── */
const StatCard = ({ icon: Icon, value, suffix, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{
      background: 'var(--ember-card)',
      border: '1px solid var(--border-ember)',
      borderRadius: '14px',
      padding: '1.2rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.85rem',
      flex: '1 1 200px',
    }}
  >
    <div style={{
      width: '40px', height: '40px',
      background: 'rgba(193,18,31,0.12)',
      borderRadius: '10px',
      border: '1px solid rgba(193,18,31,0.25)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <Icon size={18} color="var(--ember-orange)" />
    </div>
    <div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.45rem',
        fontWeight: 700,
        color: 'var(--ember-orange)',
        lineHeight: 1,
      }}>
        {typeof value === 'number' ? <Counter to={value} suffix={suffix} delay={delay} /> : value}
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.78rem',
        color: 'var(--ember-muted)',
        marginTop: '3px',
      }}>{label}</div>
    </div>
  </motion.div>
);

/* ── Tech Tags ─────────────────────────────────── */
const TAGS = [
  'React', 'NestJS', 'Python', 'FastAPI', 'Django',
  'PostgreSQL', 'Supabase', 'Docker', 'n8n', 'LangGraph',
  'TailwindCSS', 'shadcn/ui', 'Jira', 'Arquitectura de Software'
];

/* ── AboutMe ───────────────────────────────────── */
const AboutMe = () => {
  return (
    <section
      id="about"
      style={{
        padding: '7rem 1.5rem',
        background: 'var(--ember-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(193,18,31,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          eyebrow="✦ Perfil Profesional ✦"
          title="Sobre Mí"
          subtitle="Desarrollador Full Stack & Arquitecto de Software enfocado en soluciones eficientes y escalables."
        />

        {/* Split layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginTop: '3rem',
        }}>
          {/* Left — Portrait Cutout (Seamless overlay, no container box) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}
          >
            {/* Waist-up Studio Portrait Frame */}
            <div style={{
              position: 'relative',
              width: '270px',
              height: '330px',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'radial-gradient(circle at 50% 30%, rgba(32, 8, 8, 0.95) 0%, rgba(10, 0, 0, 0.98) 100%)',
              border: '1px solid rgba(193, 18, 31, 0.35)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 25px rgba(193, 18, 31, 0.15)',
            }}>
              {/* Studio Rim Light Effect */}
              <div style={{
                position: 'absolute', top: '10%', right: '-10px',
                width: '60%', height: '70%',
                background: 'radial-gradient(ellipse at 100% 30%, rgba(247,127,0,0.4) 0%, rgba(193,18,31,0.2) 50%, transparent 80%)',
                filter: 'blur(8px)', zIndex: 2, pointerEvents: 'none', mixBlendMode: 'screen',
              }} />
              <div style={{
                position: 'absolute', top: '10%', left: '-10px',
                width: '60%', height: '70%',
                background: 'radial-gradient(ellipse at 0% 30%, rgba(252,191,73,0.25) 0%, transparent 70%)',
                filter: 'blur(8px)', zIndex: 2, pointerEvents: 'none', mixBlendMode: 'screen',
              }} />

              {/* Waist-Up Cropped Image */}
              <img
                src={danielClean}
                alt="Daniel A. Mata — Software Developer"
                style={{
                  width: '100%',
                  height: '140%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  filter: 'contrast(1.06) brightness(1.02)',
                  position: 'relative',
                  zIndex: 1,
                  marginTop: '-10px',
                }}
              />

              {/* Bottom Vignette Fade */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                background: 'linear-gradient(to bottom, transparent, rgba(10,0,0,0.95) 100%)',
                zIndex: 3, pointerEvents: 'none',
              }} />
            </div>

            {/* Location + availability */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: 'var(--ember-muted)', fontSize: '0.88rem', fontFamily: 'var(--font-body)',
              }}>
                <MapPin size={15} color="var(--ember-orange)" />
                Lechería, Anzoátegui, Venezuela
              </div>
              {/* Available badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: 'rgba(247,127,0,0.08)',
                border: '1px solid rgba(247,127,0,0.3)',
                borderRadius: '999px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--ember-amber)',
              }}>
                <span style={{
                  width: '7px', height: '7px',
                  borderRadius: '50%',
                  background: 'var(--ember-orange)',
                  animation: 'available-pulse 2s infinite',
                  flexShrink: 0,
                }} />
                Disponible para Oportunidades Laborales
              </div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <div>
            {[
              'Programador finalizando Ingeniería de Sistemas en la Universidad Santa María (USM) con 3 años de experiencia comprobada en el desarrollo de soluciones tecnológicas aplicadas.',
              'Me especializo en el diseño e implementación de arquitectura de software, desarrollo de agentes autónomos inteligentes (n8n, LangGraph), middlewares para pasarelas de pago seguras y sistemas empresariales complejos como ERPs y gestión documental.',
              'Combino sólidas habilidades en frontend moderno (React, TailwindCSS, shadcn) con desarrollo backend robusto (NestJS, Python/FastAPI, Django, PostgreSQL, Docker), garantizando siempre alta disponibilidad, escalabilidad y seguridad.',
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                style={{
                  color: i === 0 ? 'var(--ember-ash)' : 'var(--ember-muted)',
                  fontSize: i === 0 ? '1.05rem' : '0.94rem',
                  lineHeight: 1.75,
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {text}
              </motion.p>
            ))}

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}
            >
              {TAGS.map(tag => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </motion.div>

            {/* CV Download button */}
            <motion.a
              href="https://drive.google.com/file/d/18qr2iQbVwR6aHBbOYjvMctdb8Dygegxk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontSize: '0.9rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={16} />
              Descargar CV Completo (PDF)
            </motion.a>
          </div>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '4rem',
          }}
        >
          <StatCard icon={Calendar} value={3} suffix="+" label="Años de Experiencia" delay={0.1} />
          <StatCard icon={Layers} value={5} suffix="+" label="Sistemas Empresariales" delay={0.2} />
          <StatCard icon={Globe} value="Avanzado" label="Inglés (IFISA Cert.)" delay={0.3} />
          <StatCard icon={Award} value="USM" label="Ingeniería en Sistemas (Finalizando)" delay={0.4} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
