import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaServer, FaRocket } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, HTML5, CSS3, and JavaScript.',
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Building robust server-side applications using Node.js and Express.js with MongoDB.',
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Designing and managing MongoDB databases with efficient data modeling and optimization.',
    },
    {
      icon: <FaRocket />,
      title: 'Full Stack Solutions',
      description: 'Delivering end-to-end web applications from concept to deployment.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-indigo-400">Hello, I'm  UTHARA UDAYAN a MERN Stack Developer</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate full-stack developer specializing in the MERN (MongoDB, Express, React, Node.js) stack.
              With a strong foundation in both frontend and backend technologies, I create scalable, efficient, and
              user-friendly web applications.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My journey in web development has equipped me with the skills to transform ideas into reality. I'm
              constantly learning new technologies and best practices to stay at the forefront of web development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm currently seeking opportunities to work with innovative teams and contribute to exciting projects
              that make a difference. Let's connect and build something amazing together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl text-indigo-400 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About




