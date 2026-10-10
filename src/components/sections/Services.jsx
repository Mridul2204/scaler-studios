import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import strategyVid from "../../assets/vid2.mp4";

export default function ServiceBlock({
  title,
  description,
  list,
  textColor = "text-[#1a1a1a]",
  imageContent,
  videoUrl,
  imageUrl,
  mediaTitle,
  mediaLabel,
}) {
  const items = Array.isArray(list)
    ? list
    : typeof list === "string"
      ? list.split(",").map((s) => s.trim()).filter(Boolean)
      : [];

  const dynamicContent = (videoUrl || imageUrl) ? (
    <div className="w-full h-full bg-[#0b0215] text-white relative overflow-hidden flex items-center justify-center">
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          key={videoUrl}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={videoUrl}
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={imageUrl}
          alt=""
        />
      )}
      <div className="relative z-10 p-6 md:p-8 flex flex-col items-start justify-center w-full h-full">
        {mediaLabel && (
          <div className="absolute top-6 right-6 text-sm font-bold tracking-tighter flex items-center gap-2">
            <div className="w-4 h-4 bg-white/20 rotate-45" /> {mediaLabel}
          </div>
        )}
        {mediaTitle && (
          <h3 className="text-[28px] md:text-[32px] font-bold leading-[1.1] tracking-tighter" style={{ fontFamily: "'PP Mori', sans-serif" }}>
            {mediaTitle.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h3>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  ) : imageContent;
  return (
    <div
      className={`w-full flex flex-col md:flex-row items-stretch ${textColor} relative`}
      style={{ minHeight: "auto" }}
    >
      {/* LEFT: title + description + list */}
      <div className="w-full md:w-[60%] flex flex-col justify-start shrink-0 items-start p-6 md:p-14 gap-8 md:gap-16">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-inherit font-bold leading-[0.92] tracking-tight"
          style={{
            fontFamily: "'PP Mori', sans-serif",
            fontSize: "clamp(2.6rem, 6.6vw, 6rem)",
          }}
        >
          {title}
        </motion.h2>

        {/* Description + list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start w-full"
        >
          <p
            className="text-[18px] md:text-[22px] font-normal leading-[1.45] tracking-tight max-w-[42ch]"
            style={{ fontFamily: "'Nib Pro', serif", fontStyle: "normal" }}
          >
            {description}
          </p>
          <ul
            className="text-[14px] md:text-[16px] font-normal leading-[1.9]"
            style={{ fontFamily: "'PP Mori', sans-serif" }}
          >
            {items.map((item, i) => (
              <li key={i} className="hover:opacity-60 cursor-pointer transition-opacity duration-200">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      {/* RIGHT: image at top-right corner with padding */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-full md:w-[40%] flex items-start justify-end px-6 pb-8 pt-0 md:p-10"
      >
        <div className="w-full max-w-[420px] aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden">
          {dynamicContent}
        </div>
      </motion.div>

    </div>
  );
}

/**
 * Fallback visual for a service panel when the CMS has no image/video for it.
 * Picks a Scaler image from /public/scaler-img by the panel title.
 */
const PANEL_IMAGES = [
  [/video|edit|youtube|reel|short/i, "/scaler-img/videoediting.jpg"],
  [/motion|animation|explainer/i, "/scaler-img/motion-design.jpg"],
  [/ad creative|creative/i, "/scaler-img/ad-creative.jpg"],
  [/performance|marketing|ads|media/i, "/scaler-img/google-ads.jpg"],
  [/social|content/i, "/scaler-img/social-media-creative.jpg"],
  [/graphic|design|brand|identity/i, "/scaler-img/Graphic-design.jpg"],
  [/web|site|app|digital/i, "/scaler-img/webdesign.jpg"],
  [/campaign/i, "/scaler-img/adcreative.jpg"],
];

export function PanelVisual({ title = "" }) {
  const match = PANEL_IMAGES.find(([re]) => re.test(title));
  const src = match ? match[1] : "/scaler-img/Video-Services-1.jpg";
  return (
    <div className="w-full h-full relative overflow-hidden bg-black/5">
      <img src={src} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

// Kept for backwards compatibility; all map to PanelVisual now.
export const StrategyVideo = () => <PanelVisual title="video" />;
export const VisualImage = () => <PanelVisual title="motion" />;
export const WebsiteImage = () => <PanelVisual title="ad creative" />;
export const ProductImage = () => <PanelVisual title="performance" />;
