import { motion } from 'framer-motion'

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer software engineering student at San Jose State University, originally from Azerbaijan. Graduating May 2027.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap gap-4">
            <motion.button
              onClick={() => scrollToSection('experience')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              View Experience →
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              View Projects →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
