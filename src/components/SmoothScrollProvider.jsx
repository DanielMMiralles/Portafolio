import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '../utils/gsap';

/**
 * SmoothScrollProvider — Wraps the entire app.
 * Snappy & responsive Lenis smooth scroll configuration synced with GSAP.
 */
const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 0.9,
      lerp: 0.1,
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    const gsapModule = import('../utils/gsap');
    gsapModule.then(({ gsap }) => {
      const update = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(update);

      return () => {
        gsap.ticker.remove(update);
        lenis.destroy();
      };
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
