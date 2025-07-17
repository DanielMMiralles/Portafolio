import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ setActiveSection }) => {
  const handleScrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    setActiveSection('projects');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <circle cx="20" cy="20" r="15" fill="rgba(255,255,255,0.1)" />
          <rect x="70" y="10" width="20" height="20" fill="rgba(255,255,255,0.08)" rx="5" />
          <polygon points="50,80 60,95 40,95" fill="rgba(255,255,255,0.12)" />
          <path d="M10 50 Q 30 40 50 50 T 90 50" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg"
        >
          Hola, soy <span className="text-yellow-300">Daniel Mata</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white mb-8 opacity-90"
        >
          Desarrollador web | Especialista en React. Creando experiencias web impactantes e innovadoras.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.button
            onClick={handleScrollToProjects}
            className="bg-white text-blue-600 dark:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.08, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Proyectos
          </motion.button>
          <motion.a
            href="#"
            className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-white hover:text-blue-600 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.08, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
