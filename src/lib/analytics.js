/**
 * Tracking for ads: Meta Pixel, GA4 and Google Ads conversions.
 *
 * IDs come from Vite env vars (set them in Vercel → Project → Environment
 * Variables, then redeploy; Vite inlines VITE_* at build time):
 *
 *   VITE_META_PIXEL_ID            e.g. 1234567890
 *   VITE_GA4_ID                   e.g. G-XXXXXXXXXX
 *   VITE_GOOGLE_ADS_ID            e.g. AW-123456789
 *   VITE_GOOGLE_ADS_LEAD_LABEL    the conversion label from Google Ads, e.g. AbC-dEfGhIjK
 *
 * Nothing loads when an ID is missing, so local dev stays clean.
 */

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || "";
const GA4_ID = import.meta.env.VITE_GA4_ID || "";
const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID || "";
const GOOGLE_ADS_LEAD_LABEL = import.meta.env.VITE_GOOGLE_ADS_LEAD_LABEL || "";

let initialised = false;

function loadScript(src) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function initAnalytics() {
  if (initialised || typeof window === "undefined") return;
  initialised = true;

  // Meta Pixel
  if (META_PIXEL_ID && !window.fbq) {
    const n = (window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    if (!window._fbq) window._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
    // First PageView is fired by trackPageView() on the initial route.
  }

  // GA4 + Google Ads share one gtag.js
  if ((GA4_ID || GOOGLE_ADS_ID) && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID || GOOGLE_ADS_ID}`);
    // SPA: we send page_view ourselves on route changes.
    if (GA4_ID) window.gtag("config", GA4_ID, { send_page_view: false });
    if (GOOGLE_ADS_ID) window.gtag("config", GOOGLE_ADS_ID);
  }
}

export function trackPageView(path) {
  if (typeof window === "undefined") return;
  const page_path = path || window.location.pathname + window.location.search;
  if (window.fbq) window.fbq("track", "PageView");
  if (window.gtag && GA4_ID) {
    window.gtag("event", "page_view", {
      page_path,
      page_location: window.location.origin + page_path,
      page_title: document.title,
    });
  }
}

/** Generic custom event, e.g. trackEvent("cta_click", { placement: "hero" }) */
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (window.gtag) window.gtag("event", name, params);
  if (window.fbq) window.fbq("trackCustom", name, params);
}

/**
 * Fire once per successful lead submission. `source` is the page/form that
 * produced the lead, e.g. "lp-ad-creative" or "contact-modal".
 */
export function trackLead({ source = "", services = [], value } = {}) {
  if (typeof window === "undefined") return;
  const params = { content_name: source, content_category: services.join(", ") };
  if (window.fbq) window.fbq("track", "Lead", params);
  if (window.gtag) {
    window.gtag("event", "generate_lead", { source, services: services.join(", "), value, currency: "USD" });
    if (GOOGLE_ADS_ID && GOOGLE_ADS_LEAD_LABEL) {
      window.gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}`,
        value,
        currency: "USD",
      });
    }
  }
}

export const analyticsConfig = {
  hasMetaPixel: Boolean(META_PIXEL_ID),
  hasGA4: Boolean(GA4_ID),
  hasGoogleAds: Boolean(GOOGLE_ADS_ID),
};
