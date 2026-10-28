import { useEffect, useRef } from "react";
import styles from "./Landing.module.css";
import { trackEvent } from "../../lib/analytics";

/**
 * Hero reel: a column of sample cards that drifts upward on its own, the
 * card nearest the middle drawn full size and the others slightly smaller
 * and dimmer. The track holds every item twice so the loop is seamless.
 *
 * Cards show the sample's poster (its YouTube frame, or `previewPoster`)
 * and, once a sample has `previewSrc` on ImageKit, a silent looping clip
 * instead. Clicking a card scrolls to that sample in the Work section.
 * Under reduced motion the column stands still.
 */
export default function HeroReel({ items, onPick }) {
  const trackRef = useRef(null);
  const loop = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      track.querySelectorAll("[data-card]").forEach((card) => card.style.setProperty("--focus", "1"));
      return undefined;
    }
    const container = track.parentElement;
    let raf = 0;
    const tick = () => {
      const box = container.getBoundingClientRect();
      const mid = box.top + box.height / 2;
      track.querySelectorAll("[data-card]").forEach((card) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid) / (box.height / 2);
        const focus = Math.max(0, 1 - Math.min(1, d));
        card.style.setProperty("--focus", focus.toFixed(3));
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [items]);

  return (
    <div className={styles.reel} aria-label="Recent work previews" role="group">
      <div className={styles.reelTrack} ref={trackRef} style={{ "--count": items.length }}>
        {loop.map((item, i) => (
          <ReelCard key={`${item.label}-${i}`} item={item} hidden={i >= items.length} onPick={onPick} />
        ))}
      </div>
    </div>
  );
}

function posterFor(item) {
  if (item.previewPoster) return item.previewPoster;
  if (item.previewSrc) return `${item.previewSrc}/ik-thumbnail.jpg?tr=so-${item.previewStart ?? 0},w-720`;
  if (item.youtubeId) return `https://i.ytimg.com/vi/${item.youtubeId}/maxresdefault.jpg`;
  return item.poster || "";
}

function ReelCard({ item, hidden, onPick }) {
  const videoRef = useRef(null);
  const clip = item.previewUrl || (item.previewSrc ? `${item.previewSrc}?tr=so-${item.previewStart ?? 0},du-${item.previewDuration ?? 10},w-720,ac-none,q-60` : "");

  useEffect(() => {
    const video = videoRef.current;
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
      { threshold: 0.3 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [clip]);

  return (
    <button
      type="button"
      data-card
      className={styles.reelCard}
      aria-hidden={hidden ? "true" : undefined}
      tabIndex={hidden ? -1 : 0}
      aria-label={`${item.label}: ${item.kind}. Jump to this sample`}
      onClick={() => {
        trackEvent("reel_click", { sample: item.label });
        if (onPick) onPick(item);
      }}
    >
      {clip ? (
        <video ref={videoRef} src={clip} poster={posterFor(item)} muted loop playsInline preload="metadata" disablePictureInPicture aria-hidden="true" tabIndex={-1} />
      ) : (
        <img src={posterFor(item)} alt="" loading={hidden ? "lazy" : "eager"} decoding="async" />
      )}
      <span className={styles.reelShade} />
      <span className={styles.reelMeta}>
        <span className={styles.reelName}>{item.label}</span>
        <span className={styles.reelKind}>{item.kind}</span>
      </span>
      {item.duration && <span className={styles.reelDuration}>{item.duration}</span>}
    </button>
  );
}
