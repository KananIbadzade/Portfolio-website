import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Code, FileText, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [hasTyped, setHasTyped] = useState(false)
  const fullText = "Hi, I'm Kanan"

  useEffect(() => {
    if (hasTyped) return
    let index = 0
    let timeoutId
    const typeNext = () => {
      setTypedText(fullText.slice(0, index + 1))
      index += 1
      if (index >= fullText.length) {
        setHasTyped(true)
        return
      }
      const prevChar = fullText[index - 1]
      let delay = 75 + Math.random() * 35 // slightly faster with natural jitter
      if (prevChar === ',' || prevChar === ' ') delay += 80
      if (prevChar === "'") delay += 25
      timeoutId = setTimeout(typeNext, delay)
    }
    timeoutId = setTimeout(typeNext, 160)
    return () => clearTimeout(timeoutId)
  }, [hasTyped])
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-transparent dark:from-gray-900/40 dark:to-gray-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {typedText || fullText}
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 align-middle bg-gray-900 dark:bg-white ml-1"
                />{' '}
                {hasTyped && (
                  <motion.span
                    initial={{ opacity: 0, y: 0, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="text-4xl lg:text-5xl inline-block"
                  >
                    👋
                  </motion.span>
                )}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                originally from 🇦🇿, graduated high school early and moved to the Bay Area at 17, where living on my own taught me how to be independent and resilient. Being surrounded by incredible people and the world's top tech hubs only fueled my passion for chasing big ideas, from intelligent software to robotics and the future of human-tech collaboration.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="btn-primary flex items-center gap-2"
              >
                <Code size={20} />
                About Me
              </motion.button>
              
              <motion.a
                href="https://drive.google.com/file/d/1E8WV7lIt-hZdDdD0h0DZEnntYll8A2JR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <FileText size={20} />
                Resume
              </motion.a>
              
              <motion.a
                href="mailto:kananibadzade@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Mail size={20} />
                Contact
              </motion.a>
              
              
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/images/sf-me.jpg"
                  alt="Kanan Ibadzade"
                  className="w-full h-full object-cover scale-110 object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - bottom above About */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm mb-1">Scroll down</span>
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 