import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-40 h-40 lg:w-48 lg:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 animate-pulse opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                <img
                  src="/images/sf-me.jpg"
                  alt="Kanan Ibadzade"
                  loading="lazy"
                  className="w-full h-full object-cover object-center scale-125"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Kanan Ibadzade
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
              Software Engineering Student
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
              Building impactful solutions and exploring the intersection of AI, ML, and modern software development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <motion.a
              href="mailto:kananibadzade@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              <Mail size={16} />
              Contact
            </motion.a>
            
            <motion.a
              href="https://github.com/KananIbadzade"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:border-gray-300 dark:hover:border-gray-600 transition-all"
            >
              <Github size={16} />
              GitHub
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/kanan-ibadzade/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:border-gray-300 dark:hover:border-gray-600 transition-all"
            >
              <Linkedin size={16} />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
