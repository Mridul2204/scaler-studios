import { useRef } from "react";

/**
 * Stacked, sticky service panels on tablet/desktop. On phones the panels are
 * taller than the screen, so sticky stacking hid their lower half under the
 * next panel; there they simply flow one after another.
 */
export default function StackContainer({ panels }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full">
      {panels.map(({ bg, children }, i) => (
        <div
          key={i}
          className={`relative md:sticky md:top-0 ${i > 0 ? "md:shadow-[0_-20px_50px_rgba(0,0,0,0.18)]" : ""}`}
          style={{
            backgroundColor: bg,
            zIndex: 10 + i,
            transformOrigin: "center top",
          }}
        >
          <div className="relative w-full">
            {children}
          </div>
        </div>
      ))}
    </div>
  );
}
