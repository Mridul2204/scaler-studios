import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import { whatsappUrl, mailtoUrl, CONTACT_EMAIL, WHATSAPP_NUMBER } from "../../lib/contactInfo";
import { trackEvent } from "../../lib/analytics";

export function scrollToForm(placement = "unknown") {
  trackEvent("cta_click", { placement });
  const el = document.getElementById("lead-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Minimal shell for ad landing pages: logo, WhatsApp, one CTA. No loader,
 * no custom cursor, no page transitions, so it paints fast on mobile.
 */
export default function LandingShell({ children, ctaLabel = "Get a free creative review", showStickyBar = true }) {
  const waHref = whatsappUrl("Hi Mridul, I came from your ad creative page and want to talk about creative for our ads.");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Scaler Studios home">
            <img src="/logonewlong.png" alt="" className="h-7 md:h-9 w-auto" />
            <span className="hidden sm:inline font-bold tracking-tight text-lg md:text-xl">Scaler Studios</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { placement: "header" })}
              className="inline-flex items-center gap-2 text-sm font-semibold opacity-90 hover:opacity-100 px-3 py-2 rounded-full border border-white/20"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button type="button" className={`${styles.btnPrimary} hidden md:inline-flex`} onClick={() => scrollToForm("header")}>
              {ctaLabel}
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 px-5 md:px-8 py-10 text-sm">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src="/logonewlong.png" alt="" className="h-6 w-auto" />
              <span className="font-bold tracking-tight">Scaler Studios</span>
            </div>
            <p className="opacity-60">Video, motion, ad creative and performance marketing. Est. 2020.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 opacity-90">
            <a href={mailtoUrl("Ad creative enquiry")} className="hover:underline">{CONTACT_EMAIL}</a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
              <WhatsAppIcon className="w-4 h-4" /> {WHATSAPP_NUMBER}
            </a>
            <Link to="/legal" className="hover:underline opacity-70">Legal</Link>
            <Link to="/" className="hover:underline opacity-70">Main site</Link>
          </div>
        </div>
        <p className="max-w-[1200px] mx-auto mt-6 text-xs opacity-40">© 2020-2026 Scaler Studios. All rights reserved.</p>
        {showStickyBar && <div className="h-16 md:hidden" aria-hidden="true" />}
      </footer>

      {showStickyBar && (
        <div className={styles.stickyBar}>
          <button type="button" className={`${styles.btnPrimary} flex-1`} onClick={() => scrollToForm("sticky")}>
            {ctaLabel}
          </button>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            onClick={() => trackEvent("whatsapp_click", { placement: "sticky" })}
            className="inline-flex items-center justify-center w-14 rounded-full border border-white/25"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
        </div>
      )}
    </div>
  );
}
