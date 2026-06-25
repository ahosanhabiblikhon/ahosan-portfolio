'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Code, FlaskConical, Camera } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Studying Biotechnology & Genetic Engineering at Islamic University, Bangladesh',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building modern web applications with React, Next.js, and TypeScript',
  },
  {
    icon: FlaskConical,
    title: 'Research Passion',
    description: 'Passionate about bioinformatics, genetics research, and scientific writing',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capturing nature, portraits, and moments through mobile photography',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text-blue">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A curious mind at the intersection of biology and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text-blue">My Journey</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Hello! I'm Ahosan Habib Likhon, a passionate Biotechnology and Genetic Engineering student at Islamic University in Kushtia, Bangladesh. My journey is driven by an insatiable curiosity about the intricate mechanisms of life and the power of technology to unlock its secrets.
                </p>
                <p>
                  While my academic foundation lies in the biological sciences, I've discovered a parallel passion for web development. I believe that the intersection of biotechnology and technology holds immense potential for innovation, and I'm excited to contribute to this emerging field.
                </p>
                <p>
                  Beyond the lab and the screen, I find joy in capturing the world through my camera lens. Photography allows me to observe nature's beauty with the same attention to detail I apply to my scientific pursuits, creating a perfect balance in my creative and analytical life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-dark rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years of Study</div>
              </div>
              <div className="glass-dark rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-dark rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
