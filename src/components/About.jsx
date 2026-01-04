import { motion } from 'framer-motion'
import { MapPin, Code, Lightbulb } from 'lucide-react'

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
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Originally from 🇦🇿, I moved to the Bay Area at 17 and discovered my passion for software engineering. I am currently studying at San José State University, focusing on building practical solutions that make a difference.
              </p>
              <p>
                I am interested in infrastructure and cloud computing, machine learning and computer vision. In the long term, I'm excited about robotics and autonomous vehicles.
              </p>
              <p>
                Some of my favorite movies that inspired me include Real Steel and The Social Network. Outside of school and work, you'll probably find me playing soccer, lifting at the gym, cooking something new, or hiking. I am a polyglot, fluent in four languages and currently learning Spanish, so feel free to say hola!
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary-600" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Infrastructure', 'Cloud', 'Machine Learning', 'Computer Vision', 'Autonomous Vehicle', 'Embedded System', 'IoT', 'Robotics', 'Soccer'].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
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
