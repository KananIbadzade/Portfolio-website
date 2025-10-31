import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/KananIbadzade',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/kanan-ibadzade/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:kananibadzade@gmail.com',
      color: 'hover:text-red-600'
    }
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-0 pb-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-gray-200 dark:border-gray-800 mt-0 pt-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left: Bio */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kanan Ibadzade</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Software Engineering SJSU'27</p>
            </div>
            {/* Right: Social + Credits */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-600 dark:text-gray-400 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                Made with <Heart className="mx-1 text-red-500" size={16} /> using React & Tailwind CSS
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {currentYear} Kanan Ibadzade. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 