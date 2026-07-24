import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../utils/gsap';

/* ─── Skills Data ─────────────────────────────── */
const skillsData = [
  // Frontend
  { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',                          level: 'Expert',       category: 'Frontend',       color: '#61DAFB' },
  { name: 'TailwindCSS',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',              level: 'Expert',       category: 'Frontend',       color: '#38BDF8' },
  { name: 'Figma',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',                          level: 'Advanced',     category: 'Frontend',       color: '#F24E1E' },
  { name: 'shadcn/ui',    icon: 'https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon.ico',                      level: 'Advanced',     category: 'Frontend',       color: '#FFFFFF' },
  // Backend
  { name: 'NestJS',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',                        level: 'Expert',       category: 'Backend',        color: '#E0234E' },
  { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',                        level: 'Expert',       category: 'Backend',        color: '#83CD29' },
  { name: 'FastAPI',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',                      level: 'Advanced',     category: 'Backend',        color: '#009688' },
  { name: 'Django',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',                           level: 'Advanced',     category: 'Backend',        color: '#44B78B' },
  { name: 'Flask',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',                          level: 'Intermediate', category: 'Backend',        color: '#FFFFFF' },
  // Bases de Datos
  { name: 'PostgreSQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',                level: 'Expert',       category: 'DB',             color: '#336791' },
  { name: 'Supabase',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',                    level: 'Advanced',     category: 'DB',             color: '#3ECF8E' },
  { name: 'SQL Server',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',   level: 'Advanced',     category: 'DB',             color: '#CC2927' },
  // Infra & IA
  { name: 'n8n',          icon: 'https://n8n.io/favicon.ico',                                                                           level: 'Expert',       category: 'IA & Infra',     color: '#F77F00' },
  { name: 'LangGraph',    icon: 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/favicon.ico',          level: 'Advanced',     category: 'IA & Infra',     color: '#1C3C3C' },
  { name: 'Docker',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',                        level: 'Advanced',     category: 'IA & Infra',     color: '#2496ED' },
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',                              level: 'Expert',       category: 'IA & Infra',     color: '#F05033' },
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',                        level: 'Advanced',     category: 'Backend',        color: '#FFD43B' },
  { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',                level: 'Expert',       category: 'Backend',        color: '#3178C6' },
];

const LEVEL_META = {
  Expert:       { color: '#FCBF49', glow: 'rgba(252,191,73,0.35)' },
  Advanced:     { color: '#F77F00', glow: 'rgba(247,127,0,0.3)'  },
  Intermediate: { color: '#9A7060', glow: 'rgba(154,112,96,0.2)' },
};

/* ─── Horizontal Skill Card ───────────────────── */
const HSkillCard = ({ skill }) => {
  const meta = LEVEL_META[skill.level];
  return (
    <div
      style={{
        flexShrink: 0,
        width: 'min(220px, 72vw)',
        background: 'rgba(21,5,5,0.85)',
        border: '1px solid rgba(90,64,53,0.35)',
        borderRadius: '20px',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = meta.color;
        e.currentTarget.style.boxShadow = `0 0 30px ${meta.glow}, 0 20px 40px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(90,64,53,0.35)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Subtle top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '80px', height: '2px',
        background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)`,
        opacity: 0.6,
      }} />

      {/* Icon */}
      <div style={{
        width: '60px', height: '60px',
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid rgba(90,64,53,0.3)',
      }}>
        <img
          src={skill.icon}
          alt={skill.name}
          width={36} height={36}
          style={{ objectFit: 'contain', filter: 'brightness(0.95) saturate(1.1)' }}
          onError={(e) => { e.target.style.opacity = 0.3; }}
        />
      </div>

      {/* Name */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '0.95rem',
        color: 'var(--ember-ash)',
        textAlign: 'center',
      }}>{skill.name}</div>

      {/* Category */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        letterSpacing: '0.12em',
        color: 'var(--ember-muted)',
        textTransform: 'uppercase',
      }}>{skill.category}</div>

      {/* Level badge */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        fontWeight: 600,
        color: meta.color,
        background: `rgba(0,0,0,0.4)`,
        border: `1px solid ${meta.color}`,
        borderRadius: '999px',
        padding: '0.2rem 0.8rem',
        letterSpacing: '0.05em',
        boxShadow: `0 0 10px ${meta.glow}`,
      }}>{skill.level}</div>
    </div>
  );
};

/* ─── Marquee Row (velocity-driven) ──────────────── */
const MarqueeRow = ({ items, speed = 40, reverse = false }) => {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // duplicated items
    const dir = reverse ? 1 : -1;

    const tick = () => {
      xRef.current += dir * (speed / 60);
      if (!reverse && xRef.current < -totalWidth) xRef.current = 0;
      if (reverse  && xRef.current > 0)           xRef.current = -totalWidth;
      track.style.transform = `translateX(${xRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, reverse]);

  return (
    <div style={{ overflow: 'hidden', width: '100%', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
      <div ref={trackRef} style={{ display: 'flex', gap: '1rem', width: 'max-content' }}>
        {[...items, ...items].map((tech, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--ember-muted)',
              border: '1px solid rgba(90,64,53,0.3)',
              borderRadius: '999px',
              padding: '0.4rem 1rem',
              whiteSpace: 'nowrap',
              background: 'rgba(20,4,4,0.5)',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              width={14} height={14}
              style={{ objectFit: 'contain', opacity: 0.7 }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Main Skills Section ─────────────────────── */
const Skills = () => {
  const sectionRef  = useRef(null);
  const trackRef    = useRef(null);
  const headingRef  = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    // ── Horizontal scroll: pin section, translate track left ──
    const totalScroll = track.scrollWidth - window.innerWidth;

    const hScroll = gsap.to(track, {
      x: -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${track.scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ── Section heading fade-in ──
    const heading = headingRef.current;
    if (heading) {
      gsap.fromTo(heading,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            once: true,
          }
        }
      );
    }

    return () => {
      hScroll.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === section) t.kill();
      });
    };
  }, []);

  const marqueeRow1 = skillsData.filter((_, i) => i % 2 === 0);
  const marqueeRow2 = skillsData.filter((_, i) => i % 2 !== 0);

  return (
    <>
      {/* ── Marquee Banner (above horizontal section) ── */}
      <div style={{ padding: '3rem 0 0', background: 'var(--ember-bg)', overflow: 'hidden' }}>
        <div className="section-separator" />
        <div style={{ padding: '3rem 0 1.5rem' }}>
          <MarqueeRow items={marqueeRow1} speed={35} />
          <div style={{ height: '0.75rem' }} />
          <MarqueeRow items={marqueeRow2} speed={28} reverse />
        </div>
      </div>

      {/* ── Pinned Horizontal Scroll Section ── */}
      <section
        ref={sectionRef}
        id="skills"
        style={{
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          background: 'linear-gradient(180deg, var(--ember-bg) 0%, rgba(15,3,3,1) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Background radial glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(193,18,31,0.05) 0%, transparent 70%)',
        }} />

        {/* Heading — overlaid on top of the scroll track */}
        <div
          ref={headingRef}
          style={{
            position: 'absolute',
            top: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            letterSpacing: '0.2em', color: 'var(--ember-orange)',
            textTransform: 'uppercase', marginBottom: '0.4rem',
          }}>Stack Tecnológico</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            background: 'linear-gradient(120deg, #C1121F, #F77F00, #FCBF49)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Habilidades</h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.8rem',
            color: 'var(--ember-faint)', marginTop: '0.5rem',
            letterSpacing: '0.08em',
          }}>
            ← scroll para explorar →
          </p>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '1.25rem',
            alignItems: 'center',
            paddingLeft: '10vw',
            paddingRight: '10vw',
            paddingTop: '7rem',
            willChange: 'transform',
          }}
        >
          {/* Category dividers with cards */}
          {['Frontend', 'Backend', 'DB', 'IA & Infra'].map((cat, catIdx) => {
            const catSkills = skillsData.filter(s => s.category === cat);
            const catColors = {
              Frontend:   { label: '#61DAFB', glow: 'rgba(97,218,251,0.15)' },
              Backend:    { label: '#E0234E', glow: 'rgba(224,35,78,0.15)' },
              DB:         { label: '#3ECF8E', glow: 'rgba(62,207,142,0.15)' },
              'IA & Infra': { label: '#F77F00', glow: 'rgba(247,127,0,0.15)' },
            };
            const cc = catColors[cat];

            return (
              <React.Fragment key={cat}>
                {/* Category label divider */}
                <div style={{
                  flexShrink: 0,
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: cc.label,
                  opacity: 0.7,
                  paddingRight: '0.5rem',
                  borderRight: `1px solid ${cc.label}33`,
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: catIdx === 0 ? '0' : '2rem',
                }}>{cat}</div>

                {/* Cards for this category */}
                {catSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <HSkillCard skill={skill} />
                  </motion.div>
                ))}
              </React.Fragment>
            );
          })}

          {/* End spacer */}
          <div style={{ flexShrink: 0, width: '10vw' }} />
        </div>

        {/* Progress indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--ember-faint)' }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: 'var(--ember-faint)', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>scroll to explore</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--ember-faint)' }} />
        </div>
      </section>
    </>
  );
};

export default Skills;
