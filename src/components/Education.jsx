import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'

const Education = () => {
  const courses = [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Systems',
    'Computer Networks',
    'Software Engineering',
    'Web Application Development',
    'Distributed Systems',
    'Machine Learning',
    'Object-Oriented Programming',
    'System Design'
  ]

  return (
    <section id="education" className="py-20 bg-transparent dark:bg-gray-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        {/* Single compact card with timeline + courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          

          {/* Timeline */}
          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" aria-hidden="true"></div>

            {/* SJSU */}
            <div className="relative pb-6">
              <div className="absolute -left-4 md:-left-6 -translate-x-1/2 top-1.5 h-2.5 w-2.5 rounded-full bg-primary-600 border-2 border-white dark:border-gray-800" aria-hidden="true"></div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">San José State University</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary-600/10 text-primary-700 dark:text-primary-300 border border-primary-600/20">Current</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">B.S. in Software Engineering</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 dark:text-gray-300">
                  <span className="inline-flex items-center gap-1"><Calendar size={14} className="text-primary-600" /> Started August 2024</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={14} className="text-primary-600" /> San José, CA</span>
                </div>
              </div>
            </div>

            {/* De Anza */}
            <div className="relative">
              <div className="absolute -left-4 md:-left-6 -translate-x-1/2 top-1.5 h-2.5 w-2.5 rounded-full bg-gray-400 dark:bg-gray-500 border-2 border-white dark:border-gray-800" aria-hidden="true"></div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">De Anza College</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600">Graduated 2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Computer Science - Transferred to SJSU</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 dark:text-gray-300">
                  <span className="inline-flex items-center gap-1"><MapPin size={14} className="text-primary-600" /> Cupertino, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Relevant Courses (kept inside the same card) */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="text-primary-600" size={18} />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide">Relevant Courses</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-full text-xs bg-white dark:bg-gray-900/60 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education


