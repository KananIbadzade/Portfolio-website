import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, ExternalLink, Code, Globe } from 'lucide-react'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const projects = [
    {
      id: 5,
      title: 'Medals Predictor',
      description: 'Built a machine learning model to predict Olympic medal counts for countries using features like GDP, population, and past performance. Collected and cleaned datasets with Pandas, visualized patterns, and trained regression models (Linear Regression, Random Forest) with scikit-learn. Evaluated with cross-validation and metrics (R², MSE) and documented a reproducible Jupyter Notebook pipeline.',
      image: 'data:image/png;base64,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',
      technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Regression Models', 'Data Preprocessing'],
      github: 'https://github.com/KananIbadzade/olympics-prediction',
      live: '',
      category: 'Backend'
    },
    {
      id: 1,
      title: 'Secure Gaming Platform',
      description: 'Multi-game launcher with Snake and Blackjack built in JavaFX, focused on security and data protection. Implements bcrypt for password hashing and AES encryption for all saved game data; packaged with Maven for easy builds.',
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
    },
    {
      id: 5,
      title: 'Club Instagram Reach',
      description: 'Analyzed a public Instagram account’s posts to uncover what drives reach and engagement. Scraped public metadata (likes, comments, captions, timestamps) with Instaloader, cleaned the dataset, and explored patterns (best posting times, caption length, hashtags) in Jupyter notebooks. Produced actionable posting insights backed by data.',
      image: '',
      technologies: ['Python', 'Instaloader', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/KananIbadzade/club-instagram-reach',
      live: '',
      category: 'Backend'
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
