import { createElement, useEffect, useRef, useState } from "react";

/**
 * Fades an element up when it scrolls into view. CSS only, no animation
 * library, so landing pages stay small. `as` picks the element type.
 */
export default function Reveal({ as = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    // Safety net: never leave content invisible (slow devices, odd scroll
    // containers, screenshot tools). After a moment everything is shown.
    const t = setTimeout(() => setShown(true), 2000);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      className,
      style: {
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(18px)",
        transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      },
      ...rest,
    },
    children
  );
}
