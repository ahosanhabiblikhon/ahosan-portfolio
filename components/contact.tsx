'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Mail,
  MapPin,
  Send,
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Camera,
} from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'ahosanhabiblikhon@example.com',
    link: 'mailto:ahosanhabiblikhon@example.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Kushtia, Bangladesh',
    link: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/ahosanhabiblikhon',
    label: 'GitHub',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/ahosan.habib.likhon.nur',
    label: 'Facebook',
    color: 'hover:text-blue-600',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/ahosan_habib_likhon',
    label: 'Instagram',
    color: 'hover:text-pink-600',
  },
  {
    icon: Camera,
    href: 'https://instagram.com/ahosan.photo',
    label: 'Photography',
    color: 'hover:text-purple-600',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/md-ahosan-habib-likhon-84707a295/',
    label: 'LinkedIn',
    color: 'hover:text-blue-700',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="gradient-text-blue">Touch</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>
               <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-500" />
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">
                        {info.title}
                      </h4>

                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-gray-100 dark:bg-gray-900 transition-all hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">
                Let&apos;s Create Together
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Whether you&apos;re interested in collaborating on a web
                development project, discussing biotechnology research,
                or exploring photography opportunities, I&apos;d love
                to hear from you. Let&apos;s connect and create
                something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-dark rounded-2xl p-8 space-y-6"
            > 
                            <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="What&apos;s this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent! ✓'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
