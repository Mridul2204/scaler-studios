/**
 * Single place for how people reach Scaler Studios. The CMS (global.footer,
 * contact.info) can override the displayed phone/email; these are the code
 * defaults and the helpers every page uses to build links.
 */
export const WHATSAPP_NUMBER = "+91 83106 77125"; // displayed
export const WHATSAPP_DIGITS = "918310677125"; // international format, digits only
export const CONTACT_EMAIL = "mridul@scalerstudios.com";

/** Opens a WhatsApp chat with Mridul, with the message pre-filled. */
export function whatsappUrl(text = "Hi Mridul, I found Scaler Studios online and want to talk about a project.", digits = WHATSAPP_DIGITS) {
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

/** Opens the visitor's mail app with the "To" and subject filled in. */
export function mailtoUrl(subject = "Project enquiry for Scaler Studios", email = CONTACT_EMAIL) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

/** "+91 83106 77125" -> "918310677125" (for wa.me links built from CMS values) */
export function toDigits(phone) {
  return String(phone || "").replace(/\D/g, "");
}
