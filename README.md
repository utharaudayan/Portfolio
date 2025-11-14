# MERN Stack Developer Portfolio

A modern, responsive portfolio website built with React, featuring 3D animations and a professional design perfect for showcasing your skills as a MERN stack developer.

## Features

- 🎨 **Modern UI/UX** - Beautiful gradient designs and smooth animations
- 🎭 **3D Animations** - Interactive 3D sphere using React Three Fiber
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal performance
- 🎯 **Job-Ready** - Professional sections for showcasing your work

## Sections

1. **Hero Section** - Eye-catching introduction with 3D animated background
2. **About** - Personal information and expertise areas
3. **Skills** - Interactive skill bars showcasing MERN stack and technologies
4. **Projects** - Portfolio of your best work with links
5. **Contact** - Contact form and social media links

## Technologies Used

- React 18
- Vite
- React Three Fiber (3D animations)
- Three.js
- Framer Motion (animations)
- Tailwind CSS
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update social media links (GitHub, LinkedIn, Email)
   - Modify the introduction text

2. **About Section** (`src/components/About.jsx`):
   - Edit the about text to match your experience
   - Update feature descriptions

3. **Skills Section** (`src/components/Skills.jsx`):
   - Adjust skill levels (percentage)
   - Add or remove technologies
   - Modify skill categories

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your actual projects
   - Update project images, descriptions, and links
   - Add or remove projects

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information (email, phone)
   - Modify social media links
   - Connect the contact form to a backend service

### Styling

The project uses Tailwind CSS. You can customize colors in `tailwind.config.js`:
- Primary color: `indigo-500`
- Secondary color: `purple-500`

### 3D Animation

The 3D sphere in the Hero section can be customized in `src/components/Hero.jsx`:
- Adjust `distort` and `speed` properties for different effects
- Change colors in the `MeshDistortMaterial` component

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy: `npm run deploy`

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Note**: Remember to update all placeholder links, images, and personal information before deploying your portfolio!




