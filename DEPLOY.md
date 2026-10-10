# Deploying

Everything is in README.md ("Deploying" and "Tracking"). Short version:

1. `npm run build` must pass locally.
2. Push to `main` on `Mridul2204/scaler-studios`.
3. Vercel (team Scaler Studios, project `scalerstudios`) builds with the
   Vite preset and deploys `dist/` + `api/` to www.scalerstudios.com.
4. Environment variables live in Vercel → Project Settings → Environment
   Variables (names in `.env.example`). Redeploy after changing any.

Smoke test after a deploy:

- https://www.scalerstudios.com/ loads, copy comes from MongoDB.
- https://www.scalerstudios.com/api/admin/pages/home returns JSON.
- https://www.scalerstudios.com/lp/ad-creative loads and the form reaches
  the thank-you page (one test lead will arrive by email; delete it in the
  admin panel afterwards).
- https://www.scalerstudios.com/#/about redirects to /about.
