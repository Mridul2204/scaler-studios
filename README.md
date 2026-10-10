# scalerstudios.com

The Scaler Studios website: a Vite + React single-page app with a small
Express API deployed as Vercel serverless functions. Written in JavaScript
(JSX), styled with Tailwind CSS v4 and a few CSS modules.

| | |
| --- | --- |
| Live site | https://www.scalerstudios.com |
| Hosting | Vercel, team **Scaler Studios**, project **`scalerstudios`** |
| Repo | `Mridul2204/scaler-studios`, branch `main` (every push deploys to production) |
| Admin CMS | https://www.scalerstudios.com/admin-scalerstudios (key in `src/pages/AdminPanel.jsx`) |
| Data | MongoDB Atlas (page copy + leads), ImageKit (media), Resend (lead emails) |

## Run it locally

```bash
npm install            # Node 22 (see package.json "engines")
npm run dev            # http://localhost:4000, /api/* proxied to :5000
```

The public site renders without the API (every page has defaults in
`src/lib/contentDefaults.js`). To run the API too:

```bash
npx vercel dev         # same /api functions as production, reads .env.local
# or the legacy server: cd server && node server.js (reads server/.env)
```

Build check before pushing:

```bash
npm run build          # outputs dist/, must finish with no errors
npm run preview        # serves the build on http://localhost:4173
```

## Folder map

```
index.html                 HTML shell, default meta/OG tags, JSON-LD
public/                    static files served as-is (fonts, logos, work covers, robots.txt, sitemap.xml, og-image.png)
src/
  App.jsx                  router: /lp/*, /thank-you, /admin-scalerstudios, everything else -> SiteShell
  SiteShell.jsx            the main site: loader, navbar, footer, page routes
  pages/                   one file per page (+ .module.css)
  pages/landing/           ad landing pages (LandingPage, LeadForm, ThankYou, LandingShell)
  components/              sections (Hero, Services, Works, CTA, Footer...), layout, ui (ContactModal...)
  data/landingPages.js     ALL landing page copy, packages, FAQ (edit here, no JSX needed)
  data/reviews.js          Fiverr reviews + rating stats shown on landing pages
  lib/contentDefaults.js   default copy for every page; the CMS overrides it field by field
  lib/contactInfo.js       WhatsApp number, email, link helpers
  lib/analytics.js         Meta Pixel / GA4 / Google Ads loader + trackLead()
  lib/attribution.js       UTM + click-id capture, attached to every lead
  lib/leads.js             submitLead(): the one function every form uses
  lib/seo.js               useSeo(): per-page title, description, canonical, OG tags
api/
  admin/[...path].js       Express app: pages CRUD, uploads, contact submissions (POST /api/admin/contact)
  admin/pages/*.js         standalone functions for page reads (public GET)
  _lib/                    mongo, imagekit, auth helpers
server/                    legacy local Express server (not deployed)
vercel.json                Vite preset, SPA rewrite, redirects from the old PHP URLs, function limits
```

## How content works

Every page reads copy with `usePageContent("<page>")` and falls back to
`defaults.<page>` from `src/lib/contentDefaults.js`. The admin CMS writes
to MongoDB; whatever is saved there wins over the defaults, field by field.
So: quick copy change → edit `contentDefaults.js` and push, or use the admin
panel. Note the CMS only overrides a field when it is non-empty.

The Clients list and the Work projects currently come from the defaults
(the CMS lists are empty). To add a project with a real video, either add
it in the admin panel (Work page) or append to `defaults.work.projects`
with `videoUrl` pointing at an ImageKit `.mp4`.

## Adding an ad landing page (5 minutes)

1. Open `src/data/landingPages.js` and add a new key, e.g. `"video-ads"`,
   by copying the `"ad-creative"` block. The key becomes the URL:
   `/lp/video-ads`. Change the copy, packages, FAQ and `source`.
2. Optionally add it to `public/sitemap.xml` (or set `seo.noindex: true`
   for pages only ads should see).
3. `npm run build` to check, commit, push to `main`. Vercel deploys it in
   about a minute.

Landing pages use `LandingShell` (no site loader, cursor or transitions),
`LeadForm` (posts to `/api/admin/contact`, then sends the visitor to
`/thank-you`) and `Reveal` for the fade-ins. Their URL for ads can carry
UTM parameters, e.g. `https://www.scalerstudios.com/lp/ad-creative?utm_source=meta&utm_campaign=creative-oct`;
the tags are stored and attached to the lead and shown in the lead email
and the admin panel.

## Tracking

Pixels load only when their IDs are set as `VITE_*` environment variables
in Vercel (see `.env.example`). After adding or changing them, redeploy.

Events fired by `src/lib/analytics.js`:

| Event | When |
| --- | --- |
| `PageView` (Meta) / `page_view` (GA4) | every route change |
| `Lead` (Meta) / `generate_lead` (GA4) / Google Ads `conversion` | successful form submit |
| `cta_click`, `package_click`, `whatsapp_click`, `thank_you_view` | button clicks and the thank-you page |

For Google Ads you can also create a destination-based conversion on the
URL `/thank-you`.

## Deploying

Push to `main`. Vercel builds with `vite build`, serves `dist/` and deploys
`api/` as functions. Watch the build at vercel.com/scaler-studios/scalerstudios.
To preview a change first, push a branch: Vercel creates a preview URL per
branch.

Old hash URLs (`/#/about`) still work: `App.jsx` rewrites them to clean
paths on load, and `vercel.json` has 301s for the old PHP URLs.

## Things to know

- Fonts: PP Mori (sans) and Nib Pro (serif, italic for accents). The PP
  Mori files are the "free for personal use" build; check licensing for
  commercial use.
- The admin key is shipped in the client bundle (`AdminPanel.jsx`); treat the
  admin URL as private and rotate `ADMIN_KEY` in Vercel if it leaks.
- `src/pages/landing/` and `src/lib/` have no CMS dependency on purpose:
  landing pages must render instantly even if MongoDB is slow.
