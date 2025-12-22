import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 8,
      title: 'SpartanAdvisor (SJSU MyPlanner)',
      description: 'AI-powered academic planning platform for SJSU students and advisors with transcript parsing, course roadmap generation, and an intelligent chatbot backed by real university data.',
      topSkills: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'OpenAI', 'Next.js'],
      github: '',
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

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.relatedTo && (
                      <span className="px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-md whitespace-nowrap">
                        {project.relatedTo}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {project.description}
                </p>
                  <div className="flex flex-wrap gap-2">
                    {project.topSkills.map((skill, skillIndex) => (
                    <span
                        key={skillIndex}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                    >
                        {skill}
                    </span>
                  ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                  </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
