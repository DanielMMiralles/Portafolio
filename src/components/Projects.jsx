import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Code } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Aplicación de Gestión de Tareas',
    description: 'Una aplicación full-stack para organizar y gestionar tareas diarias con autenticación de usuario.',
    image: 'https://placehold.co/600x400/FF5733/FFFFFF?text=Project+1',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubLink: '#',
    liveDemoLink: '#',
  },
  {
    id: 2,
    title: 'Clon de E-commerce Moderno',
    description: 'Un frontend de e-commerce responsive con carrito de compras y filtros de productos.',
    image: 'https://placehold.co/600x400/33FF57/FFFFFF?text=Project+2',
    technologies: ['React', 'Redux', 'Styled Components', 'Fake Store API'],
    githubLink: '#',
    liveDemoLink: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analítico Interactivo',
    description: 'Dashboard para visualizar datos de ventas con gráficos interactivos y filtros dinámicos.',
    image: 'https://placehold.co/600x400/3357FF/FFFFFF?text=Project+3',
    technologies: ['React', 'D3.js', 'Chakra UI', 'REST API'],
    githubLink: '#',
    liveDemoLink: '#',
  },
  {
    id: 4,
    title: 'Blog Personal con Markdown',
    description: 'Un blog personal donde puedo publicar artículos usando Markdown, con sistema de comentarios.',
    image: 'https://placehold.co/600x400/FF33A1/FFFFFF?text=Project+4',
    technologies: ['Next.js', 'MDX', 'GraphQL', 'PostgreSQL'],
    githubLink: '#',
    liveDemoLink: '#',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 group"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/333333?text=Imagen+No+Disponible"; }}
      />
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
          {project.liveDemoLink && (
            <motion.a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              whileHover={{ x: 5 }}
            >
              <Code className="h-5 w-5 mr-1" /> Demo
            </motion.a>
          )}
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
