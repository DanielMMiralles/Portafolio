import React from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal — Ultra-smooth scroll reveal component.
 * Animates children with a refined bezier easing curve as they scroll into view.
 */
export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.75,
  y = 35,
  x = 0,
  scale = 1,
  once = true,
  className,
  style,
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once, margin: '0px 0px -70px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y, x, scale }}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, y, x, scale }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * SectionHeader — Unified section title component with staggered reveal & ambient glow halo.
 */
export const SectionHeader = ({ eyebrow, title, subtitle }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <div ref={ref} style={{ textAlign: 'center', position: 'relative', marginBottom: '3.5rem', zIndex: 2 }}>
      {/* Ambient Radial Glow Behind Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '320px',
          height: '140px',
          background: 'radial-gradient(ellipse at center, rgba(247,127,0,0.12) 0%, rgba(193,18,31,0.06) 50%, transparent 75%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* Eyebrow */}
      {eyebrow && (
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '0.4rem' }}
        >
          {eyebrow}
        </motion.p>
      )}

      {/* Title */}
      <motion.h2
        className="section-heading text-ember-gradient"
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ margin: '0 0 0.75rem', lineHeight: 1.1 }}
      >
        {title}
      </motion.h2>

      {/* Ember Divider */}
      <motion.div
        className="ember-divider"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ margin: '0 auto 1rem' }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.88rem, 1.7vw, 1.02rem)',
            color: 'var(--ember-muted)',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default ScrollReveal;
