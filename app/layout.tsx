import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Ahosan Habib Likhon | Biotechnology Student & Web Developer',
  description: 'Biotechnology & Genetic Engineering Student at Islamic University, Bangladesh. Aspiring Web Developer, Research Enthusiast, and Photographer.',
  keywords: ['Ahosan Habib Likhon', 'Biotechnology', 'Web Developer', 'Photographer', 'Islamic University', 'Bangladesh', 'Genetic Engineering'],
  authors: [{ name: 'Ahosan Habib Likhon' }],
  openGraph: {
    title: 'Ahosan Habib Likhon | Biotechnology Student & Web Developer',
    description: 'Biotechnology & Genetic Engineering Student at Islamic University, Bangladesh. Aspiring Web Developer, Research Enthusiast, and Photographer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahosan Habib Likhon | Biotechnology Student & Web Developer',
    description: 'Biotechnology & Genetic Engineering Student at Islamic University, Bangladesh.',
  },
  metadataBase: new URL('https://ahosanhabiblikhon.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen bg-white dark:bg-gray-950">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
