/**
 * Captures where a visitor came from (UTM tags, Google/Meta click IDs,
 * referrer, landing page) on first touch and keeps it for the session, so
 * every lead can be tied back to the campaign and ad that produced it.
 */

const KEY = "ss_attribution";
const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "ttclid",
];

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}

function write(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // storage blocked: attribution is best-effort
  }
}

/** Call once on app start. Keeps the FIRST touch, refreshes if new UTMs arrive. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const found = {};
  for (const p of PARAMS) {
    const v = url.searchParams.get(p);
    if (v) found[p] = v.slice(0, 200);
  }
  const existing = read();
  const hasNewCampaign = Object.keys(found).length > 0;
  if (existing && !hasNewCampaign) return;

  write({
    ...(existing || {}),
    ...found,
    landing_page: url.pathname + (hasNewCampaign ? url.search : ""),
    referrer: (document.referrer || "").slice(0, 300),
    first_seen: existing?.first_seen || new Date().toISOString(),
    last_seen: new Date().toISOString(),
  });
}

/** Attach to lead payloads. */
export function getAttribution() {
  const data = read() || {};
  return {
    ...data,
    page: typeof window !== "undefined" ? window.location.pathname : "",
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 200) : "",
  };
}
