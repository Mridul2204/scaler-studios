import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import { submitLead } from "../../lib/leads";
import { whatsappUrl, mailtoUrl } from "../../lib/contactInfo";

/**
 * Qualified lead form for ad landing pages. Posts to /api/admin/contact via
 * submitLead (adds UTM attribution, fires pixel events) and sends the visitor
 * to /thank-you, which is the URL to use for Google Ads conversions.
 */
export default function LeadForm({ config, source }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", phone: "", brand: "", adSpend: "", message: "" });
  const [needs, setNeeds] = useState(new Set());
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Qualifier select: label/options come from the page config (ad spend, publishing volume...).
  const selectLabel = config.selectLabel || "Monthly ad spend";
  const selectOptions = config.selectOptions || config.adSpendOptions || [];
  const needLabel = config.needLabel || "What do you need?";
  const brandLabel = config.brandLabel || "Website or brand";
  const brandPlaceholder = config.brandPlaceholder || "yourbrand.com";
  const messagePlaceholder = config.messagePlaceholder || "What are you selling, where are you running ads, what is not working?";

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const toggleNeed = (n) =>
    setNeeds((prev) => {
      const next = new Set(prev);
      next.has(n) ? next.delete(n) : next.add(n);
      return next;
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const services = Array.from(new Set([config.defaultService, ...Array.from(needs)])).filter(Boolean);
    try {
      await submitLead(
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          services,
          extraFields: [
            values.brand && { label: brandLabel, value: values.brand },
            values.adSpend && { label: selectLabel, value: values.adSpend },
            needs.size > 0 && { label: "Needs", value: Array.from(needs).join(", ") },
          ].filter(Boolean),
        },
        { source, honeypot }
      );
      navigate("/thank-you", { state: { name: values.name, source } });
    } catch (err) {
      setError("Something went wrong and your details were not sent. Please try again, or message us on WhatsApp.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={styles.label} htmlFor="lp-name">Name</label>
          <input id="lp-name" className={styles.input} type="text" required autoComplete="name" placeholder="Your name" value={values.name} onChange={set("name")} />
        </div>
        <div>
          <label className={styles.label} htmlFor="lp-email">Work email</label>
          <input id="lp-email" className={styles.input} type="email" required autoComplete="email" placeholder="you@company.com" value={values.email} onChange={set("email")} />
        </div>
        <div>
          <label className={styles.label} htmlFor="lp-phone">WhatsApp or phone</label>
          <input id="lp-phone" className={styles.input} type="tel" autoComplete="tel" placeholder="+1 555 000 0000" value={values.phone} onChange={set("phone")} />
        </div>
        <div>
          <label className={styles.label} htmlFor="lp-brand">{brandLabel}</label>
          <input id="lp-brand" className={styles.input} type="text" autoComplete="organization" placeholder={brandPlaceholder} value={values.brand} onChange={set("brand")} />
        </div>
      </div>

      <div>
        <label className={styles.label} htmlFor="lp-spend">{selectLabel}</label>
        <select id="lp-spend" className={`${styles.input} ${styles.select}`} required value={values.adSpend} onChange={set("adSpend")}>
          <option value="" disabled>Select a range</option>
          {selectOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <span className={styles.label}>{needLabel}</span>
        <div className="flex flex-wrap gap-2">
          {config.needOptions.map((n) => {
            const active = needs.has(n);
            return (
              <button key={n} type="button" className={`${styles.chip} ${active ? styles.chipActive : ""}`} aria-pressed={active} onClick={() => toggleNeed(n)}>
                {n}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className={styles.label} htmlFor="lp-message">Anything else? (optional)</label>
        <textarea id="lp-message" className={styles.input} rows="3" placeholder={messagePlaceholder} value={values.message} onChange={set("message")} />
      </div>

      {/* Honeypot: hidden from people, filled by bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="lp-website">Website</label>
        <input id="lp-website" type="text" name="website" tabIndex="-1" autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      {error && (
        <p role="alert" className="text-[#b42318] text-sm leading-relaxed">
          {error}{" "}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline">Open WhatsApp</a>
          {" · "}
          <a href={mailtoUrl()} className="underline">Email us</a>
        </p>
      )}

      <button type="submit" className={`${styles.btnPrimary} w-full text-lg py-5`} disabled={loading}>
        {loading ? "Sending…" : config.submitText}
      </button>
      <p className="text-xs opacity-60 text-center">{config.privacy}</p>
    </form>
  );
}
