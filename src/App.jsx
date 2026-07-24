import React, { useState, useEffect } from 'react';

// GSAP plugins — must be registered before any component uses them
import './utils/gsap';

import SmoothScrollProvider from './components/SmoothScrollProvider';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import SectionNav from './components/SectionNav';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Training from './components/Training';

import { ScrollTrigger } from './utils/gsap';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'training', 'skills', 'projects', 'contact'];
    const triggers = [];

    // Wait for DOM & GSAP pin-spacers to settle before attaching triggers
    const timer = setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const st = ScrollTrigger.create({
          trigger: el,
          start: id === 'home' ? 'top top' : 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(id);
            }
          },
        });
        triggers.push(st);
      });
    }, 200);

    const handleScroll = () => {
      // Force 'contact' when reaching bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 90) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      triggers.forEach((t) => t.kill());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SmoothScrollProvider>
      <div style={{ background: 'var(--ember-bg)', minHeight: '100vh' }}>
        {/* Global UI overlays */}
        <CustomCursor />
        <ScrollProgress />
        <SectionNav activeSection={activeSection} />

        {/* Navigation */}
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main continuous scroll content */}
        <main>
          <HeroSection setActiveSection={setActiveSection} />
          <AboutMe />
          <Experience />
          <Training />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
