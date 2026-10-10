import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "./lib/analytics";
import { captureAttribution } from "./lib/attribution";

// Code-split: the main site (GSAP, all pages), the admin CMS and the ad
// landing pages each load only when their route is visited.
const SiteShell = lazy(() => import("./SiteShell"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const LandingPage = lazy(() => import("./pages/landing/LandingPage"));
const ThankYou = lazy(() => import("./pages/landing/ThankYou"));

// The site used hash URLs (/#/about) until Oct 2026. Old links, bookmarks and
// ad URLs still work: anything after "#/" becomes a real path before the
// router reads the URL (done here, at module load, so no component re-render
// or history listener timing is involved).
(function redirectLegacyHashUrls() {
  if (typeof window === "undefined") return;
  const { hash, search, pathname } = window.location;
  if (!hash || !hash.startsWith("#/")) return;
  const [path, hashQuery] = hash.slice(1).split("?");
  const params = new URLSearchParams(search);
  if (hashQuery) new URLSearchParams(hashQuery).forEach((v, k) => params.set(k, v));
  const qs = params.toString();
  const next = (pathname === "/" ? "" : pathname.replace(/\/$/, "")) + path + (qs ? `?${qs}` : "");
  window.history.replaceState(null, "", next);
})();

// Loads the pixels once and reports a page view on every route change.
function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    captureAttribution();
    initAnalytics();
  }, []);
  useEffect(() => {
    // Let the page set its <title> first.
    const t = setTimeout(() => trackPageView(location.pathname + location.search), 50);
    return () => clearTimeout(t);
  }, [location.pathname, location.search]);
  return null;
}

// Plain brand-coloured screen while a chunk downloads (no spinner flash).
const fallback = <div style={{ minHeight: "100vh", backgroundColor: "#073624" }} aria-busy="true" />;

export default function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <Suspense fallback={fallback}>
        <Routes>
          <Route path="/admin-scalerstudios" element={<AdminPanel />} />
          {/* Ad landing pages: no loader, cursor or page transitions, so they load fast */}
          <Route path="/lp/:slug" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<SiteShell />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
