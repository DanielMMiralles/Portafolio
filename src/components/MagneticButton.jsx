import React, { useRef, useCallback } from 'react';

/**
 * MagneticButton — A button/element that is subtly attracted toward the cursor
 * when the mouse enters its proximity. Creates a premium, interactive feel.
 *
 * Usage: <MagneticButton><button>Click me</button></MagneticButton>
 */
const MagneticButton = ({ children, strength = 0.4, radius = 120 }) => {
  const wrapRef = useRef(null);
  const rafRef = useRef(null);
  const currentPos = useRef({ x: 0, y: 0 });

  const lerp = (a, b, t) => a + (b - a) * t;

  const onMouseMove = useCallback((e) => {
    const el = wrapRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < radius) {
      const tx = dx * strength;
      const ty = dy * strength;

      cancelAnimationFrame(rafRef.current);
      const animate = () => {
        currentPos.current.x = lerp(currentPos.current.x, tx, 0.2);
        currentPos.current.y = lerp(currentPos.current.y, ty, 0.2);
        el.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
        if (
          Math.abs(currentPos.current.x - tx) > 0.1 ||
          Math.abs(currentPos.current.y - ty) > 0.1
        ) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [strength, radius]);

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const el = wrapRef.current;
    if (!el) return;

    const release = () => {
      currentPos.current.x = lerp(currentPos.current.x, 0, 0.15);
      currentPos.current.y = lerp(currentPos.current.y, 0, 0.15);
      el.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      if (
        Math.abs(currentPos.current.x) > 0.05 ||
        Math.abs(currentPos.current.y) > 0.05
      ) {
        rafRef.current = requestAnimationFrame(release);
      } else {
        el.style.transform = 'translate(0px, 0px)';
      }
    };
    rafRef.current = requestAnimationFrame(release);
  }, []);

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ display: 'inline-block', willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
