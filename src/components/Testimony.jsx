import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const Testimony = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="testimony" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Testimony
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <Quote className="text-white" size={24} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Person Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-lg mb-6">
                  <img
                    src="/images/Di-Liu.webp"
                    alt="Di Liu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    Di Liu
                  </h3>
                  <p className="text-gray-600">
                    CIS Computer Lab Coordinator
                  </p>
                  <p className="text-sm text-gray-500">
                    De Anza College
                  </p>
                </div>
              </motion.div>

              {/* Testimonial Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="lg:col-span-2"
              >
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                  "I'm pleased to write this reference for Kanan Ibadzade. Kanan worked as a volunteer TA in the CIS lab at De Anza College during the spring quarter (April to June). He tutored C++ for CIS 22A (beginning C++), 22B (intermediate C++), and 22C (data abstraction and structures). We're grateful for his willingness to contribute his time to help students without pay. Kanan's programming skills and willingness to help would be a great asset for any team."
                </blockquote>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
                          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Teaching Experience
            </h3>
            <p className="text-gray-600">
              This testimonial reflects my passion for helping others learn and grow. 
              I believe in the power of knowledge sharing and collaborative learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimony 