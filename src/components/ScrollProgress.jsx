import React, { useEffect, useRef } from 'react';

/**
 * ScrollProgress — thin top bar showing page reading progress
 * Gradient: crimson → orange
 * Zero dependencies, pure DOM + rAF
 */
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'rgba(10,0,0,0.3)',
        zIndex: 99990,
        pointerEvents: 'none',
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '0%',
          background: 'linear-gradient(90deg, #C1121F, #F77F00, #FCBF49)',
          borderRadius: '0 2px 2px 0',
          boxShadow: '0 0 8px rgba(247,127,0,0.6)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
