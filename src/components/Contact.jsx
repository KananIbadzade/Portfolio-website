import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Send, Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [messageLength, setMessageLength] = useState(0)
  const MAX_MESSAGE_LENGTH = 500
  const MAX_FIELD_LENGTH = 50

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create form data for FormSubmit
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('subject', data.subject)
      formData.append('message', data.message)
      formData.append('_honey', '') // Honeypot field
      formData.append('_captcha', 'false') // Disable captcha
      formData.append('_next', window.location.origin + '/success.html')

      // Submit to FormSubmit - using your email directly
      // Note: You may need to activate FormSubmit by submitting this form once manually
      // Visit https://formsubmit.co/kananibadzade@gmail.com to activate
      const response = await fetch('https://formsubmit.co/kananibadzade@gmail.com', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        // Fallback: Try alternative FormSubmit endpoint
        const fallbackResponse = await fetch('https://formsubmit.co/ajax/kananibadzade@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            _honey: '',
            _captcha: false,
            _next: window.location.origin + '/success.html'
          })
        })

        if (fallbackResponse.ok) {
          setSubmitStatus('success')
          reset()
        } else {
          throw new Error('Form submission failed')
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kananibadzade@gmail.com',
      href: 'mailto:kananibadzade@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Jose, California',
      href: 'https://maps.google.com/?q=San+Jose,+California'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '669-350-8530',
      href: 'tel:+16693508530'
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-transparent dark:bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for collaboration, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <info.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    maxLength={MAX_FIELD_LENGTH}
                    {...register('name', { 
                      required: 'Name is required',
                      maxLength: {
                        value: MAX_FIELD_LENGTH,
                        message: `Name must be ${MAX_FIELD_LENGTH} characters or less`
                      }
                    })}
                    className={`input-field dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    maxLength={MAX_FIELD_LENGTH}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      },
                      maxLength: {
                        value: MAX_FIELD_LENGTH,
                        message: `Email must be ${MAX_FIELD_LENGTH} characters or less`
                      }
                    })}
                    className={`input-field dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  maxLength={MAX_FIELD_LENGTH}
                  {...register('subject', { 
                    required: 'Subject is required',
                    maxLength: {
                      value: MAX_FIELD_LENGTH,
                      message: `Subject must be ${MAX_FIELD_LENGTH} characters or less`
                    }
                  })}
                  className={`input-field dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message * ({messageLength}/{MAX_MESSAGE_LENGTH} characters)
                </label>
                <textarea
                  id="message"
                  rows={6}
                  maxLength={MAX_MESSAGE_LENGTH}
                  {...register('message', { 
                    required: 'Message is required',
                    maxLength: {
                      value: MAX_MESSAGE_LENGTH,
                      message: `Message must be ${MAX_MESSAGE_LENGTH} characters or less`
                    }
                  })}
                  className={`input-field dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.message ? 'border-red-500' : ''} ${messageLength > MAX_MESSAGE_LENGTH ? 'border-red-500' : ''}`}
                  placeholder="Tell me more about your project or inquiry..."
                  onChange={(e) => {
                    const value = e.target.value
                    if (value.length <= MAX_MESSAGE_LENGTH) {
                      setMessageLength(value.length)
                    }
                  }}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message && (
                    <p className="text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                  <p className={`text-sm ml-auto ${messageLength > MAX_MESSAGE_LENGTH ? 'text-red-600 dark:text-red-400' : messageLength > MAX_MESSAGE_LENGTH * 0.8 ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-400'}`}>
                    {messageLength > MAX_MESSAGE_LENGTH ? 'Character limit exceeded' : `${MAX_MESSAGE_LENGTH - messageLength} characters remaining`}
                  </p>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <p className="text-green-800 dark:text-green-400">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <p className="text-red-800 dark:text-red-400">Sorry, there was an error sending your message. Please try again.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 