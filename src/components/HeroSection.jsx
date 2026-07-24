import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import danielClean from '../assets/daniel_clean.png';
import d4mmLogo from '../assets/d4mm_logo.jpg';
import MagneticButton from './MagneticButton';

/* ── Typewriter Hook ─────────────────────────── */
const useTypewriter = (words, speed = 80, pause = 2000) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      if (displayed.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, words, speed, pause]);

  return displayed;
};

/* ── Ember Particle Canvas ───────────────────── */
const EmberCanvas = () => {
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 40;
    const embers = Array.from({ length: COUNT }, () => spawn(canvas));

    function spawn(c) {
      return {
        x: Math.random() * c.width,
        y: c.height + Math.random() * 80,
        r: Math.random() * 2.2 + 0.4,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.7 + 0.3),
        life: Math.random(),
        decay: Math.random() * 0.003 + 0.001,
        hue: Math.floor(Math.random() * 40),
      };
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      embers.forEach((e, i) => {
        e.x += e.vx; e.y += e.vy; e.life -= e.decay;
        if (e.life <= 0 || e.y < -10) { embers[i] = spawn(canvas); return; }
        const alpha = e.life * 0.6;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${e.hue}, 95%, 60%, ${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${e.hue}, 95%, 60%, ${alpha * 0.5})`;
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
  );
};

/* ── D4MM Logo (Real Image) ──────────────── */
const D4MMLogo = () => (
  <img
    src={d4mmLogo}
    alt="D4MM"
    style={{ height: '36px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }}
  />
);

/* ── Studio Portrait with Dynamic Cursor Lighting ── */
const StudioPortrait = ({ mouseX, mouseY }) => {
  const rimLX = (mouseX - 0.5) * 120;
  const rimLY = (mouseY - 0.5) * 80;
  const rimLeft  = mouseX < 0.5 ? 'rgba(247,127,0,0.55)' : 'rgba(247,127,0,0.12)';
  const rimRight = mouseX > 0.5 ? 'rgba(193,18,31,0.55)' : 'rgba(193,18,31,0.12)';
  const orbX = 50 + (mouseX - 0.5) * 60;
  const orbY = 50 + (mouseY - 0.5) * 40;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexShrink: 0,
        zIndex: 5,
        width: 'min(360px, 88vw)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 'min(340px, 80vw)',
          height: 'min(340px, 80vw)',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: `radial-gradient(circle at ${orbX}% ${orbY}%, rgba(193,18,31,0.2) 0%, rgba(247,127,0,0.08) 45%, transparent 70%)`,
          zIndex: 0,
          pointerEvents: 'none',
          borderRadius: '50%',
          filter: 'blur(20px)',
          transition: 'background 0.12s ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: `calc(50% - 180px + ${rimLX}px)`,
          top: `calc(10% + ${rimLY}px)`,
          width: '40px',
          height: '75%',
          background: `linear-gradient(to bottom, transparent, ${rimLeft} 40%, transparent)`,
          filter: 'blur(18px)',
          zIndex: 1,
          pointerEvents: 'none',
          transition: 'left 0.1s ease, top 0.1s ease, background 0.15s ease',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: `calc(50% - 180px - ${rimLX}px)`,
          top: `calc(10% - ${rimLY}px)`,
          width: '40px',
          height: '75%',
          background: `linear-gradient(to bottom, transparent, ${rimRight} 40%, transparent)`,
          filter: 'blur(18px)',
          zIndex: 1,
          pointerEvents: 'none',
          transition: 'right 0.1s ease, top 0.1s ease, background 0.15s ease',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '220px',
          height: '30px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.9) 0%, transparent 70%)',
          filter: 'blur(12px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
        <img
          src={danielClean}
          alt="Daniel M. Miralles — Software Developer"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '360px',
            height: 'auto',
            filter: 'contrast(1.05) brightness(1.02) drop-shadow(0 24px 40px rgba(0,0,0,0.98))',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </div>
      {[
        { label: 'NestJS / React', sub: 'Full Stack', top: '12%', right: '-35px', className: 'badge-top-right', color: 'rgba(247,127,0,0.45)', delay: 0, y: [0, -7, 0], dur: 3 },
        { label: 'Agentes IA', sub: 'n8n & LangGraph', top: '48%', right: '-45px', className: 'badge-mid-right', color: 'rgba(193,18,31,0.45)', delay: 1, y: [0, 6, 0], dur: 3.5 },
        { label: 'PostgreSQL', sub: '3+ Años Exp.', top: '75%', left: '-35px', className: 'badge-bot-left', color: 'rgba(252,191,73,0.4)', delay: 0.5, y: [0, -5, 0], dur: 4 },
      ].map(b => (
        <motion.div
          key={b.label}
          className={`hero-badge ${b.className}`}
          animate={{ y: b.y }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
          style={{
            position: 'absolute',
            top: b.top,
            right: b.right,
            left: b.left,
            background: 'rgba(12, 2, 2, 0.94)',
            border: `1px solid ${b.color}`,
            borderRadius: '10px',
            padding: '0.45rem 0.75rem',
            backdropFilter: 'blur(10px)',
            zIndex: 10,
            whiteSpace: 'nowrap',
            boxShadow: '0 10px 25px rgba(0,0,0,0.65)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--ember-orange)', letterSpacing: '0.05em' }}>{b.label}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--ember-muted)', marginTop: '2px' }}>{b.sub}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ── ROLES ───────────────────────────────────── */
const ROLES = ['Software Developer', 'Agentes Autónomos & IA', 'Desarrollador Full Stack', 'Arquitecto de Software'];

/* ── Main HeroSection ────────────────────────── */
const HeroSection = ({ setActiveSection }) => {
  const role = useTypewriter(ROLES, 75, 2000);
  const sectionRef = React.useRef(null);
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top)  / rect.height));
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const spotX = `${mouse.x * 100}%`;
  const spotY = `${mouse.y * 100}%`;

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#0A0000',
      }}
    >
      <EmberCanvas />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: `radial-gradient(900px circle at ${spotX} ${spotY}, rgba(193,18,31,0.07) 0%, rgba(247,127,0,0.04) 35%, transparent 65%)`,
          transition: 'background 0.08s ease',
        }}
      />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.04,
        background: 'linear-gradient(135deg, #F77F00 0%, transparent 50%, #C1121F 100%)',
        pointerEvents: 'none',
      }} />

      <div
        className="hero-grid"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '7rem 2.5rem 4rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '560px' }}>
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}
          >
            <D4MMLogo />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--ember-muted)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Portfolio</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem',
                background: 'linear-gradient(90deg, #C1121F, #F77F00)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>D4MM Dev</div>
            </div>
            <div style={{
              marginLeft: '8px', display: 'flex', alignItems: 'center', gap: '6px',
              background: 'rgba(247,127,0,0.08)', border: '1px solid rgba(247,127,0,0.3)',
              borderRadius: '999px', padding: '0.25rem 0.7rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--ember-amber)',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F77F00', animation: 'available-pulse 2s infinite' }} />
              disponible
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4.8rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: '0.6rem',
              color: '#EAE2B7',
            }}
          >
            Hola, soy{' '}
            <br />
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(120deg, #D62828 0%, #F77F00 55%, #FCBF49 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingRight: '4px',
            }}>
              Daniel M. Miralles
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2.4vw, 1.5rem)',
              color: '#F77F00',
              fontWeight: 500,
              marginBottom: '1.4rem',
              minHeight: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            {role}
            <span style={{
              display: 'inline-block', width: '2px', height: '1.1em',
              background: '#FCBF49', marginLeft: '3px',
              animation: 'blink 1s infinite', borderRadius: '1px',
            }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{
              color: '#9A7060',
              fontSize: 'clamp(0.88rem, 1.7vw, 1.02rem)',
              maxWidth: '480px',
              marginBottom: '2.25rem',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
            }}
          >
            Programador finalizando Ingeniería de Sistemas con 3 años de experiencia en desarrollo de soluciones tecnológicas aplicadas: arquitectura de software, agentes autónomos, pasarelas de pago y automatizaciones de alto nivel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <MagneticButton strength={0.35}>
              <motion.button
                onClick={() => scrollTo('projects')}
                className="btn-ember"
                whileTap={{ scale: 0.96 }}
              >
                Ver Proyectos →
              </motion.button>
            </MagneticButton>

            <MagneticButton strength={0.35}>
              <motion.a
                href="https://drive.google.com/file/d/18qr2iQbVwR6aHBbOYjvMctdb8Dygegxk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-ember"
                whileTap={{ scale: 0.96 }}
              >
                Visualizar CV
              </motion.a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{ display: 'flex', gap: '1.2rem', marginTop: '1.75rem', alignItems: 'center' }}
          >
            {[
              { label: 'GitHub', href: 'https://github.com/DanielMMiralles' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-mata-33112a254/' },
            ].map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: '#5A4035', letterSpacing: '0.08em',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                whileHover={{ color: '#F77F00' }}
              >
                {link.label} ↗
              </motion.a>
            ))}
          </motion.div>
        </div>

        <StudioPortrait mouseX={mouse.x} mouseY={mouse.y} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => scrollTo('about')}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', gap: '6px',
          cursor: 'none', zIndex: 10,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
          letterSpacing: '0.15em', color: '#5A4035', textTransform: 'uppercase',
        }}>scroll</span>
        <div style={{
          width: '1.5px', height: '40px',
          background: 'linear-gradient(to bottom, #F77F00, transparent)',
          animation: 'scroll-bounce 2s ease-in-out infinite', borderRadius: '1px',
        }} />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            justify-items: center;
            text-align: center;
            gap: 2.5rem !important;
          }
          .hero-grid > div:first-child {
            max-width: 100% !important;
            align-items: center;
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 600px) {
          .badge-top-right { right: -5px !important; }
          .badge-mid-right { right: -10px !important; }
          .badge-bot-left  { left: -5px !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
