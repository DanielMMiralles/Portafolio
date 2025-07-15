import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 px-4 text-center">
      <div className="container mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-7 w-7" />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-7 w-7" />
          </motion.a>
          <motion.a
            href="mailto:tucorreo@ejemplo.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="h-7 w-7" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
