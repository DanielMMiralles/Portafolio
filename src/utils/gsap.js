/**
 * gsap.js — Central GSAP plugin registration.
 * Import this file ONCE at app root before any component uses GSAP.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, TextPlugin, Flip);

// Smoother defaults
gsap.defaults({ ease: 'power3.out' });

// Prevent lag spikes from hijacking animations
gsap.ticker.lagSmoothing(0);

export { gsap, ScrollTrigger, TextPlugin, Flip };
