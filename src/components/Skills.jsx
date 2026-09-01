import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'shadcn/ui', icon: 'https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon.ico' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  },
  {
    title: 'Bases de Datos',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    ],
  },
  {
    title: 'IA & DevOps',
    skills: [
      { name: 'LangGraph', icon: 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/favicon.ico' },
      { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">// herramientas</div>
          <h2 className="section-title">Lo que uso todos los días</h2>
          <p className="section-desc" style={{ marginBottom: '3rem' }}>
            Stack moderno orientado a resolver problemas backend pesados, automatizar con IA y construir interfaces web y móviles.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="warm-card"
              style={{ padding: '1.75rem' }}
            >
              <h3 style={{ fontWeight: 700, color: 'var(--amber)', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '0.5rem 0.65rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-muted)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.background = 'var(--amber-soft)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-muted)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={20}
                      height={20}
                      style={{ objectFit: 'contain' }}
                      onError={(e) => { e.target.style.opacity = 0.3; }}
                    />
                    <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
