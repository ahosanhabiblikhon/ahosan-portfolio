'use client'

import { motion } from 'framer-motion'
import { Github, Facebook, Instagram, Linkedin, Camera, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { icon: Github, href: 'https://github.com/ahosanhabiblikhon', label: 'GitHub' },
  { icon: Facebook, href: 'https://www.facebook.com/ahosan.habib.likhon.nur', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/ahosan_habib_likhon', label: 'Instagram' },
  { icon: Camera, href: 'https://instagram.com/ahosan.photo', label: 'Photography' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/md-ahosan-habib-likhon-84707a295/', label: 'LinkedIn' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300/30 dark:bg-primary-700/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-700/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text-blue">Ahosan Habib Likhon</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-medium"
          >
            Biotechnology & Genetic Engineering Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Aspiring Web Developer | Research Enthusiast | Photographer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 mb-12"
          >
            Islamic University, Bangladesh • Kushtia
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-gray-900 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
