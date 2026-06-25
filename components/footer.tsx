'use client'

import { Github, Facebook, Instagram, Linkedin, Camera, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/ahosanhabiblikhon', label: 'GitHub' },
  { icon: Facebook, href: 'https://www.facebook.com/ahosan.habib.likhon.nur', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/ahosan_habib_likhon', label: 'Instagram' },
  { icon: Camera, href: 'https://instagram.com/ahosan.photo', label: 'Photography' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/md-ahosan-habib-likhon-84707a295/', label: 'LinkedIn' },
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Photography', href: '#photography' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text-blue mb-4">
              Ahosan Habib Likhon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Biotechnology Student • Web Developer • Photographer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Islamic University, Bangladesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Ahosan Habib Likhon. All rights reserved.
            </p>
            <p className="flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
