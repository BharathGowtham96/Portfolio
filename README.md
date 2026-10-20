# Bharath Gowtham P G — Portfolio

A route-based React portfolio, converted from a single static HTML page.

**Stack:** React 19 · React Router 7 · Tailwind CSS 3 · GSAP 3 (+ ScrollTrigger, `@gsap/react`) · Vite

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

Requires Node 18+ (Node 20 recommended).

## Routes

| Path          | Page         | Contents                                   |
| ------------- | ------------ | ------------------------------------------ |
| `/`           | `Home`       | Hero, spec card, links to other sections   |
| `/experience` | `Experience` | Timeline of roles + education              |
| `/skills`     | `Skills`     | Skill groups                               |
| `/projects`   | `Projects`   | Earlier projects                           |
| `/contact`    | `Contact`    | Email, phone, LinkedIn                     |
| `*`           | `NotFound`   | 404                                        |

Secondary routes are lazy-loaded (code-split).

## Project structure

```
src/
├── main.jsx               # entry, BrowserRouter
├── App.jsx                # route table
├── index.css              # Tailwind layers + global styles
├── data/portfolio.js      # ALL content lives here — edit this to update the site
├── lib/gsap.js            # registers GSAP plugins once; import gsap from here
├── hooks/useReveal.js     # scroll-reveal for any [data-reveal] element
├── components/
│   ├── Layout.jsx         # header + page transition + footer
│   ├── Header.jsx  Footer.jsx  PageHeader.jsx  Button.jsx
│   ├── PageTransition.jsx ScrollToTop.jsx
│   ├── SpecCard.jsx  SkillRow.jsx  TimelineRole.jsx  ProjectCard.jsx
└── pages/                 # one file per route
```

## Animations (GSAP)

- **Header** slides in on load.
- **Route changes** fade/slide the page in (`PageTransition`).
- **Home hero** — timeline: eyebrow → name (word mask reveal) → intro → buttons → spec card/rows, plus a slow floating glow.
- **Scroll reveals** — `useReveal` fades up anything marked `data-reveal`, staggering items that appear together.
- **Skills** — rows slide in, then chips ripple in.
- **Experience** — the timeline spine draws as you scroll (scrubbed), dots pop in.
- Everything respects `prefers-reduced-motion` (via `gsap.matchMedia`): content is simply shown with no motion.

> **Tip:** don't put a CSS `transition` on `opacity`/`transform` of an element GSAP animates — they fight each other. The code temporarily sets `transition: none` while GSAP runs, then restores it with `clearProps`.

## Customising

- **Content:** edit `src/data/portfolio.js`.
- **Colors / fonts:** `tailwind.config.js` (`canvas`, `surface`, `ink`, `muted`, `line`, `accent`).
- **Fonts** are loaded from Google Fonts in `index.html`.

## Deploying

### GitHub Pages (included workflow)

1. Push to a GitHub repo on the `main` branch.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` builds with `VITE_BASE=/<repo-name>/` and copies `index.html` to `404.html` so deep links work.

For a user site (`<username>.github.io`), change `VITE_BASE` in the workflow to `/`.

### Netlify / Vercel / Cloudflare Pages

Build command `npm run build`, output directory `dist`. SPA fallbacks are already included (`public/_redirects` for Netlify/Cloudflare, `vercel.json` for Vercel).
