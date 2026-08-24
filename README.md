# Faizan — Portfolio

Single-page portfolio built with React, Vite, Tailwind CSS, Framer Motion
and lucide-react. Dark/light mode, animated typing hero, filterable
projects, animated skill bars, timeline, contact form, and a floating AI
assistant preview widget.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js        ← all your personal details live here
    ├── hooks/
    │   ├── useTheme.js
    │   └── useTypingEffect.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        ├── AIAssistantWidget.jsx
        ├── Footer.jsx
        ├── ScrollToTop.jsx
        └── ui/
            ├── GlassCard.jsx
            ├── SectionEyebrow.jsx
            └── SkillBar.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Edit your content

Everything personal — name, roles, stats, skills, projects, timeline,
contact links — lives in **`src/data/content.js`**. Edit that one file to
update the whole site; you never need to touch the components.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ahmedfaizan931star-dev/YOUR-REPO-NAME.git
git push -u origin main
```

## Deploy on Vercel

1. Go to vercel.com → **Add New Project** → import your GitHub repo.
2. Vercel auto-detects Vite (the included `vercel.json` locks in the
   build command `npm run build` and output dir `dist`, so no manual
   config needed).
3. Click **Deploy**. Done — you'll get a live URL in under a minute.

Every future `git push` to `main` auto-redeploys.

## Deploy on GitHub Pages (via GitHub Actions)

This repo includes `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages automatically on every push to `main`. No
language/runtime needs to be "supported" on your side — the workflow
runs entirely on GitHub's servers.

**One-time setup, after pushing this repo to GitHub:**

1. On GitHub, go to your repo → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**
   (not "Deploy from a branch").
3. Push to `main` (or go to the **Actions** tab and run the
   "Deploy to GitHub Pages" workflow manually).
4. After it finishes, your site is live at:
   `https://<your-github-username>.github.io/code-with-faizan/`

**Important — repo name must match exactly.** `vite.config.js` has
`base: "/code-with-faizan/"` set for this URL structure. If you name
your GitHub repo anything other than `code-with-faizan`, update that
line in `vite.config.js` to match (case-sensitive), or the CSS/JS
assets will 404 on the live site.

You can deploy to **both** Vercel and GitHub Pages from the same
repo at once — they don't conflict.
