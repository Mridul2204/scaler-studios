import { getAttribution } from "./attribution";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

/**
 * Booking link with the visitor's channel attached. Calendly records utm_*
 * parameters on each booking, so a call booked by someone who arrived from
 * scalerstudios.com/yt shows up as youtube / video / saas-explainers rather
 * than the generic tags baked into the base link. Falls back to the base
 * link untouched when nothing is stored or the URL cannot be parsed.
 */
export function bookingUrl(base) {
  if (!base) return "";
  try {
    const url = new URL(base);
    const attr = getAttribution();
    for (const key of UTM_KEYS) {
      if (attr[key]) url.searchParams.set(key, attr[key]);
    }
    return url.toString();
  } catch {
    return base;
  }
}
