import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 0,
      title: 'Machine Learning Intern',
      company: 'Solakair',
      companyUrl: 'https://www.linkedin.com/company/solakair/',
      location: 'Remote',
      period: 'Aug 2025 – Dec 2025',
      description: 'Worked on real-time drone detection for counter-UAS systems, prototyping and optimizing computer vision models for embedded deployment. My work improved inference speed and informed hardware decisions through CPU vs GPU performance analysis.',
      topSkills: ['YOLO', 'TensorFlow', 'PyTorch', 'Python', 'Computer Vision'],
      type: 'Part-time',
      logoImg: '/images/solakair.png',
      logo: '🧠'
    },
    {
      id: 0.5,
      title: 'Officer',
      company: 'AI and Machine Learning at SJSU',
      companyUrl: 'https://www.ai-ml-club-sjsu.com/',
      location: 'San José, CA',
      period: 'Aug 2025 – Present',
      description: 'Led website rebuild and shipped new features with cross-functional team, improving platform reliability by ~25% through Jira workflows and authentication.',
      topSkills: ['Next.js', 'React', 'TypeScript', 'Jira', 'Git'],
      type: 'Part-time',
      logoImg: 'https://media.licdn.com/dms/image/v2/D560BAQFvcN3hTfb-Nw/company-logo_200_200/B56Zk0j4fEIAAI-/0/1757523446029/ai_machine_learning_club_sjsu_logo?e=1767830400&v=beta&t=9ePwlJqUENyYsRgNOdia018jY3JlVq2FR6DEGo4cDKs',
      logo: '🌐'
    },
    {
      id: 1,
      title: 'Wireless Test Engineer Intern',
      company: 'UL Solutions',
      companyUrl: 'https://www.linkedin.com/company/ulsolutions/',
      location: 'Fremont, CA',
      period: 'May 2025 – Aug 2025',
      description: 'Automated RF test configurations in Python, reducing manual setup time by 40% and increasing throughput across Wi-Fi, Bluetooth, and 5G certification workflows.',
      topSkills: ['Python', 'RF Testing', 'Wi-Fi', 'Bluetooth', '5G'],
      type: 'Full-time',
      logoImg: '/images/ul.png',
      logo: '🔬'
    },
    {
      id: 2,
      title: 'Teaching Assistant',
      company: 'De Anza College',
      companyUrl: 'https://www.linkedin.com/school/de-anza-college/',
      location: 'Cupertino, CA',
      period: 'Mar 2023 – Jul 2024',
      description: 'Instructed 50+ students in C++ programming, leading labs and developing hands-on coding challenges. Provided one-on-one mentoring and debugging sessions.',
      topSkills: ['C++', 'Data Structures', 'Algorithms', 'OOP'],
      type: 'Part-time',
      logoImg: '/images/deanza.png',
      logo: '🎓'
    },
    {
      id: 3,
      title: 'Computer Technician Support',
      company: 'De Anza College',
      companyUrl: 'https://www.linkedin.com/school/de-anza-college/',
      location: 'Cupertino, CA',
      period: 'Oct 2023 – Mar 2024',
      description: 'Maintained 20+ lab systems and resolved technical issues, reducing downtime by 35%. Provided responsive technical support for students and faculty.',
      topSkills: ['Hardware Support', 'System Maintenance', 'Troubleshooting'],
      type: 'Part-time',
      logoImg: '/images/deanza.png',
      logo: '💻'
    }
  ]

  return (
    <section id="experience" className="py-16 lg:py-24 bg-gray-100/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            My professional journey
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {(experience.logoImg || experience.logo) && (
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-600 flex-shrink-0">
                    {experience.logoImg ? (
                      <img src={experience.logoImg} alt={`${experience.company} logo`} loading="lazy" className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-xl">{experience.logo}</span>
                    )}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {experience.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <div className="flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" />
                          {experience.companyUrl ? (
                            <a 
                              href={experience.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline decoration-dotted underline-offset-2"
                            >
                              <span>{experience.company}</span>
                            </a>
                          ) : (
                            <span>{experience.company}</span>
                          )}
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{experience.location}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-md whitespace-nowrap">
                      {experience.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.topSkills.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
