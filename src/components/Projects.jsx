import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const projects = [
    {
      id: 8,
      title: 'SpartanAdvisor',
      description: 'AI-powered academic planning platform for SJSU students and advisors with transcript parsing, course roadmap generation, and an intelligent chatbot backed by real university data.',
      topSkills: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'OpenAI', 'Next.js'],
      github: 'https://github.com/KananIbadzade/spartan-advisor',
      live: '',
      relatedTo: 'AI / Full-Stack'
    },
    {
      id: 6,
      title: 'Research Assistant',
      description: 'Chrome extension for researchers to summarize, paraphrase, cite, highlight, and take notes directly from web pages.',
      topSkills: ['JavaScript', 'Java', 'Gemini API', 'Spring Boot'],
      github: 'https://github.com/KananIbadzade/Research-Assistant',
      live: '',
      relatedTo: 'AI/ML'
    },
    {
      id: 5,
      title: 'Medals Predictor',
      description: 'ML model predicting Olympic medal counts using GDP, population, and historical performance data.',
      topSkills: ['Python', 'Pandas', 'scikit-learn', 'ML'],
      github: 'https://github.com/KananIbadzade/olympics-prediction',
      live: '',
      relatedTo: 'AI/ML'
    },
    {
      id: 2,
      title: 'Search My Cinema',
      description: 'Movie discovery app with TMDB API integration, Firebase authentication, and real-time favorites sync.',
      topSkills: ['React.js', 'JavaScript', 'Firebase', 'Vite'],
      github: 'https://github.com/KananIbadzade/search-my-cinema',
      live: 'https://search-my-cinema.vercel.app/',
      relatedTo: ''
    },
    {
      id: 1,
      title: 'Secure Gaming Platform',
      description: 'Multi-game launcher with Snake and Blackjack featuring bcrypt password hashing and AES encryption.',
      topSkills: ['Java', 'JavaFX', 'Maven', 'Security'],
      github: 'https://github.com/KananIbadzade/Snake-Blackjack',
      live: '',
      relatedTo: ''
    },
    {
      id: 3,
      title: 'SEA Catalog',
      description: 'Personal catalog website showcasing music, podcasts, and soccer players with advanced filtering.',
      topSkills: ['JavaScript', 'HTML', 'CSS', 'DOM'],
      github: 'https://github.com/KananIbadzade/sea-catalog?tab=readme-ov-file',
      live: 'https://kananibadzade.github.io/sea-catalog/',
      relatedTo: ''
    },
    {
      id: 4,
      title: 'Pong Game',
      description: 'Classic Pong recreated in C++ with raylib graphics, featuring AI opponent and progressive difficulty.',
      topSkills: ['C++', 'raylib', 'Makefile', 'Game Dev'],
      github: 'https://github.com/KananIbadzade/PongGame',
      live: '',
      relatedTo: ''
    },
    {
      id: 7,
      title: 'Club Instagram Reach',
      description: 'Data analysis project exploring Instagram engagement patterns using web scraping and statistical analysis.',
      topSkills: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
      github: 'https://github.com/KananIbadzade/club-instagram-reach',
      live: '',
      relatedTo: ''
    }
  ]

  const visibleProjects = isExpanded ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    {project.relatedTo && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-md">
                        {project.relatedTo}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.topSkills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-white dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium border border-gray-100 dark:border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
            >
              <span>{isExpanded ? 'See Less' : 'See More'}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
