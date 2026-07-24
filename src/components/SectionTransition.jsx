import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsap';

/**
 * SectionWave — Creates a fluid SVG wave transition between two sections.
 * Place it between any two <section> elements.
 *
 * Props:
 *   from  — CSS color of the section above (default: var bg)
 *   to    — CSS color of the section below
 *   flip  — if true, wave faces the other direction
 *   height — wave height in px (default 80)
 */
const SectionWave = ({ from = '#0A0000', to = '#0A0000', flip = false, height = 70 }) => (
  <div
    style={{
      position: 'relative',
      zIndex: 3,
      marginBottom: '-2px',
      lineHeight: 0,
      transform: flip ? 'scaleX(-1)' : 'none',
    }}
    aria-hidden="true"
  >
    <svg
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: `${height}px` }}
    >
      <defs>
        <linearGradient id={`wave-grad-${from.replace('#','')}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(193,18,31,0.18)" />
          <stop offset="50%"  stopColor="rgba(247,127,0,0.12)" />
          <stop offset="100%" stopColor="rgba(193,18,31,0.18)" />
        </linearGradient>
      </defs>

      {/* Fill bg of section above */}
      <path
        d={`M0,0 L1440,0 L1440,${height * 0.4} Q1080,${height} 720,${height * 0.55} Q360,${height * 0.1} 0,${height * 0.7} Z`}
        fill={from}
      />
      {/* Organic wave fill for section below */}
      <path
        d={`M0,${height * 0.5} Q360,${height * 0} 720,${height * 0.45} Q1080,${height} 1440,${height * 0.3} L1440,${height} L0,${height} Z`}
        fill={to}
      />
      {/* Glowing edge line */}
      <path
        d={`M0,${height * 0.5} Q360,${height * 0} 720,${height * 0.45} Q1080,${height} 1440,${height * 0.3}`}
        fill="none"
        stroke={`url(#wave-grad-${from.replace('#','')})`}
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  </div>
);

/**
 * FadeBlend — Simpler gradient blend between sections.
 * Used where the wave would be too dramatic.
 */
const FadeBlend = ({ fromColor = '#0A0000', toColor = '#0A0000', height = 120 }) => (
  <div
    aria-hidden="true"
    style={{
      height: `${height}px`,
      background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      pointerEvents: 'none',
      position: 'relative',
      zIndex: 2,
    }}
  />
);

/**
 * EmberDivider — A glowing horizontal rule with ember dot in center.
 * Animated with GSAP on scroll.
 */
const EmberDivider = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const line = el.querySelector('.ed-line');
    const dot  = el.querySelector('.ed-dot');

    gsap.set(line, { scaleX: 0 });
    gsap.set(dot,  { scale: 0, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
    });

    tl.to(line, { scaleX: 1, duration: 0.9, ease: 'power3.out' })
      .to(dot,  { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }, '-=0.3');

    return () => { tl.kill(); };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="ed-line"
        style={{
          position: 'absolute',
          left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(193,18,31,0.3) 20%, rgba(247,127,0,0.4) 50%, rgba(193,18,31,0.3) 80%, transparent)',
          transformOrigin: 'center',
        }}
      />
      <div
        className="ed-dot"
        style={{
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: 'var(--ember-orange)',
          boxShadow: '0 0 12px rgba(247,127,0,0.8), 0 0 24px rgba(247,127,0,0.4)',
          position: 'relative', zIndex: 2,
        }}
      />
    </div>
  );
};

export { SectionWave, FadeBlend, EmberDivider };
export default SectionWave;
