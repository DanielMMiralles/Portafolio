import React, { useState } from 'react';
import { Code2, Terminal, Coffee, Headphones, Keyboard, Sparkles, X } from 'lucide-react';
import workspaceHero from '../assets/workspace_hero.jpg';

const HOTSPOTS = [
  {
    id: 'ultrawide',
    x: 47, // % from left
    y: 28, // % from top
    icon: Code2,
    title: 'Editor Principal',
    badge: 'IDE Setup',
    description: 'VS Code & Neovim con tema ámbar cálido para arquitectura backend y diseño de sistemas.',
    tags: ['NestJS', 'FastAPI', 'TypeScript', 'LangGraph'],
  },
  {
    id: 'vertical-monitor',
    x: 68,
    y: 42,
    icon: Terminal,
    title: 'Terminal de Microservicios',
    badge: 'DevOps & Logs',
    description: 'Monitoreo de contenedores Docker, consultas a PostgreSQL/Redis y trazabilidad de eventos.',
    tags: ['Docker', 'PostgreSQL', 'Redis', 'Kubernetes', 'CI/CD'],
  },
  {
    id: 'keyboard',
    x: 40,
    y: 62,
    icon: Keyboard,
    title: 'Teclado Mecánico',
    badge: 'Craftsmanship',
    description: 'Switches táctiles para escribir miles de líneas de código limpio, robusto y mantenible.',
    tags: ['Clean Code', 'DDD', 'TDD'],
  },
  {
    id: 'coffee',
    x: 28,
    y: 48,
    icon: Coffee,
    title: 'Combustible & Focus',
    badge: 'Productividad',
    description: 'Espresso doble y atmósfera cálida para resolver problemas lógicos y arquitecturas complejas.',
    tags: ['Problem Solving', 'Deep Work'],
  },
  {
    id: 'audio',
    x: 86,
    y: 45,
    icon: Headphones,
    title: 'Audio & Estado de Flujo',
    badge: 'Flow State',
    description: 'Sonido aislado con playlists de Synthwave y Lo-Fi para entrar en hiper-enfoque.',
    tags: ['Synthwave', 'Focus'],
  },
];

const InteractiveWorkspace = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const handleSpotClick = (spot) => {
    setActiveHotspot(activeHotspot?.id === spot.id ? null : spot);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Interactive Helper Hint */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.85rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--amber)',
          }}
        >
        </div>

        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          {activeHotspot ? `Explorando: ${activeHotspot.title}` : 'Haz clic o pasa el cursor sobre los puntos'}
        </div>
      </div>

      {/* Main Interactive Stage Container */}
      <div
        style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(245, 158, 11, 0.08)',
          userSelect: 'none',
        }}
      >
        {/* Background Desk Image */}
        <img
          src={workspaceHero}
          alt="Escritorio digital de Daniel — setup de desarrollo"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
          }}
        />

        {/* Subtle Ambient Bottom Gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '35%',
            background: 'linear-gradient(to top, rgba(12, 10, 9, 0.8) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Hotspots Mapping */}
        {HOTSPOTS.map((spot) => {
          const Icon = spot.icon;
          const isActive = activeHotspot?.id === spot.id;

          return (
            <div
              key={spot.id}
              style={{
                position: 'absolute',
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: isActive ? 30 : 10,
              }}
            >
              {/* Pulsing Hotspot Trigger */}
              <button
                onClick={() => handleSpotClick(spot)}
                onMouseEnter={() => setActiveHotspot(spot)}
                aria-label={`Ver detalles de ${spot.title}`}
                style={{
                  position: 'relative',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: isActive ? 'var(--amber)' : 'rgba(12, 10, 9, 0.85)',
                  border: `2px solid ${isActive ? '#ffffff' : 'var(--amber)'}`,
                  color: isActive ? '#0c0a09' : 'var(--amber)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: isActive
                    ? '0 0 25px rgba(245, 158, 11, 0.9)'
                    : '0 0 15px rgba(245, 158, 11, 0.5)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Radar Ripple Effect */}
                <span
                  style={{
                    position: 'absolute',
                    inset: '-6px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--amber)',
                    opacity: isActive ? 0.8 : 0.4,
                    animation: 'pulse-radar 2.4s infinite ease-out',
                    pointerEvents: 'none',
                  }}
                />
                <Icon size={18} />
              </button>

              {/* Detail Tooltip / Card */}
              {isActive && (
                <div
                  className="hotspot-tooltip"
                  style={{
                    position: 'absolute',
                    top: spot.y > 60 ? 'auto' : '125%',
                    bottom: spot.y > 60 ? '125%' : 'auto',
                    left: spot.x > 70 ? 'auto' : spot.x < 30 ? '0%' : '50%',
                    right: spot.x > 70 ? '0%' : 'auto',
                    transform: spot.x >= 30 && spot.x <= 70 ? 'translateX(-50%)' : 'none',
                    width: 'min(290px, 80vw)',
                    background: 'rgba(18, 15, 13, 0.95)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid var(--amber)',
                    borderRadius: '14px',
                    padding: '1.1rem',
                    boxShadow: '0 16px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(245, 158, 11, 0.15)',
                    zIndex: 40,
                    animation: 'tooltip-appear 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Tooltip Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--amber)',
                        background: 'var(--amber-soft)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-subtle)',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {spot.badge}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHotspot(null);
                      }}
                      style={{ color: 'var(--text-muted)', display: 'flex', padding: '2px' }}
                      title="Cerrar"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fafaf9', marginBottom: '0.4rem' }}>
                    {spot.title}
                  </h4>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                    {spot.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {spot.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: '#e7e5e4',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes pulse-radar {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @keyframes tooltip-appear {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveWorkspace;
