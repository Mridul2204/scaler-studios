import { getLogoUrl } from "../../lib/content";

/**
 * A client logo drawn as a single-colour silhouette in the current text
 * colour. The image is used as a CSS mask, so any logo with a transparent
 * background (SVG, PNG, WebP) renders in the same tone as its neighbours,
 * which is what keeps a logo row looking calm.
 *
 * The hidden <img> inside only exists to give the box the logo's own aspect
 * ratio at the chosen height, so spacing stays even without hard-coding
 * widths. `size` is a percentage nudge per logo (wordmarks and icon lockups
 * carry different visual weight at the same pixel height).
 *
 * Height comes from the CSS variable --logo-h on any ancestor (default 28px),
 * so a section can scale all its logos at once per breakpoint.
 */
export default function ClientLogo({ name, logo, size = 100, className = "" }) {
  const url = getLogoUrl(logo);
  if (!url) return null;
  const scale = (parseInt(size, 10) || 100) / 100;
  const cssUrl = `url("${url}")`;
  const style = {
    height: `calc(var(--logo-h, 28px) * ${scale})`,
    WebkitMaskImage: cssUrl,
    maskImage: cssUrl,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    backgroundColor: "currentColor",
  };
  return (
    <span role="img" aria-label={name} className={`inline-block align-middle ${className}`} style={style}>
      <img
        src={url}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={{ display: "block", height: "100%", width: "auto", visibility: "hidden" }}
      />
    </span>
  );
}
