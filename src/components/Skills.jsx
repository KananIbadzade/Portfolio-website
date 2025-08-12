import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    {
      name: 'Java',
      icon: '/images/java-logo.png',
      category: 'Programming'
    },
    {
      name: 'C++',
      icon: '/images/cpp-logo.png',
      category: 'Programming'
    },
    {
      name: 'Python',
      icon: '/images/python-logo.png',
      category: 'Programming'
    },
    {
      name: 'JavaScript',
      icon: '/images/javascript-logo.webp',
      category: 'Web Development'
    },
    {
      name: 'TypeScript',
      icon: '/images/typescript.png',
      category: 'Web Development'
    },
    {
      name: 'HTML/CSS',
      icon: '/images/html-logo.webp',
      category: 'Web Development'
    },
    {
      name: 'React',
      icon: '/images/react-logo.webp',
      category: 'Frameworks'
    },
    {
      name: 'Node.js',
      icon: '/images/node-logo.webp',
      category: 'Frameworks'
    },
    {
      name: 'Express',
      icon: '/images/express-logo.png',
      category: 'Frameworks'
    },
    {
      name: 'Next.js',
      icon: '/images/nextjs-logo.png',
      category: 'Frameworks'
    },
    {
      name: 'Flask',
      icon: '/images/flask-logo.png',
      category: 'Frameworks'
    },
    {
      name: 'Tailwind CSS',
      icon: '/images/tailwind-logo.png',
      category: 'Styling'
    },
    {
      name: 'Git',
      icon: '/images/git-logo.png',
      category: 'Tools'
    },
    {
      name: 'GitHub',
      icon: '/images/github-logo.png',
      category: 'Tools'
    },
    {
      name: 'Postman',
      icon: '/images/postman-logo.png',
      category: 'Tools'
    },
    {
      name: 'MongoDB',
      icon: '/images/mongodb-logo.png',
      category: 'Databases'
    },
    {
      name: 'SQL',
      icon: '/images/sql-logo.png',
      category: 'Databases'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I have a strong foundation in various programming languages and tools, enabling me to build structured web pages, design user-friendly interfaces, and develop efficient algorithms. Feel free to checkout my github page to see the projects that I have built.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="card group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
                          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring React, Node.js, and cloud technologies to build more robust applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 