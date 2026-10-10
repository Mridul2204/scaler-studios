import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Landing.module.css";
import LandingShell, { WhatsAppIcon } from "./LandingShell";
import { useSeo } from "../../lib/seo";
import { whatsappUrl, CONTACT_EMAIL } from "../../lib/contactInfo";
import { trackEvent } from "../../lib/analytics";

// Optional: a Calendly / GoHighLevel booking link. Set VITE_BOOKING_URL in
// Vercel to show a "Book a call" button here.
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "";

/**
 * /thank-you — where every landing page form lands after a successful send.
 * Use this URL as the destination for Google Ads and Meta conversion rules
 * (the Lead/conversion events also fire on submit, see lib/analytics.js).
 */
export default function ThankYou() {
  const { state } = useLocation();
  const name = state?.name ? state.name.split(" ")[0] : "";

  useSeo({ title: "Thanks, we have your details", path: "/thank-you", noindex: true });

  useEffect(() => {
    document.body.style.backgroundColor = "#073624";
    trackEvent("thank_you_view", { source: state?.source || "" });
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [state]);

  return (
    <LandingShell showStickyBar={false} ctaLabel="Back to the site">
      <section className="px-5 md:px-8 py-20 md:py-32">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#1DBF73] text-[#073624] flex items-center justify-center mb-8">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
            Thanks{name ? `, ${name}` : ""}. <span className={`${styles.serif} text-[#1DBF73]`}>We have your details.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-85 leading-relaxed">
            Mridul will reply within one business day with a short review of your creative and the package we would recommend.
            Keep an eye on your inbox (and your spam folder, just in case) for an email from {CONTACT_EMAIL}.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            {BOOKING_URL && (
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btnPrimary} text-lg py-5 px-8`} onClick={() => trackEvent("booking_click", { placement: "thank-you" })}>
                Book your call now
              </a>
            )}
            <a
              href={whatsappUrl("Hi Mridul, I just sent the form on your site. Can we talk sooner?")}
              target="_blank"
              rel="noopener noreferrer"
              className={BOOKING_URL ? styles.btnGhost : `${styles.btnPrimary} text-lg py-5 px-8`}
              onClick={() => trackEvent("whatsapp_click", { placement: "thank-you" })}
            >
              <WhatsAppIcon className="w-5 h-5" /> Prefer to talk now? WhatsApp us
            </a>
          </div>
          <p className="mt-10 text-sm opacity-60">
            Meanwhile, <Link to="/work" className="underline">see recent work</Link> or <Link to="/" className="underline">go back to the site</Link>.
          </p>
        </div>
      </section>
    </LandingShell>
  );
}
