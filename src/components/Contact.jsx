import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Instagram, Phone, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/daniel-mata-33112a254/',
    icon: <Linkedin className="w-8 h-8" color='#5FAAFF'/>,
    color: 'bg-blue-600',
    hover: 'hover:bg-blue-700 hover:shadow-blue-500',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/DanielMMiralles',
    icon: <Github className="w-8 h-8" color='#7D898A'/>,
    color: 'bg-gray-800',
    hover: 'hover:bg-gray-900 hover:shadow-gray-500',
  },
  {
    name: 'Email',
    url: 'mailto:damm172004@gmail.com',
    icon: <Mail className="w-8 h-8" color='#FF8082'/>,
    color: 'bg-red-500',
    hover: 'hover:bg-red-600 hover:shadow-red-500',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+584248677833', // Remember to replace with your actual WhatsApp number
    icon: <Phone className="w-8 h-8" color='#AFF593'/>,
    color: 'bg-green-500',
    hover: 'hover:bg-green-600 hover:shadow-green-500',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/daniel.a.mm/',
    icon: <Instagram className="w-8 h-8" color='#EFC3CA'/>,
    color: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500',
    hover: 'hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 hover:shadow-pink-500',
  },
];

const Contact = () => (
  <section id="contact" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white flex flex-col items-center justify-center min-h-[80vh]">
    <div className="w-full flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
      >
        ¡Contáctame!
      </motion.h2>

      {/* Contenedor principal para el avatar y los enlaces */}
      {/* Usamos un layout de flexbox para organizar los elementos */}
        {/* Central avatar/text: Ya está centrado con translate */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.7 }}
          className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full shadow-2xl border-4 border-blue-200 dark:border-blue-700 w-32 h-32 flex flex-col items-center justify-center mb-4" // Añadimos mb-4 para espacio
        >
          <Send className="w-10 h-10 text-blue-500 mb-2 animate-pulse" />
          <span className="font-bold text-lg text-blue-700 dark:text-blue-300">¡Hablemos!</span>
        </motion.div>

        {/* Contenedor de iconos sociales - Usamos Flexbox para control sencillo */}
        {/* flex-wrap para que los elementos salten a la siguiente línea si no caben */}
        {/* justify-center para centrarlos horizontalmente en su fila */}
        {/* gap-4 para espacio entre ellos */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {socialLinks.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} // Animación de aparecer desde abajo
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 0.7, delay: 0.1 + i * 0.08 }} // Retraso escalonado
              className={`${item.color} ${item.hover} shadow-xl rounded-full p-4 flex items-center justify-center transition-all duration-300 group cursor-pointer border-4 border-white dark:border-gray-900 hover:scale-110 hover:shadow-2xl`}
              aria-label={item.name}
              // Ya no necesitamos 'style' para left/top/transform aquí
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </motion.a>
          ))}
        </div>
      <p className="mt-12 text-center text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
        Puedes contactarme a través de cualquiera de mis redes sociales. ¡Estoy disponible para colaborar, responder dudas o simplemente conversar sobre tecnología!
      </p>
    </div>
  </section>
);

export default Contact;