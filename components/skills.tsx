'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Next.js', level: 70 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Programming & Tools',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'TypeScript', level: 65 },
      { name: 'Node.js', level: 60 },
    ],
  },
  {
    title: 'Biotechnology & Research',
    skills: [
      { name: 'Bioinformatics', level: 70 },
      { name: 'Research Writing', level: 75 },
      { name: 'Data Analysis', level: 70 },
      { name: 'Lab Techniques', level: 80 },
    ],
  },
  {
    title: 'Creative Skills',
    skills: [
      { name: 'Photography', level: 85 },
      { name: 'Photo Editing', level: 75 },
      { name: 'UI/UX Design', level: 65 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text-blue">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse skill set spanning technology, science, and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-dark rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text-blue">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
