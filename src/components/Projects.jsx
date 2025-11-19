import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "DineEase – Restaurant Reservation Platform",
      description:
        "DineEase is a MERN stack restaurant reservation web app that lets customers book tables online with ease. Featuring a responsive UI and secure backend, it streamlines reservations and enhances the dining experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/utharaudayan/Restaurant_Reservation_web",
      // demo: 'https://demo.com',
      image: "/public/Screenshot 2025-11-14 160459.png",
    },
    {
      title: "EasyNote – Smart Note Taking App",
      description:
        "EasyNote is a React-based note taking application that allows users to quickly create, edit, and delete notes. Each note is displayed as a card with a heading and content, making it visually organized and easy to manage.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/utharaudayan/NoteTaking-App",
      // demo: "https://demo.com",
      image: "/public/Screenshot 2025-11-14 161654.png",
    },
    {
      title: "MiniBlog – Simple Blogging Platform",
      description:
        "MiniBlog is a React-based blogging application where users can create, edit, and delete blog posts. Each post includes a title and content, displayed in a clean, card-style layout. The app focuses on simplicity and usability, making it easy for users to share ideas quickly",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/utharaudayan/Blog-project",
      // demo: "https://demo.com",
      image:
        "/public/OIP.jpg",
    },
    {
      title: "ChatSphere – MERN Stack Chatbot",
      description:
        "ChatSphere is a responsive chatbot built with React and Node.js, designed for real-time Q&A. It features a WhatsApp-style interface with user and bot message bubbles. The bot retrieves structured answers from a MongoDB-powered knowledge base via backend APIs.",
      technologies: ["React", "MongoDB", "Express"],
      github: "https://github.com/utharaudayan/MyBot",
      // demo: "https://demo.com",
      image:
        "/public/OIP1.webp",
    },
    // {
    //   title: "Weather App",
    //   description:
    //     "Weather application with location-based forecasts, interactive maps, and weather alerts.",
    //   technologies: ["React", "Node.js", "OpenWeather API", "Express"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    //   image:
    //     "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Weather+App",
    // },
    // {
    //   title: "Chat Application",
    //   description:
    //     "Real-time chat application with multiple rooms, file sharing, and message history.",
    //   technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    //   image: "https://via.placeholder.com/600x400/f59e0b/ffffff?text=Chat+App",
    // },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
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
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience in
            full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {/* <FaExternalLinkAlt />
                    <span className="text-sm">Live Demo</span> */}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
