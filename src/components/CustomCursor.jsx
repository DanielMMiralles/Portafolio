import React, { useEffect, useRef } from 'react';

/**
 * CustomCursor — Ember Forge
 * Lightweight: uses CSS transforms only, no canvas.
 * Two layers: small dot (precise) + large ring (follow with delay).
 * Changes size/color on interactive elements.
 */
const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef(null);
  const isTouch = useRef(false);

  useEffect(() => {
    // Don't activate on touch-only devices
    if (window.matchMedia('(hover: none)').matches) {
      isTouch.current = true;
      return;
    }

    const dot  = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    // Track mouse
    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    // Cursor state on interactive elements
    const onMouseEnter = () => {
      dot.classList.add('cursor-dot--active');
      ringEl.classList.add('cursor-ring--active');
    };
    const onMouseLeave = () => {
      dot.classList.remove('cursor-dot--active');
      ringEl.classList.remove('cursor-ring--active');
    };

    // Smooth ring follow
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      dot.style.transform  = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;

      raf.current = requestAnimationFrame(animate);
    };

    // Attach to interactive elements
    const attachToElements = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, label, .spotlight-card, .ember-card'
      );
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
      return interactives;
    };

    let elements = attachToElements();

    // Re-attach on DOM changes (e.g. after Framer Motion renders)
    const observer = new MutationObserver(() => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      elements = attachToElements();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMouseMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Inner dot — precise, no lag */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          background: 'var(--ember-orange)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          marginLeft: '-4px',
          marginTop: '-4px',
          transition: 'width 0.2s, height 0.2s, background 0.2s, margin 0.2s',
        }}
        className="cursor-dot"
      />
      {/* Outer ring — soft lag follow */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1.5px solid var(--ember-crimson)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          marginLeft: '-18px',
          marginTop: '-18px',
          transition: 'width 0.25s, height 0.25s, border-color 0.25s, margin 0.25s, opacity 0.25s',
          opacity: 0.7,
        }}
        className="cursor-ring"
      />

      {/* Inline styles for active states */}
      <style>{`
        .cursor-dot--active {
          width: 12px !important;
          height: 12px !important;
          margin-left: -6px !important;
          margin-top: -6px !important;
          background: var(--ember-amber) !important;
        }
        .cursor-ring--active {
          width: 52px !important;
          height: 52px !important;
          margin-left: -26px !important;
          margin-top: -26px !important;
          border-color: var(--ember-orange) !important;
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
