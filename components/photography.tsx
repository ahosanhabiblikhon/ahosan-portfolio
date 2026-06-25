'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, Instagram } from 'lucide-react'
import Image from 'next/image'

const photographyCategories = [
  {
    title: 'Nature Photography',
    description: 'Capturing the beauty of landscapes, wildlife, and natural phenomena',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
    ],
  },
  {
    title: 'Portrait Photography',
    description: 'Telling stories through expressive portraits and candid moments',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    ],
  },
  {
    title: 'Mobile Photography',
    description: 'Creative compositions and moments captured on mobile devices',
    images: [
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800',
      'https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?w=800',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    ],
  },
]

export default function Photography() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="photography" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-12 h-12 text-primary-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Photography <span className="gradient-text-blue">Portfolio</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Capturing moments and telling stories through the lens
          </p>
          <a
            href="https://instagram.com/ahosan.photo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @ahosan.photo on Instagram
          </a>
        </motion.div>

        <div className="space-y-16">
          {photographyCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + imageIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`${category.title} ${imageIndex + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://instagram.com/ahosan.photo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            <Instagram className="w-5 h-5 mr-2" />
            View Full Portfolio on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
