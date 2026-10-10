import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Reveal from "./Reveal";
import styles from "./Landing.module.css";
import LandingShell, { scrollToForm, WhatsAppIcon } from "./LandingShell";
import LeadForm from "./LeadForm";
import { getLandingPage } from "../../data/landingPages";
import { reviews, fiverrStats } from "../../data/reviews";
import { useSeo } from "../../lib/seo";
import { whatsappUrl } from "../../lib/contactInfo";
import { trackEvent } from "../../lib/analytics";

function Stars() {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${fiverrStats.rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className={styles.star} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function RatingBadge({ dark = true }) {
  return (
    <a
      href={fiverrStats.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full px-4 py-2 border ${dark ? "border-white/15 bg-white/5" : "border-[#073624]/15 bg-white"}`}
    >
      <Stars />
      <span className="text-sm font-semibold">
        {fiverrStats.rating} from {fiverrStats.reviewCount} reviews
      </span>
      <span className={`text-xs font-bold uppercase tracking-wider ${dark ? "text-[#1DBF73]" : "text-[#073624]/70"}`}>
        {fiverrStats.badges.join(" · ")} on Fiverr
      </span>
    </a>
  );
}

function Check() {
  return (
    <svg className={styles.check} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function LandingPage() {
  const { slug } = useParams();
  const page = getLandingPage(slug);

  useSeo({
    title: page?.seo.title,
    description: page?.seo.description,
    path: `/lp/${slug}`,
    noindex: page?.seo.noindex,
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#073624";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  if (!page) return <Navigate to="/" replace />;

  const { hero, trust, problem, deliverables, packages, process, proof, samples, upsell, faq, form } = page;

  return (
    <LandingShell ctaLabel={hero.primaryCta}>
      {/* ── Hero ── */}
      <section className="px-5 md:px-8 pt-12 md:pt-20 pb-14 md:pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-[#1DBF73] mb-5">{hero.eyebrow}</p>
            <h1 className="text-[2.4rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight">
              {hero.headline} <span className={`${styles.serif} text-[#1DBF73]`}>{hero.headlineAccent}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed opacity-85 max-w-[58ch]">{hero.subhead}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button type="button" className={`${styles.btnPrimary} text-lg py-5 px-8`} onClick={() => scrollToForm("hero")}>
                {hero.primaryCta}
              </button>
              <a href="#packages" className={styles.btnGhost} onClick={() => trackEvent("cta_click", { placement: "hero-secondary" })}>
                {hero.secondaryCta}
              </a>
            </div>
            <ul className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm opacity-80">
              {hero.bullets.map((b) => (
                <li key={b} className="inline-flex items-center gap-2">
                  <Check /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <RatingBadge />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] sm:aspect-video lg:aspect-[4/5] bg-[#0A2629] shadow-2xl shadow-black/30">
              <video
                src={hero.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="Scaler Studios showreel"
              />
              <div className="absolute bottom-4 left-4 bg-[#073624]/85 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">Showreel</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust logos ── */}
      <section className="border-y border-white/10 px-5 md:px-8 py-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60 whitespace-nowrap">{trust.label}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5 md:justify-between flex-1">
            {trust.logos.map((l) => (
              <img key={l.name} src={l.src} alt={l.name} className={styles.logo} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal as="div" className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{problem.heading}</h2>
            <p className="mt-6 text-lg leading-relaxed opacity-80">{problem.body}</p>
          </Reveal>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4">
            {problem.points.map((p, i) => (
              <Reveal as="div" key={p.title} delay={i * 0.08} className={styles.card}>
                <div className="text-[#1DBF73] font-bold text-sm mb-3">0{i + 1}</div>
                <h3 className="font-bold text-lg leading-snug mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed opacity-75">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className={`${styles.onLight} bg-[#F4F6F5] text-[#073624] px-5 md:px-8 py-16 md:py-24`}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal as="h2" className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] max-w-[20ch]">
            {deliverables.heading}
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.items.map((d, i) => (
              <Reveal as="div" key={d.title} delay={(i % 3) * 0.08} className={styles.cardLight}>
                <div className="w-9 h-9 rounded-full bg-[#1DBF73]/15 text-[#073624] flex items-center justify-center mb-4">
                  <Check />
                </div>
                <h3 className="font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-sm leading-relaxed opacity-75">{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="packages" className={`${styles.onLight} bg-[#cefad0] text-[#073624] px-5 md:px-8 py-16 md:py-24 scroll-mt-20`}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal as="div" className="max-w-[60ch]">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{packages.heading}</h2>
            <p className="mt-4 text-lg opacity-80">{packages.subhead}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {packages.tiers.map((t, i) => (
              <Reveal as="div" key={t.name} delay={i * 0.08} className={`${styles.tier} ${t.highlight ? styles.tierHighlight : ""}`}>
                {t.badge && <span className={styles.tierBadge}>{t.badge}</span>}
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className={`text-sm mt-1 ${t.highlight ? "opacity-70" : "opacity-60"}`}>{t.tagline}</p>
                {page.showPrices && (
                  <p className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{t.price}</span>
                    <span className="opacity-60">{t.period}</span>
                  </p>
                )}
                <ul className={`${styles.tierList} mt-5 mb-6`}>
                  {t.features.map((f) => (
                    <li key={f}>
                      <Check /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`${t.highlight ? styles.btnPrimary : styles.btnGhost} mt-auto w-full`}
                  onClick={() => {
                    trackEvent("package_click", { package: t.name });
                    scrollToForm(`package-${t.name.toLowerCase()}`);
                  }}
                >
                  {t.cta}
                </button>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm opacity-60">{packages.note}</p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <Reveal as="h2" className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{process.heading}</Reveal>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.08} className={styles.card}>
                <div className={`${styles.serif} text-4xl text-[#1DBF73] mb-4`}>{s.n}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed opacity-75">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Proof ── */}
      <section className={`${styles.onLight} bg-[#F4F6F5] text-[#073624] px-5 md:px-8 py-16 md:py-24`}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal as="div" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{proof.heading}</h2>
              <p className="mt-3 opacity-70">{proof.subhead}</p>
            </div>
            <RatingBadge dark={false} />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <Reveal as="figure" key={r.name} delay={(i % 3) * 0.08} className={`${styles.cardLight} flex flex-col`}>
                <Stars />
                <blockquote className="mt-4 text-[1.02rem] leading-relaxed flex-1">“{r.quote}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-bold">{r.name}</span>
                  <span className="opacity-60"> · {r.country} · {r.project}</span>
                  {r.repeat && <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#073624] bg-[#1DBF73]/20 px-2 py-0.5 rounded-full">Repeat client</span>}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Samples ── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <Reveal as="h2" className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{samples.heading}</Reveal>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {samples.items.map((s, i) => (
              <Reveal as="div" key={s.src} delay={(i % 3) * 0.06} className={styles.sample}>
                <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                <span className={styles.sampleLabel}>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upsell ── */}
      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <Reveal as="div" className="max-w-[1200px] mx-auto rounded-[28px] bg-[#1DBF73] text-[#073624] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">{upsell.eyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{upsell.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed opacity-90 max-w-[62ch]">{upsell.body}</p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#073624] text-white font-bold px-8 py-5 text-lg hover:bg-[#0A2629] transition-colors"
              onClick={() => {
                trackEvent("cta_click", { placement: "upsell" });
                scrollToForm("upsell");
              }}
            >
              {upsell.cta}
            </button>
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section className={`${styles.onLight} bg-[#F4F6F5] text-[#073624] px-5 md:px-8 py-16 md:py-24`}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal as="h2" className="lg:col-span-4 text-3xl md:text-4xl font-bold tracking-tight leading-[1.05]">{faq.heading}</Reveal>
          <div className="lg:col-span-8">
            {faq.items.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section id="lead-form" className={`${styles.onLight} bg-[#cefad0] text-[#073624] px-5 md:px-8 py-16 md:py-24 scroll-mt-20`}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">{form.eyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{form.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed opacity-80">{form.subhead}</p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href={whatsappUrl("Hi Mridul, I came from your ad creative page. Can we talk about creative for our ads?")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { placement: "form" })}
                className="inline-flex items-center gap-2 font-semibold hover:underline"
              >
                <WhatsAppIcon className="w-5 h-5" /> Prefer to chat? Message us on WhatsApp
              </a>
            </div>
            <div className="mt-8">
              <RatingBadge dark={false} />
            </div>
          </div>
          <div className="lg:col-span-7 bg-white rounded-[24px] p-6 md:p-8 shadow-xl shadow-[#073624]/10">
            <LeadForm config={form} source={page.source} />
          </div>
        </div>
      </section>
    </LandingShell>
  );
}
