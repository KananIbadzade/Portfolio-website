import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react'

const About = () => {
  const personalInfo = [
    
    
    
    
  ]

  return (
    <section id="about" className="py-20 bg-transparent dark:bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/mission-peaks.jpg"
                alt="Kanan Ibadzade"
                className="w-full h-96 object-cover rounded-lg shadow-xl object-center scale-110"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Thanks for dropping in!
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Computer Software Engineering student at San José State University with a passion for backend systems, infrastructure, and AI/ML. I love turning ideas into real, usable tech, from full-stack web apps to machine learning models that make software smarter.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I see myself diving deeper into machine learning, computer vision, and robotics, with the long-term dream of building a robot from scratch. It's the same spark I felt watching Max and his father bring Atom back to life in Real Steel or Tony Stark piecing together the Iron Man suit in his garage. Those stories showed me what's possible and with the pace of today's technology, maybe in the next decade we'll have humanoid friends by our side. That's the future I want to help build.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside the terminal and school, you'll probably catch me playing soccer, lifting at the gym, cooking something new, or out hiking. I'm also a polyglot, fluent in four languages and currently learning Spanish - so feel free to say hola!
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="text-primary-600">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
