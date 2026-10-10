import { useEffect } from "react";

export const SITE_URL = "https://www.scalerstudios.com";
export const SITE_NAME = "Scaler Studios";
export const DEFAULT_DESCRIPTION =
  "Scaler Studios is a video editing, motion design and ad creative agency. Performance creative built to be tested, measured and scaled across Meta, Google, TikTok and YouTube.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

function setMeta(attr, key, content) {
  if (content == null) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-page <head> tags for a client-rendered app. Google renders JS, and
 * social previews use the defaults baked into index.html.
 *
 *   useSeo({ title: "About", description: "...", path: "/about" })
 */
export function useSeo({ title, description, image, path, noindex = false, type = "website" } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = SITE_URL + (path ?? window.location.pathname);
    const img = image || DEFAULT_OG_IMAGE;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", img);
    setCanonical(url);
  }, [title, description, image, path, noindex, type]);
}
