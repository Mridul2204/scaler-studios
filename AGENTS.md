# Working on this repo (for people and AI agents)

Read README.md first: it has the folder map, content model and deploy flow.

## Conventions

- JavaScript + JSX only, no TypeScript. React 19, react-router 7, Tailwind v4
  (utility classes in JSX, `@theme` in `src/index.css`), CSS modules for
  page-specific styles.
- Fonts via inline style or `font-sans` / `font-serif`: PP Mori for text,
  Nib Pro italic for headline accents. Palette: navy `#073624`, night
  `#0A2629`, emerald `#1DBF73`, cream `#F4F6F5`, mint `#cefad0`.
- Copy style: no em dashes anywhere (use hyphens, commas or full stops),
  direct and concrete, no filler.
- Every form posts through `submitLead()` in `src/lib/leads.js`, never a raw
  fetch, so attribution, honeypot and pixel events stay consistent.
- Page copy belongs in `src/lib/contentDefaults.js` (site pages) or
  `src/data/landingPages.js` (landing pages), not hard-coded in JSX.
- New public routes: add to `public/sitemap.xml`; add `useSeo()` to the page.
- Keep the landing page chunk light: no GSAP, no framer-motion, no CMS
  fetches in `src/pages/landing/`.

## Before you push

1. `npm run build` passes.
2. Open the changed pages with `npm run preview` (desktop + 390px wide).
3. Commit messages: `feat:`, `fix:`, `content:`, `chore:` prefixes.
4. Push to `main` = production deploy. Use a branch for anything risky and
   check the Vercel preview URL first.

## Do not

- Commit `.env*` files, `dist/` or `node_modules/`.
- Change the admin route or key without updating Vercel's `ADMIN_KEY`.
- Edit `server/` expecting it to affect production: only `api/` is deployed.
