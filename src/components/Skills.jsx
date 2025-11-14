import React from 'react'
import { motion } from 'framer-motion'
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiTypescript,
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core MERN Stack',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 90 },
        { name: 'Express.js', icon: <SiExpress />, level: 85 },
        { name: 'React', icon: <SiReact />, level: 90 },
        { name: 'Node.js', icon: <SiNodedotjs />, level: 85 },
      ],
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript />,level: 90  },
        // { name: 'TypeScript', icon: <SiTypescript />,level: 80  },
        { name: 'HTML5', icon: <SiHtml5 />,  level: 95 },
        { name: 'CSS3', icon: <SiCss3 />, level: 90  },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />,level: 85  },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 80  },
        // { name: 'Redux', icon: <SiRedux />, level: 80  },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        // { name: 'Git', icon: <SiGit />, level: 85 },
        { name: 'GitHub', icon: <SiGithub />, level: 90 },
        { name: 'Postman', icon: <SiPostman />, level: 80 },
        // { name: 'Firebase', icon: <SiFirebase />, level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing web applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-400">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.5 }}
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl text-indigo-400">{skill.icon}</div>
                        <span className="text-lg font-semibold">{skill.name}</span>
                      </div>
                      {/* <span className="text-gray-400 text-sm">{skill.level}%</span> */}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        // whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        // transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3, duration: 1 }}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

