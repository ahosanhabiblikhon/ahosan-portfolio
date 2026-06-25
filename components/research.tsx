'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Microscope, BookOpen, TrendingUp } from 'lucide-react'

const researchAreas = [
  {
    icon: Microscope,
    title: 'Genetic Engineering',
    description: 'Exploring gene editing techniques, CRISPR applications, and genetic modifications in various organisms.',
  },
  {
    icon: TrendingUp,
    title: 'Bioinformatics',
    description: 'Applying computational tools to analyze biological data, genomic sequences, and protein structures.',
  },
  {
    icon: BookOpen,
    title: 'Molecular Biology',
    description: 'Investigating cellular processes, DNA replication, and molecular mechanisms of life.',
  },
  {
    icon: FileText,
    title: 'Research Writing',
    description: 'Developing scientific manuscripts, research proposals, and academic publications.',
  },
]

const academicWork = [
  {
    title: 'Poster Presentation',
    event: 'International Biotechnology Symposium 2024',
    description: 'Presented research on CRISPR-Cas9 applications in crop improvement',
    status: 'Completed',
  },
  {
    title: 'Research Paper',
    event: 'Journal of Genetic Engineering',
    description: 'Computational analysis of genetic markers in local rice varieties',
    status: 'In Progress',
  },
  {
    title: 'Literature Review',
    event: 'Biotechnology Advances',
    description: 'Review of recent developments in gene therapy techniques',
    status: 'Planning',
  },
]

export default function Research() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="research" ref={ref} className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Research & <span className="gradient-text-blue">Academic Work</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the frontiers of biotechnology and genetic engineering
          </p>
        </motion.div>

        {/* Research Interests */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Research Interests
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-dark rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Contributions</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {academicWork.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-dark rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-semibold">{work.title}</h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      work.status === 'Completed'
                        ? 'bg-green-500/20 text-green-500'
                        : work.status === 'In Progress'
                        ? 'bg-blue-500/20 text-blue-500'
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}
                  >
                    {work.status}
                  </span>
                </div>
                <p className="text-primary-500 text-sm mb-2">{work.event}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {work.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interested in collaboration or have questions about my research?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
