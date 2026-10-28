import ClientLogo from "../../components/ui/ClientLogo";
import styles from "./Landing.module.css";

/**
 * Client logos as a slow, continuous marquee: one row of single-colour
 * marks drifting left, faded at both edges, paused on hover. The list is
 * rendered twice so the loop never shows a gap. Under reduced motion it
 * falls back to a static wrapping row (see Landing.module.css).
 */
export default function LogoMarquee({ logos, label }) {
  const loop = [...logos, ...logos];
  return (
    <div className={styles.marqueeWrap}>
      {label && <p className={styles.marqueeLabel}>{label}</p>}
      <div className={styles.marquee} role="list" aria-label={label || "Clients"}>
        <ul className={styles.marqueeTrack} style={{ "--count": logos.length }}>
          {loop.map((l, i) => (
            <li key={`${l.name}-${i}`} role={i < logos.length ? "listitem" : undefined} aria-hidden={i >= logos.length ? "true" : undefined}>
              <ClientLogo name={l.name} logo={l.logo || l.src} size={l.size} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
