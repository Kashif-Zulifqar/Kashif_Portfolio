# Kashif Zulifqar - Portfolio Website

Modern, responsive portfolio website built with React, Vite, and Pure CSS.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.3.9-yellow) ![CSS3](https://img.shields.io/badge/CSS3-Pure-green)

## ✨ Features

- 🎨 Dark/Light mode toggle
- 📱 Fully responsive design
- 🚀 Fast performance with Vite
- 🔄 Auto-fetches GitHub repositories
- 🖼️ Image upload functionality
- 💼 Professional sections: About, Skills, Projects, Experience, Contact
- 🎯 Smooth scrolling navigation
- ⚡ Pure CSS (No framework dependencies)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))

### Installation

1. **Clone or download** the project

2. **Install dependencies:**

```bash
npm install
```

3. **Add your images:**

   - Place `logo.png` in `public/` folder (200x200px)
   - Place `profile.jpg` in `public/` folder (400x400px)

4. **Start development server:**

```bash
npm run dev
```

5. **Open browser:** `http://localhost:5173`

## 📂 Project Structure

```
kashif-portfolio/
├── public/
│   ├── logo.png              # Your logo
│   └── profile.jpg           # Your photo
├── src/
│   ├── App.jsx               # Main React component
│   ├── App.css               # All styling
│   ├── main.jsx              # React entry point
│   └── index.css             # Base styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite config
└── README.md                 # Documentation
```

## 🎨 Customization

### Change Colors

Edit CSS variables in `src/App.css`:

```css
:root {
  --blue: #3b82f6; /* Primary */
  --purple: #9333ea; /* Secondary */
  --pink: #ec4899; /* Accent */
}
```

### Update Content

Modify `src/App.jsx`:

- Personal information
- Skills arrays
- Experience details
- Featured projects

### GitHub Integration

The portfolio auto-fetches your repos. Update the username on line 18:

```javascript
fetch("https://api.github.com/users/YOUR-USERNAME/repos...");
```

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📤 Deployment

### Option 1: GitHub Pages

```bash
# Install gh-pages
npm install gh-pages --save-dev

# Add to package.json scripts
"deploy": "vite build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Option 2: Netlify

1. Run `npm run build`
2. Drag `dist` folder to [Netlify](https://app.netlify.com/)

### Option 3: Vercel

```bash
npm install -g vercel
vercel
```

## 🖼️ Image Requirements

| Image   | Size       | Format  | Notes                  |
| ------- | ---------- | ------- | ---------------------- |
| Logo    | 200x200px  | PNG     | Transparent background |
| Profile | 400x400px+ | JPG/PNG | Professional headshot  |

## 🛠️ Technologies Used

- **React 18.2** - UI library
- **Vite 4.3** - Build tool
- **Lucide React** - Icon library
- **Pure CSS** - Custom styling (no framework)
- **GitHub API** - Project fetching

## 🌟 Features Breakdown

### Navigation

- Fixed navbar with smooth scroll
- Active section highlighting
- Mobile hamburger menu
- Dark/Light mode toggle

### Sections

1. **Hero** - Name, title, social links
2. **About** - Professional bio
3. **Skills** - Tech stack organized by category
4. **Projects** - GitHub repos with filters
5. **Experience** - Work history
6. **Contact** - Email and LinkedIn

### Image Upload

Click buttons in bottom-right corner to upload:

- Profile picture (updates hero section)
- Logo (updates navbar)

## 🐛 Troubleshooting

**Port 5173 in use:**

```bash
npx kill-port 5173
npm run dev
```

**Install fails:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Images not loading:**

- Verify files are in `public/` folder
- Check exact filenames: `logo.png`, `profile.jpg`
- Try image upload feature

**Styles not updating:**

- Clear browser cache (Ctrl+Shift+R)
- Check `App.css` is imported in `App.jsx`

## 📧 Contact

- **Email:** bhuttokashifali957@gmail.com
- **LinkedIn:** [kashif-zulifqar-1856aa2b2](https://www.linkedin.com/in/kashif-zulifqar-1856aa2b2)
- **GitHub:** [Kashif-Zulifqar](https://github.com/Kashif-Zulifqar)

## 📄 License

Open source - free for personal use.

---

**Built with ❤️ using React, Vite, and Pure CSS**

Made by Kashif Zulifqar © 2025
