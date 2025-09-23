import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 0,
      title: 'Machine Learning Intern',
      company: 'Solakair',
      location: 'Hybrid',
      period: 'August 2025 – Present',
      description: 'Building and prototyping drone detection models (PicoDet, YOLO, TensorFlow, PyTorch) and benchmarking them on real-world video. Evaluating CPU vs GPU tradeoffs via CUDA C++ and Python to inform deployment.',
      technologies: ['YOLO', 'TensorFlow', 'PyTorch', 'CUDA', 'C++', 'Python', 'Computer Vision', 'Object Detection'],
      type: 'Part-time',
      logoImg: '/images/solakair.png',
      logo: '🧠'
    },
    {
      id: 0.5,
      title: 'Officer',
      company: 'AI and Machine Learning  at SJSU',
      location: 'San José, CA',
      period: 'August 2025 – Present',
      description: 'Led the rebuild of our club’s website and shipped new features with a cross-functional web team, driving member sign-ups to 250+ active participants while improving platform reliability by ~25% through Jira workflows and stronger authentication. Built with Next.js, React, and TypeScript, I collaborated with contributors to deliver a scalable and reliable platform for the club.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Jira', 'Git', 'Authentication', 'Web Development', 'Project Management'],
      type: 'Part-time',
      logoImg: 'https://media.licdn.com/dms/image/v2/D4E03AQHIW7MTr3FLAQ/profile-displayphoto-crop_800_800/B4EZj3zZIMGoAI-/0/1756504101692?e=1761177600&v=beta&t=ILNoWtHGmYvSKiTd11OCS4UYKYO68n5ESqeSuAJK5fk',
      logo: '🌐'
    },
    {
      id: 1,
      title: 'Wireless Test Engineer Intern',
      company: 'UL Solutions',
      location: 'Fremont, CA',
      period: 'May 2025 – August 2025',
      description: 'Automated RF test configurations in Python, reducing manual setup time by 40% and increasing throughput across Wi-Fi, Bluetooth, and 5G certification workflows. Delivered detailed analyses of RF performance data, improving compliance reporting and strengthening client trust in wireless certification results.',
      technologies: ['Python', 'RF Testing', 'Wi-Fi', 'Bluetooth', '5G', 'Excel', 'Websockets'],
      type: 'Full-time',
      logoImg: '/images/ul.png',
      logo: '🔬'
    },
    {
      id: 2,
      title: 'Teaching Assistant',
      company: 'De Anza College',
      location: 'Cupertino, CA',
      period: 'April 2024 – July 2024',
      description: 'Instructed 50+ students in C++ programming, leading labs and developing hands-on coding challenges. Provided one-on-one mentoring and debugging sessions to strengthen technical communication skills.',
      technologies: ['C++', 'Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Teaching'],
      type: 'Part-time',
      logoImg: '/images/deanza.png',
      logo: '🎓'
    },
    {
      id: 3,
      title: 'Computer Technician Support',
      company: 'De Anza College',
      location: 'Cupertino, CA',
      period: 'Sep. 2023 – Jan. 2024',
      description: 'Maintained 20+ lab systems and resolved technical issues, reducing downtime by 35%. Provided responsive technical support for students and faculty during peak hours.',
      technologies: ['Hardware Support', 'Software Installation', 'System Maintenance', 'Technical Troubleshooting'],
      type: 'Part-time',
      logoImg: '/images/deanza.png',
      logo: '💻'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-transparent dark:bg-gray-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-8 md:mt-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {(experience.logoImg || experience.logo) && (
                          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-600">
                            {experience.logoImg ? (
                              <img src={experience.logoImg} alt={`${experience.company} logo`} className="w-full h-full object-contain" />
                            ) : (
                              <span className="text-2xl">{experience.logo}</span>
                            )}
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span>{experience.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                        {experience.type}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
