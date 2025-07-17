import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400"
        >
          Sobre Mí
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl mb-8 md:mb-0 flex-shrink-0"
          >
            <img
              src="https://github.com/DanielMMiralles/Portafolio/blob/main/src/assets/cvimage.jpg"
              alt="Tu Foto de Perfil"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg leading-relaxed"
          >
            <p className="mb-4">
              Soy un desarrollador frontend apasionado con X años de experiencia en la creación de interfaces de usuario intuitivas y atractivas. Mi enfoque principal es React, donde disfruto construyendo componentes reutilizables y optimizando el rendimiento para ofrecer experiencias de usuario excepcionales.
            </p>
            <p className="mb-4">
              Me encanta resolver problemas complejos y siempre estoy buscando nuevas formas de mejorar mis habilidades y aprender las últimas tecnologías. Creo firmemente en el código limpio, las pruebas rigurosas y la colaboración efectiva en equipo.
            </p>
            <p>
              Fuera del código, disfruto [menciona un hobby o interés, ej. leer, hacer senderismo, jugar videojuegos, aprender idiomas].
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
