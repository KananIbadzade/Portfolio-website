import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: -1,
      title: 'Software Engineer Intern',
      company: 'Zoox',
      companyUrl: 'https://zoox.com/',
      location: 'Foster City, CA',
      period: 'Jan 2026 – Present',
      description: 'Working on the System Design and Mission Assurance (SDMA) team for Spring 2026 term',
      topSkills: [],
      type: 'Internship',
      logoImg: 'https://media.licdn.com/dms/image/v2/C560BAQF2yqp_9BrVew/company-logo_200_200/company-logo_200_200/0/1654722579133/zoox_inc_logo?e=1768435200&v=beta&t=qFrhxJuRvJMhmuLl665nGHFSb2sn4MmoNjYXHdELbzk',
      logo: '🚗'
    },
    {
      id: 0,
      title: 'Machine Learning Intern',
      company: 'Solakair',
      companyUrl: 'https://www.linkedin.com/company/solakair/',
      location: 'Remote',
      period: 'Aug 2025 – Dec 2025',
      description: 'Worked on real-time drone detection for counter-UAS systems, prototyping and optimizing computer vision models for embedded deployment and performance tradeoffs.',
      topSkills: ['YOLO', 'TensorFlow', 'PyTorch', 'Python', 'Computer Vision'],
      type: 'Internship',
      logoImg: 'https://media.licdn.com/dms/image/v2/D560BAQFM3HGYEd54Qw/company-logo_200_200/B56ZU3AzYAHsAI-/0/1740384712418?e=1769040000&v=beta&t=ei1Er3sBLC_IuZDivofQXXiruwJ7aLgd9ewZb2-F9fo',
      logo: '🧠'
    },
    {
      id: 0.5,
      title: 'Officer',
      company: 'AI and Machine Learning at SJSU',
      companyUrl: 'https://www.ai-ml-club-sjsu.com/',
      location: 'San José, CA',
      period: 'Aug 2025 – Present',
      description: 'Led the rebuild of the club website, collaborating with a cross-functional team to ship new features and improve platform reliability and authentication.',
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
      description: 'Automated RF test configurations in Python, supporting Wi-Fi, Bluetooth, and 5G certification workflows.',
      topSkills: ['Python', 'RF Testing', 'Wi-Fi', 'Bluetooth', '5G'],
      type: 'Internship',
      logoImg: 'https://media.licdn.com/dms/image/v2/C560BAQF6aPtfKvMrgQ/company-logo_200_200/company-logo_200_200/0/1656335537218/ul__logo?e=1769040000&v=beta&t=WQuFPzz3TBwY3g-ZtaZox0SxhZJMWBcqc9MlBFcLTEE',
      logo: '🔬'
    },
    {
      id: 2,
      title: 'Teaching Assistant',
      company: 'De Anza College',
      companyUrl: 'https://www.linkedin.com/school/de-anza-college/',
      location: 'Cupertino, CA',
      period: 'Mar 2024 – Jul 2024',
      description: 'Supported C++ programming labs by helping students with data structures, algorithms, and debugging through hands-on mentoring.',
      topSkills: ['C++', 'Data Structures', 'Algorithms', 'OOP'],
      type: 'Part-time',
      logoImg: 'https://media.licdn.com/dms/image/v2/C510BAQFOIoUaCdyM7Q/company-logo_200_200/company-logo_200_200/0/1631379563643?e=1769040000&v=beta&t=ewQQKecBW3nELnxkDAeQMIcBeonn3fryb_dEpS90cm4',
      logo: '🎓'
    },
    {
      id: 3,
      title: 'Computer Technician Support',
      company: 'De Anza College',
      companyUrl: 'https://www.linkedin.com/school/de-anza-college/',
      location: 'Cupertino, CA',
      period: 'Oct 2023 – Mar 2024',
      description: 'Maintained computer lab systems and provided hands-on hardware and software troubleshooting for students and faculty.',
      topSkills: ['Hardware Support', 'System Maintenance', 'Troubleshooting'],
      type: 'Part-time',
      logoImg: 'https://media.licdn.com/dms/image/v2/C510BAQFOIoUaCdyM7Q/company-logo_200_200/company-logo_200_200/0/1631379563643?e=1769040000&v=beta&t=ewQQKecBW3nELnxkDAeQMIcBeonn3fryb_dEpS90cm4',
      logo: '💻'
    }
  ]

  // Sort experiences by date (latest first) to ensure correct order
  const sortedExperiences = [
    experiences[0], // Jan 2026 - Present (Zoox)
    experiences[2], // Aug 2025 - Present (AI/ML Club)
    experiences[1], // Aug 2025 - Dec 2025 (Solakair)
    experiences[3], // May 2025 - Aug 2025 (UL Solutions)
    experiences[4], // Mar 2024 - Jul 2024 (Teaching Assistant)
    experiences[5]  // Oct 2023 - Mar 2024 (Computer Technician)
  ];

  return (
    <section id="experience" className="py-16 lg:py-24 bg-gray-100/50 dark:bg-gray-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Experience
          </h2>

        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {sortedExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Spacer for Desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-900 border-2 border-primary-500 z-10 shadow-lg shadow-primary-500/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-500 animate-pulse" />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                >
                  <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
                    {/* Arrow for Desktop */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700 transform rotate-45 transition-colors duration-300 group-hover:border-primary-500/50 ${index % 2 === 0
                      ? '-right-1.5 border-r border-b border-t-0 border-l-0' // Arrow on right for left item
                      : '-left-1.5' // Arrow on left for right item
                      }`} />

                    <div className="flex items-start gap-4">
                      {(experience.logoImg || experience.logo) && (
                        <div className="w-12 h-12 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {experience.logoImg ? (
                            <img src={experience.logoImg} alt={`${experience.company} logo`} loading="lazy" className="w-full h-full object-contain" />
                          ) : (
                            <span className="text-xl">{experience.logo}</span>
                          )}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-1 mb-2">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {experience.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1.5">
                              <Building className="w-3.5 h-3.5 text-primary-500" />
                              {experience.companyUrl ? (
                                <a
                                  href={experience.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                                >
                                  {experience.company}
                                </a>
                              ) : (
                                <span className="font-medium">{experience.company}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-primary-500" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800">
                            <Calendar className="w-3 h-3" />
                            {experience.period}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                            {experience.type}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {experience.topSkills.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium border border-gray-100 dark:border-gray-600 group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
