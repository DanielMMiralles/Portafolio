import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 75 },
  { name: 'VueJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 65 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 75 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 80 },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 91 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 81 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 87 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 70 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 88 },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 30 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 45 },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
    >
      <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></motion.div>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">{skill.level}%</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400"
        >
          Mis Habilidades
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
