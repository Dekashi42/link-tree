# Link Tree — React + Tailwind (Scaffold)

This workspace contains a minimal Vite + React + Tailwind scaffold for a small link-tree / contact card UI with:
- Dark/light toggle (persisted to `localStorage`)
- Animated pulsing "online" dot on the profile avatar
- Inline SVG icons for WhatsApp / Telegram / Group
- Accessible buttons, keyboard focus rings and hover animations
- Responsive layout with a clean UX

Files included (paste-ready):

- `package.json`:
```json
{
  "name": "link-tree",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.4.7",
    "vite": "^5.0.0"
  }
}
```

- `index.html` (Vite entry):
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Minimal accessible link tree built with React + Tailwind" />
    <title>Link Tree</title>
    <script>
      try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') document.documentElement.classList.add('dark');
      } catch (e) {}
    </script>
  </head>
  <body class="bg-gray-50 dark:bg-gray-900">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- `src/main.jsx`:
```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- `src/App.jsx` (the main component):
```jsx
// full component present in this repo: dark toggle, online dot, icons, accessible buttons
```

- `src/index.css` (Tailwind + small custom rules) and `tailwind.config.cjs`, `postcss.config.cjs` are included.

Quick local run
```bash
# install deps
npm install

# run dev server
npm run dev
```

Git + GitHub

1. Initialize Git, create a repo and push (replace placeholders):
```bash
git init
git add .
git commit -m "Initial link-tree scaffold"
git branch -M main
gh repo create YOUR_GITHUB_USERNAME/link-tree --public --source=. --remote=origin --push
# or, if you prefer git remote:
# git remote add origin https://github.com/YOUR_GITHUB_USERNAME/link-tree.git
# git push -u origin main
```

Vercel deployment

Via Vercel Dashboard:
- Go to https://vercel.com and log in.
- Click "New Project" → Import Git Repository → choose the repo you pushed.
- For frameworks, Vercel detects Vite/React automatically. Build command: `vite build` (or leave blank). Output directory: `dist`.
- Deploy.

Via Vercel CLI (on your machine):
```bash
# install CLI if needed
npm i -g vercel

# login (opens browser)
vercel login

# from project root
vercel

# for production deploy
vercel --prod
```

Notes & Improvements
- The scaffold is small and intentionally simple for quick deploys. Consider these improvements:
  - Add a real avatar image (public folder) and alt text.
  - Add analytics or link click tracking (serverless function or simple redirect endpoints).
  - Add share/preview meta tags (Open Graph) for better link previews.
  - Add tests and a CI workflow (GitHub Actions) if you plan frequent updates.

If you'd like, I can:
- Commit these files and create a branch for you (I cannot push to your GitHub account without credentials).
- Add a simple GitHub Action to auto-deploy on push to `main`.

---

**Ready to push & deploy (exact commands)**

Follow these exact commands locally to prepare the repo, push to GitHub, and deploy with the Vercel CLI. Do not run anything that requires my credentials — these are commands for you to run locally.

1) Initialize git (if you haven't already) and create the first commit:

```pwsh
Set-Location -LiteralPath 'C:\Users\user\Documents\crm-docs\link tree'
git init
git add .
git commit -m "Prepare link-tree: 4 links, styles, favicon"
git branch -M main
```

2) Push to GitHub (choose one):

# Using GitHub CLI (recommended):
```pwsh
gh repo create YOUR_GITHUB_USERNAME/link-tree --public --source=. --remote=origin --push
```

# Or manually add remote and push (HTTPS):
```pwsh
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/link-tree.git
git push -u origin main
```

3) Deploy with Vercel CLI (your account):

```pwsh
npm i -g vercel
vercel login
vercel          # interactive first deploy
vercel --prod   # production deploy
```

Notes:
- `.gitignore` is included to exclude `node_modules`, `dist`, and local files.
- If you want CI, I can add a GitHub Actions workflow that runs `npm ci` and `npm run build` on push.

