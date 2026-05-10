# Wasiq Ali — Portfolio Website

Modern, responsive portfolio built with **React + Vite + Tailwind CSS**.

## 📁 File Structure

```
wasiq-portfolio/
├── index.html                  ← Entry HTML (Tailwind CDN included)
├── vite.config.js              ← Vite config
├── package.json
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Main app (assembles all sections)
    └── components/
        ├── Navbar.jsx          ← Nav with mobile drawer + ✅ close button
        ├── Hero.jsx            ← Hero section with orb + stats
        ├── About.jsx           ← About me section
        ├── Skills.jsx          ← Skill bars (animated)
        ├── Projects.jsx        ← Project cards grid
        ├── Contact.jsx         ← Contact form + info
        └── Footer.jsx          ← Footer
```

## 🚀 How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

## ✏️ What to Customize

| What | Where |
|------|-------|
| Your name, title | `Hero.jsx` |
| About me text | `About.jsx` |
| Skill levels | `Skills.jsx` → `SKILLS` array |
| Projects | `Projects.jsx` → `PROJECTS` array |
| Email, LinkedIn, GitHub | `Contact.jsx` → `contactItems` |
| CV download link | `Hero.jsx` → `href="#"` on Download CV button |
| Real project live links | `Projects.jsx` → `live:` field |
