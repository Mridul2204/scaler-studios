import { getAttribution } from "./attribution";
import { trackLead } from "./analytics";

export class LeadSubmitError extends Error {}

/**
 * Sends a lead to /api/admin/contact. Throws when the server does not
 * accept it, so forms can show a real error instead of a false "sent".
 *
 *   await submitLead({ name, email, phone, message, services, extraFields }, { source: "lp-ad-creative" })
 */
export async function submitLead(fields, { source = "website", honeypot = "" } = {}) {
  const payload = {
    name: (fields.name || "").trim(),
    email: (fields.email || "").trim(),
    phone: (fields.phone || "").trim(),
    message: (fields.message || "").trim(),
    services: Array.isArray(fields.services) ? fields.services : [],
    extraFields: Array.isArray(fields.extraFields) ? fields.extraFields.filter((f) => f && (f.label || f.value)) : [],
    source,
    website: honeypot, // bots fill this hidden field; humans never see it
    attribution: getAttribution(),
  };

  let res;
  try {
    res = await fetch("/api/admin/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    throw new LeadSubmitError("network");
  }
  if (!res.ok) {
    let detail = "";
    try {
      detail = (await res.json()).error || "";
    } catch {
      // ignore
    }
    throw new LeadSubmitError(detail || `HTTP ${res.status}`);
  }

  trackLead({ source, services: payload.services });
  return res.json();
}
