import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Code } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Aplicación de Red Social',
    description: 'Una aplicación full-stack para emular una red social con autenticación, publicaciones e interacción entre usuarios.',
    image: ['https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/CrossLine/Screenshot_13-7-2025_235122_localhost.jpeg', 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/CrossLine/Screenshot_13-7-2025_234617_localhost.jpeg'],
    technologies: ['React', 'Node.js', 'firebase', 'Tailwind CSS'],
    githubLink: 'https://github.com/DanielMMiralles/SocialApp',
    liveDemoLink: '#',
  },
  {
    id: 2,
    title: 'Sistema de solicitudes de proyectos',
    description: 'Aplicación para gestionar solicitudes de soluciones tecnológicas.',
    image: ['https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/ProjectFlow/Screenshot_2025-07-11_220355.png', 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/ProjectFlow/Screenshot_2025-07-11_220819.png', 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/ProjectFlow/Screenshot_2025-07-11_220911.png', 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/ProjectFlow/Screenshot_2025-07-11_221016.png'],
    technologies: ['SQL', 'Python', 'Styled Components', 'Flet'],
    githubLink: 'https://github.com/DanielMMiralles/Flet-project',
    liveDemoLink: '#',
  },
  {
    id: 3,
    title: 'Sistema de administracion de proyectos y personal',
    description: 'Sistema para la recepción de solicitudes y asignación de proyectos',
    image: ['https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/Flaticom/Screenshot_2025-07-11_222149.png', 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/Flaticom/Screenshot_2025-07-11_221246.png', 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/Flaticom/Screenshot_2025-07-11_221204.png', 'https://raw.githubusercontent.com/DanielMMiralles/Portafolio/main/src/assets/Flaticom/Screenshot_2025-07-11_220457.png'],
    technologies: ['PostgreSQL', 'Tailwind CSS', 'Chakra UI', 'Flet'],
    githubLink: 'https://github.com/DanielMMiralles/Flet-project',
    liveDemoLink: '#',
  },
  {
    id: 4,
    title: 'Aplicaciones para el uso de APIs',
    description: 'Aplicación para extraer y mapear información de una API.',
    image: 'https://raw.githubusercontent/DanielMMiralles/Portafolio/main/src/assets/Screenshot_17-7-2025_13511_localhost.jpeg',
    technologies: ['VueJS' ,'TypeScript' ,'Mocks'],
    githubLink: 'https://github.com/DanielMMiralles/rick_and_morty',
    liveDemoLink: '#',
  },
];

const ProjectCard = ({ project, index }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const images = Array.isArray(project.image) ? project.image : [project.image];

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 group"
    >
      <div className="relative w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <img
          src={images[currentImg]}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/333333?text=Imagen+No+Disponible"; }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-900/70 rounded-full p-1 shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition"
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <button
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-900/70 rounded-full p-1 shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition"
              aria-label="Siguiente"
            >
              &#8594;
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-2 h-2 rounded-full ${i === currentImg ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            whileHover={{ x: 5 }}
          >
            <Github className="h-5 w-5 mr-1" /> GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.technologies.includes(filter));

  const allTechnologies = [...new Set(projectsData.flatMap(project => project.technologies))];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400"
        >
          Mis Proyectos
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900'
            }`}
          >
            Todos
          </button>
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === tech
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-gray-600 dark:text-gray-300 text-lg"
            >
              No hay proyectos que coincidan con este filtro.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
