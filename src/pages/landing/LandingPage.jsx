import { useEffect, useRef, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import Reveal from "./Reveal";
import HeroReel from "./HeroReel";
import LogoMarquee from "./LogoMarquee";
import { bookingUrl } from "../../lib/booking";
import styles from "./Landing.module.css";
import LandingShell, { scrollToForm, WhatsAppIcon } from "./LandingShell";
import LeadForm from "./LeadForm";
import ClientLogo from "../../components/ui/ClientLogo";
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
      className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[20px] px-4 py-2 border ${dark ? "border-white/15 bg-white/5" : "border-[#073624]/15 bg-white"}`}
    >
      <Stars />
      <span className="text-sm font-semibold whitespace-nowrap">
        {fiverrStats.rating} from {fiverrStats.reviewCount} reviews
      </span>
      <span className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap ${dark ? "text-[#1DBF73]" : "text-[#073624]/70"}`}>
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

function PlayIcon() {
  return (
    <span className={styles.playIcon} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function CalendarIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

/**
 * One playable sample. `youtubeId` shows a thumbnail and loads the
 * privacy-enhanced YouTube player only on click; `videoUrl` is a self-hosted
 * mp4 (ImageKit); `href` is an external player (e.g. Frame.io) opened in a
 * new tab behind a branded poster.
 */
/**
 * Silent looping preview for a sample card (the Apollo Studio pattern):
 * a short, muted, audio-free clip that plays while the card is on screen
 * and pauses when it scrolls away. Clips come straight from ImageKit's
 * video transformations (`previewSrc` + start/duration), so no files are
 * rendered by hand. People who asked for reduced motion or data saving
 * get the poster frame instead.
 */
function previewUrls(item) {
  if (item.previewUrl) return { video: item.previewUrl, poster: item.previewPoster || "" };
  if (!item.previewSrc) return null;
  const start = item.previewStart ?? 0;
  const duration = item.previewDuration ?? 10;
  const narrow = typeof window !== "undefined" && window.innerWidth < 640;
  const width = narrow ? 480 : 720;
  return {
    video: `${item.previewSrc}?tr=so-${start},du-${duration},w-${width},ac-none,q-60`,
    poster: `${item.previewSrc}/ik-thumbnail.jpg?tr=so-${start},w-${width}`,
  };
}

function LoopPreview({ src, poster }) {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const stillOnly =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      (navigator.connection && navigator.connection.saveData);
    if (stillOnly || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const p = video.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);
  return (
    <video
      ref={ref}
      className={styles.previewVideo}
      src={src}
      poster={poster || undefined}
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}

function VideoSample({ item }) {
  const [playing, setPlaying] = useState(false);
  const title = `${item.label}: ${item.kind}`;
  const preview = previewUrls(item);
  const meta = (
    <span className={styles.videoMeta}>
      <span>
        <span className="block font-bold text-lg leading-tight">{item.label}</span>
        <span className="block text-sm opacity-80">{item.kind}</span>
      </span>
      {item.duration && <span className={styles.videoDuration}>{item.duration}</span>}
    </span>
  );

  if (item.youtubeId) {
    return (
      <div className={styles.video}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className={styles.videoButton}
            aria-label={`Play ${title}`}
            onClick={() => {
              trackEvent("sample_play", { sample: item.label });
              setPlaying(true);
            }}
          >
            {preview ? (
              <LoopPreview src={preview.video} poster={preview.poster} />
            ) : (
              <img src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`} alt="" loading="lazy" decoding="async" />
            )}
            <span className={styles.videoShade} />
            <PlayIcon />
            {meta}
          </button>
        )}
      </div>
    );
  }

  if (item.videoUrl) {
    return (
      <div className={styles.video}>
        <video
          src={item.videoUrl}
          poster={item.poster}
          controls
          playsInline
          preload="metadata"
          aria-label={title}
          onPlay={() => trackEvent("sample_play", { sample: item.label })}
        />
      </div>
    );
  }

  return (
    <div className={styles.video}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.videoButton}
        aria-label={`Watch ${title} (opens in a new tab)`}
        onClick={() => trackEvent("sample_play", { sample: item.label, external: true })}
      >
        <span className={styles.videoPoster}>
          <span className={`${styles.serif} ${styles.videoPosterName}`}>{item.label}</span>
        </span>
        <span className={styles.videoShade} />
        <span className={styles.videoExternal}>Opens in a new tab</span>
        <PlayIcon />
        {meta}
      </a>
    </div>
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

  const { hero, trust, work, problem, deliverables, packages, process, proof, samples, upsell, faq, form } = page;

  return (
    <LandingShell
      ctaLabel={hero.primaryCta}
      ctaHref={hero.primaryAction === "booking" && page.booking?.url ? bookingUrl(page.booking.url) : undefined}
      waMessage={page.whatsappMessage}
      emailSubject={page.emailSubject}
    >
      {/* ── Hero ── */}
      <section className={`${styles.hero} px-5 md:px-8 pt-12 md:pt-20 pb-14 md:pb-24`}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-5">
            <p className={`${styles.heroIn} text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-[#1DBF73] mb-5`} style={{ "--d": "0.05s" }}>{hero.eyebrow}</p>
            <h1 className={`${styles.heroIn} text-[2.4rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[3.4rem] xl:text-[3.8rem] font-bold tracking-tight`} style={{ "--d": "0.12s" }}>
              {hero.headline} <span className={`${styles.serif} ${styles.accentGrad}`}>{hero.headlineAccent}</span>
            </h1>
            <p className={`${styles.heroIn} mt-6 text-lg md:text-xl leading-relaxed opacity-85 max-w-[58ch]`} style={{ "--d": "0.2s" }}>{hero.subhead}</p>
            <div className={`${styles.heroIn} mt-8 flex flex-col sm:flex-row gap-3 sm:items-center`} style={{ "--d": "0.28s" }}>
              {hero.primaryAction === "booking" && page.booking?.url ? (
                <a
                  href={bookingUrl(page.booking.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnPrimary} text-lg py-5 px-8`}
                  onClick={() => trackEvent("booking_click", { placement: "hero" })}
                >
                  {hero.primaryCta}
                </a>
              ) : (
                <button type="button" className={`${styles.btnPrimary} text-lg py-5 px-8`} onClick={() => scrollToForm("hero")}>
                  {hero.primaryCta}
                </button>
              )}
              {hero.secondaryAction === "form" ? (
                <button type="button" className={styles.btnGhost} onClick={() => scrollToForm("hero-secondary")}>
                  {hero.secondaryCta}
                </button>
              ) : (
                <a
                  href={hero.secondaryHref || "#packages"}
                  className={styles.btnGhost}
                  {...(/^https?:/.test(hero.secondaryHref || "") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => trackEvent(/^https?:/.test(hero.secondaryHref || "") ? "booking_click" : "cta_click", { placement: "hero-secondary" })}
                >
                  {hero.secondaryCta}
                </a>
              )}
            </div>
            <ul className={`${styles.heroIn} mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm opacity-80`} style={{ "--d": "0.36s" }}>
              {hero.bullets.map((b) => (
                <li key={b} className="inline-flex items-center gap-2">
                  <Check /> {b}
                </li>
              ))}
            </ul>
            <div className={`${styles.heroIn} mt-8`} style={{ "--d": "0.44s" }}>
              <RatingBadge />
            </div>
          </div>
          <div className={`${styles.heroIn} lg:col-span-6 xl:col-span-7`} style={{ "--d": "0.18s" }}>
            {hero.reel && work?.items?.length ? (
              <HeroReel
                items={work.items}
                onPick={() => {
                  const el = document.getElementById("work");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              />
            ) : (
            <div className="relative rounded-[24px] overflow-hidden aspect-video bg-[#0A2629] shadow-2xl shadow-black/30">
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
            )}
          </div>
        </div>
      </section>

      {/* ── Trust logos ── */}
      {trust.marquee || trust.logos.length >= 10 ? (
        <section className="border-y border-white/10 px-5 md:px-8 py-9 md:py-11">
          <LogoMarquee logos={trust.logos} label={trust.label} />
        </section>
      ) : (
      <section className="border-y border-white/10 px-5 md:px-8 py-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60 whitespace-nowrap">{trust.label}</p>
          <ul className={styles.trustLogos}>
            {trust.logos.map((l) => (
              <li key={l.name}>
                <ClientLogo name={l.name} logo={l.logo || l.src} size={l.size} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      )}

      {/* ── Work: playable samples (optional) ── */}
      {work && (
        <section id="work" className="px-5 md:px-8 py-16 md:py-24 scroll-mt-20">
          <div className="max-w-[1200px] mx-auto">
            <Reveal as="div" className="max-w-[60ch]">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{work.heading}</h2>
              {work.subhead && <p className="mt-4 text-lg opacity-80">{work.subhead}</p>}
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {work.items.map((item, i) => (
                <Reveal as="div" key={item.label} delay={(i % 2) * 0.06}>
                  <VideoSample item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
          {packages.more && (
            <Reveal className="mt-6 rounded-[20px] bg-[#073624] text-[#F4F6F5] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">{packages.more.heading}</h3>
                <p className="mt-2 opacity-80 max-w-[70ch]">{packages.more.text}</p>
              </div>
              <button
                type="button"
                className={`${styles.btnPrimary} shrink-0`}
                onClick={() => {
                  trackEvent("package_click", { package: "custom" });
                  scrollToForm("package-custom");
                }}
              >
                {packages.more.cta}
              </button>
            </Reveal>
          )}
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

      {/* ── Samples (optional) ── */}
      {samples && (
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
      )}

      {/* ── Upsell (optional) ── */}
      {upsell && (
        <section className={`px-5 md:px-8 pb-16 md:pb-24 ${samples ? "" : "pt-16 md:pt-24"}`}>
          <Reveal as="div" className="max-w-[1200px] mx-auto rounded-[28px] bg-[#1DBF73] text-[#073624] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">{upsell.eyebrow}</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{upsell.heading}</h2>
              <p className="mt-5 text-lg leading-relaxed opacity-90 max-w-[62ch]">{upsell.body}</p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              {upsell.href ? (
                <Link
                  to={upsell.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#073624] text-white font-bold px-8 py-5 text-lg hover:bg-[#0A2629] transition-colors"
                  onClick={() => trackEvent("cta_click", { placement: "upsell", href: upsell.href })}
                >
                  {upsell.cta}
                </Link>
              ) : (
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
              )}
            </div>
          </Reveal>
        </section>
      )}

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
            <div className="mt-6 flex flex-col gap-1 text-sm">
              {page.booking?.url && (
                <a
                  href={page.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("booking_click", { placement: "form" })}
                  className="inline-flex items-center gap-2 py-2.5 font-semibold hover:underline"
                >
                  <CalendarIcon className="w-5 h-5" /> {page.booking.formText || "Book a call with Mridul"}
                </a>
              )}
              <a
                href={whatsappUrl(page.whatsappMessage || "Hi Mridul, I came from your ad creative page. Can we talk about creative for our ads?")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { placement: "form" })}
                className="inline-flex items-center gap-2 py-2.5 font-semibold hover:underline"
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
