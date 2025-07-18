import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Laptop, Database, Palette } from 'lucide-react';

const trainings = [
  {
    title: 'React Avanzado',
    institution: 'FreeCodeCamp',
    date: '2024',
    description: 'Profundización en hooks, context, optimización de rendimiento y patrones avanzados de React.',
    icon: <Laptop className="w-8 h-8 text-black-500" />,
    color: 'from-customreact to-gray-900 dark:from-white dark:to-white'
  },
  {
    title: 'Desarrollo de aplicaciones web Full Stack con JavaScript',
    institution: 'Adakademy',
    date: '2023',
    description: 'Manejo de APIs para extracción y mapeo de informacion utilizando vue.js',
    icon: <img src='https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/adakademy_logo_azul.png' className="w-12 h-12 text-blue-500" />,
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'CSS3 y HTML5 avanzado',
    institution: 'Alegra',
    date: '2023',
    description: 'Diseño responsivo, animaciones avanzadas y mejores prácticas de accesibilidad.',
    icon: <img src='https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/Logotipo-Alegra.png' className="w-8 h-8 text-green-500" />,
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'SQL y Modelado de Datos',
    institution: 'datacamp',
    date: '2024',
    description: 'Consultas avanzadas, modelado relacional y optimización de bases de datos.',
    icon: <img src='https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/datacamp-logo-freelogovectors.net_.png' className="w-8 h-8 text-color-#7FFFD4" />,
    color: 'from-green-400 to-blue-700'
  },
  {
    title: 'Ingeniero en sistemas',
    institution: 'Universidad Santa Maria',
    date: '2020-(En curso)',
    description: 'Formación integral en ingeniería de sistemas, programación y gestión de proyectos tecnológicos.',
    icon: <img src='https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/Logo_USM.png' className="w-8 h-8 text-purple-500" />,
    color: 'from-purple-400 to-purple-600'
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60, rotate: -6 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: i * 0.1 }
  })
};

const Training = () => (
  <section id="training" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
      >
        Capacitaciones
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trainings.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.07, rotate: 2 }}
            className={`relative rounded-3xl shadow-2xl p-6 flex flex-col items-center justify-between bg-white/70 dark:bg-gray-800/80 backdrop-blur-lg border border-blue-100 dark:border-gray-700 transition-transform duration-300 group overflow-hidden hover:shadow-blue-300 dark:hover:shadow-purple-700 hover:z-10`}
          >
            <div className={`absolute -top-10 right-0 w-32 h-32 rounded-full blur-2xl opacity-40 bg-gradient-to-br ${item.color}`}></div>
            <div className="z-10 flex flex-col items-center">
              <div className="mb-4 animate-bounce-slow flex items-center justify-center">
                {typeof item.icon === 'string' ? (
                  <img src={item.icon} alt={item.title + ' logo'} className="w-16 h-16 object-contain mx-auto" />
                ) : (
                  React.cloneElement(item.icon, { className: 'w-16 h-16 object-contain mx-auto' })
                )}
              </div>
              <h3 className="text-lg font-bold text-center mb-1 text-blue-700 dark:text-blue-300 drop-shadow-lg">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">{item.institution} &bull; {item.date}</p>
              <p className="text-gray-700 dark:text-gray-200 text-center text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Training;
