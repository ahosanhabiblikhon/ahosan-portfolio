'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/ahosanhabiblikhon/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching repos:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text-blue">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work and open-source contributions
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-dark rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                      {repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {repo.language && (
                    <span className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-primary-500 mr-2" />
                      {repo.language}
                    </span>
                  )}
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ahosanhabiblikhon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-900 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
