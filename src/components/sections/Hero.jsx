import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmileLogo from "../ui/SmileLogo";
import { usePageContent } from "../../hooks/usePageContent";
import { getContent } from "../../lib/content";
import { defaults } from "../../lib/contentDefaults";
import { trackEvent } from "../../lib/analytics";

const IMAGEKIT_VIDEO = "https://ik.imagekit.io/zkaxtyc1u/ScalerStudios/video.mp4";

gsap.registerPlugin(ScrollTrigger);

export function HeroTopText() {
  return null;
}

/* Speaker icon: waves when sound is on, a cross when it is off. */
function SoundIcon({ on }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" stroke="none" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </>
      ) : (
        <>
          <path d="M16 9l5 6" />
          <path d="M21 9l-5 6" />
        </>
      )}
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  // The showreel autoplays muted (browsers require it); this toggle lets
  // people turn the sound on. It mutes itself again once the video scrolls
  // out of view so audio never keeps playing under the rest of the page.
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !soundOn;
    video.muted = !next;
    if (next) {
      video.volume = 1;
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    }
    setSoundOn(next);
    trackEvent("hero_sound", { on: next });
  };

  useEffect(() => {
    if (!soundOn) return undefined;
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.muted = true;
          setSoundOn(false);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [soundOn]);

  const { sections } = usePageContent("home");
  const headingBold = getContent(sections, "hero.headingBold", defaults.home.hero.headingBold);
  const headingItalic = getContent(sections, "hero.headingItalic", defaults.home.hero.headingItalic);
  const cmsVideoUrl = getContent(sections, "hero.videoUrl", defaults.home.hero.videoUrl);
  const activeVideoUrl = cmsVideoUrl || IMAGEKIT_VIDEO;

  // useLayoutEffect ensures cleanup (ctx.revert) runs BEFORE React removes
  // the DOM nodes, so GSAP can properly un-pin and remove the pin spacer.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768;
      const startWidth = isMobile ? window.innerWidth - 48 : 320;
      const startHeight = isMobile ? Math.min((startWidth * 9) / 16, 200) : 180;
      // On mobile, if we want it centered, left should be (innerWidth - startWidth) / 2
      // But actually if startWidth is innerWidth - 48, then left is 24 anyway.
      // If we want it smaller and centered on mobile:
      // Phones: a full-width 16:9 card so the hero is not mostly empty space.
      const actualStartWidth = isMobile ? startWidth : 320;
      const actualStartHeight = isMobile ? startHeight : 180;
      const actualStartLeft = 24;

      gsap.set(videoWrapperRef.current, {
        bottom: 24,
        left: actualStartLeft,
        width: actualStartWidth,
        height: actualStartHeight,
        borderRadius: 12,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      tl.to(videoWrapperRef.current, {
        width: () => window.innerWidth - 48,
        height: () => window.innerHeight - 120,
        bottom: 24,
        left: 24,
        borderRadius: 16,
        ease: "power2.inOut",
      }, 0);

      tl.to([textRef.current, logoRef.current], {
        opacity: 0,
        y: -30,
        ease: "power1.inOut",
      }, 0);
    }, containerRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert(); // runs before DOM removal — pin spacer is properly cleaned up
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-[#073624]">


      {/* TEXT — Centered */}
      <div
        ref={textRef}
        className="absolute top-[30vh] md:top-[40vh] w-full flex justify-center z-20 pointer-events-none px-6"
      >
        <h2 className="text-center tracking-tight sm:whitespace-nowrap text-white leading-[1.15] md:leading-[1.1]" style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.1rem)", fontFamily: "'Nib Pro', serif", fontWeight: 300 }}>
          {headingBold} {headingItalic}
        </h2>
      </div>

      {/* VIDEO — small card bottom-left, expands on scroll */}
      <div
        ref={videoWrapperRef}
        style={{
          position: "absolute",
          borderRadius: "12px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          backgroundColor: "#0A2629",
          overflow: "hidden",
          zIndex: 40,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          src={activeVideoUrl}
        />
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
          title={soundOn ? "Sound off" : "Sound on"}
          className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-10 inline-flex items-center justify-center gap-2 h-11 min-w-11 md:h-10 md:min-w-10 px-3 rounded-full bg-black/45 hover:bg-black/65 text-white text-xs font-semibold tracking-wide border border-white/20 backdrop-blur-sm transition-colors cursor-pointer"
        >
          <SoundIcon on={soundOn} />
          <span className="hidden sm:inline">{soundOn ? "Sound on" : "Sound off"}</span>
        </button>
      </div>

    </section>
  );
}
