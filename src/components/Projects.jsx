import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, ExternalLink, Code, Globe } from 'lucide-react'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const projects = [
    {
      id: 1,
      title: 'Snake & Blackjack Game',
      description: 'This multi-game launcher, created for a software engineering course, was built in JavaFX with a strong focus on security. Alongside playable versions of Snake and Blackjack, it implements bcrypt for password hashing and AES encryption for all saved game data.',
      image: '/images/blackjack_snake.png',
      technologies: ['Java', 'JavaFX', 'Maven', 'AES Encryption', 'bcrypt Hashing'],
      github: 'https://github.com/KananIbadzade/Snake-Blackjack',
      live: '',
      category: 'Backend, Desktop App'
    },
    {
      id: 2,
      title: 'Search My Cinema',
      description: 'Built a movie search and favorites app using TMDB API and Firebase Auth. Users can log in with Google, search real-time movie data, and save up to 100 favorites synced to Firestore. Used Context API for state management and optimized routing with Vite for faster load time and cleaner code. Hosted on Vercel with real-user speed insights.',
      image: '/images/search_my_movie.png',
      technologies: ['React.js', 'Vite', 'JavaScript', 'Firebase', 'Context API'],
      github: 'https://github.com/KananIbadzade/search-my-cinema',
      live: 'https://search-my-cinema.vercel.app/',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'SEA Catalog',
      description: 'Built a personal catalog website for Snapchat Engineering Academy Stage 2, showcasing my interests in music, podcasts, and soccer players. Implemented data filtering, search functionality, and dynamic content management using vanilla JavaScript, HTML, and CSS. Features include adding new items, filtering by category, and displaying detailed information with a clean, responsive interface.',
      image: '/images/sea_catalog.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Data Structures', 'DOM Manipulation'],
      github: 'https://github.com/KananIbadzade/sea-catalog?tab=readme-ov-file',
      live: 'https://kananibadzade.github.io/sea-catalog/',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Pong Game',
      description: 'Re-created the classic Pong arcade game in C++ with the lightweight raylib graphics library. Features keyboard controls, simple AI opponent, score tracking, and speed-up after every point. Ships with a one-command Makefile so it compiles and runs natively on macOS, Linux, or Windows in seconds.',
      image: '/images/pong_game.png',
      technologies: ['C++', 'raylib', 'Makefile', 'Game Dev', 'Desktop'],
      github: 'https://github.com/KananIbadzade/PongGame',
      live: '',
      category: 'Desktop Game'
    }
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Desktop App', 'Desktop Game', 'Mobile']

  return (
    <section id="projects" className="py-20 bg-transparent dark:bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different technologies and skills I've developed.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-gray-400 dark:text-gray-500 text-4xl">📁</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More / See Less Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {!showAll ? (
            <motion.button
              type="button"
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              <span>See More</span>
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={() => setShowAll(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <span>See Less</span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
