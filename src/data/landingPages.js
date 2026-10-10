/**
 * Copy and configuration for ad landing pages (/lp/<slug>).
 *
 * To add a landing page: add a key here (the key is the URL slug), then add
 * the URL to public/sitemap.xml if it should be indexed. Pages render with
 * src/pages/landing/LandingPage.jsx. No other code changes needed.
 *
 * Keep copy free of em dashes. Use hyphens, commas or full stops.
 */

export const landingPages = {
  "ad-creative": {
    // ── Meta / SEO ──
    seo: {
      title: "Ad Creative Packages for Meta and Google Ads",
      description:
        "Monthly ad creative packages: static and video ads, hook variations and platform-ready resizes from a Fiverr Pro-vetted team rated 4.9 by 1,750+ clients. First batch in 5 days.",
      noindex: false,
    },
    source: "lp-ad-creative", // tagged on every lead from this page
    showPrices: true, // set false to hide package prices and send everyone to the form

    // ── Hero ──
    hero: {
      eyebrow: "Ad creative packages for brands running Meta and Google ads",
      headline: "Ad creative that keeps your campaigns",
      headlineAccent: "fresh and converting.",
      subhead:
        "Static and video ads, hook variations and platform-ready sizes, delivered every week by a team that has produced creative for Verizon, Shopify and Subway. First batch in 5 days.",
      primaryCta: "Get a free creative review",
      secondaryCta: "See packages",
      videoUrl: "https://ik.imagekit.io/zkaxtyc1u/ScalerStudios/video.mp4",
      bullets: [
        "No long contracts, month to month",
        "You own every file and every ad account",
        "Revisions turned around in 24-48 hours",
      ],
    },

    trust: {
      label: "Creative delivered for",
      logos: [
        { name: "Verizon", src: "/scaler-img/verizon-logo.png" },
        { name: "Shopify", src: "/scaler-img/shopify-logo.png" },
        { name: "Subway", src: "/scaler-img/subway-logo.png" },
        { name: "Maersk", src: "/scaler-img/maersk-logo.png" },
        { name: "Allianz", src: "/scaler-img/allianz-logo.png" },
        { name: "Bringg", src: "/scaler-img/bringg.png" },
      ],
    },

    // ── Problem ──
    problem: {
      heading: "Your ads stop working when your creative does.",
      body:
        "Meta and Google now do most of the targeting. The creative does the selling. Most accounts do not fail on strategy, they fail because the same three ads have been running for months, costs creep up and nobody has time to make the next batch.",
      points: [
        { title: "Creative fatigue is the real CPA killer", text: "Fresh angles and hooks every week keep the algorithm learning and your cost per result stable." },
        { title: "Volume beats perfection", text: "Ten tested variations teach you more than one polished ad. We build for testing, not for awards." },
        { title: "Speed is the moat", text: "A winning ad fades in weeks. The brands that scale are the ones that can replace it in days." },
      ],
    },

    // ── Deliverables ──
    deliverables: {
      heading: "What you get every month",
      items: [
        { title: "Static ads", text: "Designed in your brand, built around one clear message and a reason to click." },
        { title: "Video ads", text: "Short-form edits for Reels, Stories, Shorts and YouTube, cut from your footage, UGC or stock." },
        { title: "Hook variations", text: "Three openings per video so you can test what stops the scroll before you scale spend." },
        { title: "Platform-ready sizes", text: "9:16, 4:5 and 1:1 for every concept, named and organised so your media buyer can launch in minutes." },
        { title: "Ad copy and headlines", text: "Primary text, headlines and descriptions written to match each creative." },
        { title: "Iteration on data", text: "Share the results and we refresh what fades, double down on what wins." },
      ],
    },

    // ── Packages ──
    packages: {
      heading: "Pick a package. Scale when the numbers say so.",
      subhead: "Every package is month to month. Upgrade, downgrade or pause with a week's notice.",
      note: "Prices in USD. Media spend is billed by Meta and Google directly to you.",
      tiers: [
        {
          name: "Starter",
          price: "$1,450",
          period: "/month",
          tagline: "For brands spending up to $10k/month on ads",
          features: [
            "12 ad creatives per month (8 static, 4 video)",
            "2 hook variations per video",
            "All platform sizes included",
            "Ad copy and headlines",
            "First batch in 5 days, then weekly delivery",
            "1 revision round per creative",
          ],
          cta: "Start with Starter",
          highlight: false,
        },
        {
          name: "Growth",
          price: "$2,950",
          period: "/month",
          tagline: "For brands spending $10k-$50k/month on ads",
          features: [
            "30 ad creatives per month (18 static, 12 video)",
            "3 hook variations per video",
            "Creative testing plan: angles, hooks, formats",
            "Ad copy, headlines and landing page suggestions",
            "Shared WhatsApp or Slack channel with the team",
            "Revisions in 24-48 hours, 2 rounds per creative",
          ],
          cta: "Start with Growth",
          highlight: true,
          badge: "Most popular",
        },
        {
          name: "Scale",
          price: "$4,900",
          period: "/month",
          tagline: "For brands spending $50k+/month on ads",
          features: [
            "60+ ad creatives per month, mixed formats",
            "5 UGC videos with vetted creators included",
            "Dedicated creative strategist",
            "Weekly performance review with the team",
            "Landing page and email creative on request",
            "Priority turnaround, unlimited revisions",
          ],
          cta: "Talk to us about Scale",
          highlight: false,
        },
      ],
    },

    // ── Process ──
    process: {
      heading: "How it works",
      steps: [
        { n: "01", title: "Free creative review", text: "Send us your ad account or your current ads. We come back within two business days with what is fatiguing, what is missing and the first angles we would test." },
        { n: "02", title: "Brief and concepts", text: "A 30-minute kickoff, then a concept sheet: angles, hooks and formats mapped to your products and audiences. You approve before we produce." },
        { n: "03", title: "Production", text: "Your first batch lands in 5 days. After that, new creative every week, organised and named for launch." },
        { n: "04", title: "Launch and iterate", text: "You launch, or we do. We read the results together and the next batch is built on what the data says." },
      ],
    },

    // ── Proof ──
    proof: {
      heading: "What clients say",
      subhead: "Reviews from verified orders on our Fiverr Pro agency profile.",
    },

    // ── Samples ──
    samples: {
      heading: "Formats we produce every week",
      items: [
        { src: "/scaler-img/ad-creative.jpg", alt: "Static ad creative on a laptop screen", label: "Static ads" },
        { src: "/scaler-img/social-media-creative.jpg", alt: "Social media ad creative on phones", label: "Social creative" },
        { src: "/scaler-img/fb-ad.jpg", alt: "Facebook ad creative for a property launch", label: "Meta ads" },
        { src: "/scaler-img/videoediting.jpg", alt: "Video ad edit on a phone", label: "Video ads" },
        { src: "/scaler-img/app.avif", alt: "App ad creative on a phone", label: "App and SaaS" },
        { src: "/scaler-img/adcreative.jpg", alt: "Out-of-home ad creative", label: "Campaign creative" },
      ],
    },

    // ── Upsell ──
    upsell: {
      eyebrow: "When the creative is working",
      heading: "Want us to run the ads too?",
      body:
        "Once your creative is winning, we can take over the media buying: campaign structure, audience and creative testing, budgets and weekly reporting. You keep full ownership of your ad accounts and your data. We are the creative team that actually runs the ads.",
      cta: "Ask about ad management",
    },

    // ── FAQ ──
    faq: {
      heading: "Questions brands ask before they start",
      items: [
        { q: "How fast will we see the first creatives?", a: "The first batch is delivered within 5 days of your kickoff. After that, creative lands every week on a schedule we agree with you." },
        { q: "What do you need from us?", a: "Brand assets, product shots or footage if you have them, access to your ad account (or exports of your top ads) and 30 minutes for a kickoff. If you have no footage, we work with UGC creators, stock and motion design." },
        { q: "Do you write the ad copy?", a: "Yes. Every creative ships with primary text, headlines and descriptions. You can edit or replace any of it." },
        { q: "Who owns the files and the ad account?", a: "You do. Source files, exports and every account stay yours. We work inside your accounts as a partner, never as the owner." },
        { q: "Which platforms do you produce for?", a: "Meta (Facebook and Instagram), Google and YouTube, TikTok and LinkedIn. Every concept is delivered in the sizes each platform needs." },
        { q: "Can we start small?", a: "Yes. Most brands start with Starter or Growth for one month, see the first results, then scale. There is no minimum term." },
        { q: "We already have a media buyer or agency. Does this still work?", a: "It works well. Many clients keep their media buyer and use us as the creative engine. We organise and name everything so launch takes minutes." },
      ],
    },

    // ── Final CTA + form ──
    form: {
      eyebrow: "Free creative review",
      heading: "Tell us about your ads.",
      subhead: "Share your brand and current ad spend. We reply within one business day with a short review of your creative and a recommended package.",
      submitText: "Get my free creative review",
      privacy: "We only use your details to reply to this request.",
      defaultService: "Ad Creative",
      adSpendOptions: ["Under $5k / month", "$5k - $20k / month", "$20k - $50k / month", "$50k+ / month", "Not running ads yet"],
      needOptions: ["Static ads", "Video ads", "UGC videos", "Full ad management"],
    },
  },
};

export function getLandingPage(slug) {
  return landingPages[slug] || null;
}
