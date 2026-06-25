# Ahosan Habib Likhon - Portfolio Website

A modern, premium portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my work as a Biotechnology & Genetic Engineering student, aspiring web developer, research enthusiast, and photographer.

## 🌟 Features

- **Modern Design**: Premium glassmorphism UI with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Fast loading with optimized images and code splitting
- **Interactive**: Smooth animations using Framer Motion
- **Dynamic Projects**: GitHub API integration to showcase latest repositories
- **Photography Gallery**: Masonry layout with beautiful hover effects

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ahosanhabiblikhon/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ahosan-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── skills.tsx          # Skills section
│   ├── projects.tsx        # Projects with GitHub API
│   ├── research.tsx        # Research & academic work
│   ├── photography.tsx     # Photography portfolio
│   ├── contact.tsx         # Contact form
│   ├── navigation.tsx      # Navigation bar
│   ├── footer.tsx          # Footer
│   └── theme-provider.tsx  # Theme context provider
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/hero.tsx`):
   - Update name, title, and location
   - Modify social media links

2. **About Section** (`components/about.tsx`):
   - Edit personal story and achievements
   - Update statistics

3. **Skills** (`components/skills.tsx`):
   - Add or remove skills
   - Adjust skill levels

4. **Research** (`components/research.tsx`):
   - Update research interests
   - Add academic contributions

5. **Photography** (`components/photography.tsx`):
   - Replace image URLs with your own

6. **Contact** (`components/contact.tsx`):
   - Update email and location
   - Modify social links

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Modify Animations

Adjust animation settings in `tailwind.config.ts` under `animation` and `keyframes`.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Configure Domain** (Optional):
   - Add custom domain in Vercel dashboard

### Alternative Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use AWS hosting services
- **GitHub Pages**: Export static site with `next export`

## 🔧 Environment Variables

No environment variables required for basic functionality. If you want to add contact form backend or analytics:

Create `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS=your_ga_id
NEXT_PUBLIC_CONTACT_API=your_api_endpoint
```

## 📱 Social Media Links

Update these in respective component files:

- GitHub: [ahosanhabiblikhon](https://github.com/ahosanhabiblikhon)
- Facebook: [ahosan.habib.likhon.nur](https://www.facebook.com/ahosan.habib.likhon.nur)
- Instagram: [ahosan_habib_likhon](https://www.instagram.com/ahosan_habib_likhon)
- Photography: [ahosan.photo](https://instagram.com/ahosan.photo)
- LinkedIn: [md-ahosan-habib-likhon](https://www.linkedin.com/in/md-ahosan-habib-likhon-84707a295/)

## 🐛 Troubleshooting

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Image Loading Issues

- Ensure image URLs are accessible
- Check `next.config.js` for allowed image domains

### Theme Not Persisting

- Clear browser cache and cookies
- Check browser localStorage permissions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ahosanhabiblikhon/portfolio/issues).

## 📧 Contact

- **Email**: ahosanhabiblikhon@example.com
- **Location**: Kushtia, Bangladesh
- **University**: Islamic University, Bangladesh

## 💖 Acknowledgments

- Design inspiration from Apple, Vercel, Linear, Stripe, Framer, Raycast, and GitHub
- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Fonts by [Google Fonts](https://fonts.google.com)

---

**Built with passion by Ahosan Habib Likhon**

🌟 If you like this portfolio, please give it a star on GitHub!
