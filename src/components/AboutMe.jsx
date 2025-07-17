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
              src="https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/cvimage.jpg"
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
              Soy un desarrollador web de 21 años estudiante de ingenieria en sistemas en noveno semestre.
            </p>
            <p className="mb-4">
              Soy entusiasta de la programación y me especializo en el desarrollo de aplicaciones web utilizando tecnologías modernas como React, Node.js y bases de datos SQL y NoSQL.
            </p>
            <p>
              Actualmente sigo instruyendome en tecnologías emergentes y bases de datos en la nube como firebase, desarrollando experiencias dinámicas e intuitivas!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
