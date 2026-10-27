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

landingPages["video-editing"] = {
  // ── Meta / SEO ──
  seo: {
    title: "Unlimited Video Editing Subscription: Short and Long-Form",
    description:
      "Flat monthly video editing for creators, founders and brands. Shorts in 24-48 hours, long-form in 2-4 days, unlimited requests, from a Fiverr Pro-vetted team rated 4.9 by 1,750+ clients.",
    noindex: false,
  },
  source: "lp-video-editing",
  showPrices: true,

  // ── Hero ──
  hero: {
    eyebrow: "Video editing subscription for creators, founders and brands",
    headline: "Unlimited video editing,",
    headlineAccent: "one flat monthly fee.",
    subhead:
      "Short-form and long-form edits from a 10-person team rated 4.9 across 1,750+ client reviews, with work delivered for Verizon, Shopify and Subway. Shorts back in 24-48 hours, long-form in 2-4 days. Pause or cancel any time.",
    primaryCta: "Get a free content review",
    secondaryCta: "See plans",
    videoUrl: "https://ik.imagekit.io/zkaxtyc1u/ScalerStudios/video.mp4",
    bullets: [
      "Unlimited requests, queued and worked in order",
      "Shorts in 24-48 hours, long-form in 2-4 days",
      "No contracts, pause or cancel any month",
    ],
  },

  trust: {
    label: "Edits delivered for",
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
    heading: "Editing is the bottleneck between recording and publishing.",
    body:
      "You can film in an afternoon. Then the footage sits for two weeks because nobody has time to cut it, caption it and resize it for every platform. Freelancers disappear, in-house editors are expensive to hire and slow to replace, and the channel goes quiet. A subscription editing team removes the bottleneck for a fixed monthly cost.",
    points: [
      { title: "Consistency beats virality", text: "Channels grow on cadence. Weekly uploads and daily shorts need an editing pipeline, not a favour from a friend." },
      { title: "One recording, ten assets", text: "A 20-minute video becomes shorts, clips, quotes and thumbnails. Repurposing is where the reach comes from." },
      { title: "A team, not a freelancer", text: "Editor, motion designer and project manager on every plan, so a holiday or a sick day never stalls your calendar." },
    ],
  },

  // ── Deliverables ──
  deliverables: {
    heading: "What's included in every plan",
    items: [
      { title: "Short-form edits", text: "Reels, Shorts and TikToks cut for retention: hooks, captions, b-roll, sound design and pacing for each platform." },
      { title: "Long-form edits", text: "YouTube videos, podcasts, courses, webinars and talking-head content with clean cuts, graphics and music." },
      { title: "Captions and subtitles", text: "Styled captions on every short, accurate subtitles on long-form, multi-language on request." },
      { title: "Motion graphics and titles", text: "Intros, lower thirds, animated text and branded templates that make every video recognisably yours." },
      { title: "Thumbnails and covers", text: "Click-worthy thumbnails and cover frames designed to match the edit, delivered with the video." },
      { title: "Repurposing", text: "One long recording turned into a week of shorts, clips and quote cards, sized for every feed." },
    ],
  },

  // ── Packages (modelled on subscription editing plans; prices in USD) ──
  packages: {
    heading: "Simple plans. Unlimited requests.",
    subhead: "Every plan is month to month with no contract. Queue as many requests as you like; your plan sets how many are in production at once.",
    note: "Prices in USD. A request is one deliverable (one video or one set of shorts from one recording). Unused long-form edits do not roll over.",
    tiers: [
      {
        name: "Startup",
        price: "$999",
        period: "/month",
        tagline: "For creators and founders publishing 1-2 videos a week",
        features: [
          "2 long-form edits per month",
          "Unlimited short-form requests, 1 in production at a time",
          "Shorts in 24-48 hours, long-form in 2-4 days",
          "10+ editing styles, captions included",
          "2 revision rounds per video",
          "Dedicated editor and project manager",
        ],
        cta: "Start with Startup",
        highlight: false,
      },
      {
        name: "Growth",
        price: "$2,499",
        period: "/month",
        tagline: "For brands and channels posting daily",
        features: [
          "5 long-form edits per month",
          "Unlimited requests, 3 in production at a time",
          "25+ editing styles, thumbnails included",
          "Posting support: captions, hashtags, scheduling-ready files",
          "3 revision rounds per video",
          "3-person team: editor, motion designer, project manager",
        ],
        cta: "Start with Growth",
        highlight: true,
        badge: "Most popular",
      },
      {
        name: "Creator",
        price: "$4,999",
        period: "/month",
        tagline: "For media brands, agencies and multi-channel teams",
        features: [
          "10 long-form edits per month",
          "Unlimited requests, 4 in production at a time",
          "Advanced editing, motion design and a branded template kit",
          "Priority turnaround on every request",
          "Unlimited revisions",
          "5-person creative team with a lead editor",
        ],
        cta: "Start with Creator",
        highlight: false,
      },
    ],
    more: {
      heading: "Need more than ten long-form edits a month?",
      text: "Studio and Enterprise plans from $7,999/month: unlimited edits, a dedicated production team, multi-language versions and cinematic colour grading, built around your calendar.",
      cta: "Talk to us about Studio",
    },
  },

  // ── Process ──
  process: {
    heading: "How it works",
    steps: [
      { n: "01", title: "Free content review", text: "Send us your channel or a few recent videos. Within two business days you get a short review: what to cut, what to repurpose and which plan fits." },
      { n: "02", title: "Onboard in a day", text: "Pick a plan, share your brand assets and footage folder, meet your project manager on a 30-minute call. Your first request goes into the queue the same day." },
      { n: "03", title: "We edit", text: "Shorts come back in 24-48 hours, long-form in 2-4 days. Review in the browser, leave timestamped comments, approve." },
      { n: "04", title: "Publish and repeat", text: "Keep the queue full. We keep the calendar full. Scale the plan up or down with a week's notice." },
    ],
  },

  // ── Proof ──
  proof: {
    heading: "What clients say",
    subhead: "Reviews from verified orders on our Fiverr Pro agency profile.",
  },

  // ── Samples ──
  samples: {
    heading: "Styles we edit every week",
    items: [
      { src: "/scaler-img/videoediting.jpg", alt: "Short-form video edit on a phone", label: "Shorts and Reels" },
      { src: "/scaler-img/video-editing.jpg", alt: "YouTube thumbnail and long-form edit", label: "YouTube" },
      { src: "/scaler-img/video-editor.jpg", alt: "Editing timeline on a laptop", label: "Talking head and podcast" },
      { src: "/scaler-img/motion-design.jpg", alt: "Motion graphics still", label: "Motion graphics" },
      { src: "/scaler-img/social-media-creative.jpg", alt: "Social media creative on phones", label: "Social content" },
      { src: "/scaler-img/Video-Services-1.jpg", alt: "Product video on a laptop", label: "Product and explainer" },
    ],
  },

  // ── Upsell (cross-sell to the ad creative page) ──
  upsell: {
    eyebrow: "Running paid ads too?",
    heading: "Edits that double as ad creative.",
    body:
      "The same team produces performance ad creative for Meta, Google and TikTok: hook variations, platform sizes and ad copy, iterated on results. If your videos need to sell, not just get watched, start there.",
    cta: "See ad creative packages",
    href: "/lp/ad-creative",
  },

  // ── FAQ ──
  faq: {
    heading: "Questions creators ask before they start",
    items: [
      { q: "Is there really no limit on requests?", a: "You can queue as many requests as you like. Your plan sets how many are in production at the same time (1, 3 or 4). The rest wait in line and start the moment a slot frees up." },
      { q: "What counts as one request?", a: "One deliverable: one long-form video, or one set of shorts cut from one recording. Bundling several distinct videos into one request gets split by your project manager so turnaround stays honest." },
      { q: "How fast is turnaround?", a: "Short-form in 24-48 hours, long-form in 2-4 business days (we work Monday to Saturday). Priority turnaround on the Creator plan moves your requests to the front of the queue." },
      { q: "What do you need from us?", a: "Raw footage or recordings in a shared folder, your brand assets, and a short brief per request: goal, audience, tone and any references. Incomplete requests pause in 'needs info' until we have what we need." },
      { q: "Who owns the videos?", a: "You do. Finished videos and project files are yours once delivered. We ask to showcase work in our portfolio; opt out in writing before the first delivery and we never will." },
      { q: "Can I pause or cancel?", a: "Yes, any month. Give us a week's notice before your renewal date and the plan pauses or ends. No contracts, no cancellation fees." },
      { q: "What don't you edit?", a: "Explicit content and wedding albums. Everything else, from fitness reels to 60-minute webinars, is in scope." },
    ],
  },

  // ── Final CTA + form ──
  form: {
    eyebrow: "Free content review",
    heading: "Tell us what you publish.",
    subhead: "Share your channel or links to a few recent videos. We reply within one business day with a short review and the plan we would recommend.",
    submitText: "Get my free content review",
    privacy: "We only use your details to reply to this request.",
    defaultService: "Video Editing",
    brandLabel: "Channel or website",
    brandPlaceholder: "youtube.com/@yourchannel",
    messagePlaceholder: "What you publish, where, and what slows you down. Links to recent videos help.",
    selectLabel: "How much do you publish?",
    selectOptions: ["Just getting started", "1-4 videos a month", "5-15 videos a month", "16+ videos a month", "Not sure yet"],
    needLabel: "What do you need edited?",
    needOptions: ["Shorts / Reels / TikTok", "Long-form YouTube", "Podcast", "Courses / webinars", "Ads / UGC"],
  },
};

// SaaS explainer page: the landing page for the cold email campaign
// "SaaS Explainers" (free script offer). Packages match the outbound playbook.
landingPages["saas-explainers"] = {
  // ── Meta / SEO ──
  seo: {
    title: "Animated Explainer Videos for SaaS Startups",
    description:
      "Animated explainer videos for SaaS products, from $2,500. Get a free script and the first storyboard frames within 48 hours, no call needed.",
    noindex: false,
  },
  source: "lp-saas-explainers",
  showPrices: true,
  whatsappMessage: "Hi Mridul, I came from your SaaS explainer page and want to talk about a video for our product.",
  emailSubject: "SaaS explainer enquiry",
  thankYou: {
    body: "Mridul will send your free script and the first storyboard frames within 48 hours.",
  },

  // ── Hero ──
  hero: {
    eyebrow: "Animated explainer videos for SaaS startups",
    headline: "Show what your product does",
    headlineAccent: "in 60 seconds.",
    subhead:
      "We script, storyboard and animate explainer videos for software products. Send us your site and we will write your script and sketch the first frames, free, within 48 hours.",
    primaryCta: "Get a free script",
    secondaryCta: "Watch samples",
    secondaryHref: "#work",
    videoUrl: "https://ik.imagekit.io/zkaxtyc1u/ScalerStudios/video.mp4",
    bullets: [
      "Free script and first frames in 48 hours",
      "You approve every stage before we animate",
      "Fixed price, 50% on script approval",
    ],
  },

  trust: {
    label: "Videos delivered for",
    logos: [
      { name: "Verizon", src: "/scaler-img/verizon-logo.png" },
      { name: "Shopify", src: "/scaler-img/shopify-logo.png" },
      { name: "Subway", src: "/scaler-img/subway-logo.png" },
      { name: "Maersk", src: "/scaler-img/maersk-logo.png" },
      { name: "Allianz", src: "/scaler-img/allianz-logo.png" },
      { name: "Bringg", src: "/scaler-img/bringg.png" },
    ],
  },

  // ── Work: playable samples (youtubeId plays inline; videoUrl is a
  // self-hosted mp4, e.g. ImageKit; href opens an external player) ──
  work: {
    heading: "Recent work",
    subhead: "Explainers and motion pieces made by the team that will make yours.",
    items: [
      { label: "Eve.ai", kind: "Product explainer", duration: "1:19", href: "https://f.io/_b0lNMvQ" },
      { label: "Venterr", kind: "Corporate explainer", duration: "1:12", href: "https://f.io/NNL1S5DV" },
      { label: "Gumlet", kind: "SaaS product promo", duration: "0:30", youtubeId: "uLcEsdQRATQ" },
      { label: "DAC", kind: "Brand motion graphics", duration: "0:33", youtubeId: "tNcpwhmDOsU" },
    ],
  },

  // ── Problem ──
  problem: {
    heading: "Your homepage has seconds to explain the product.",
    body:
      "Most SaaS homepages ask visitors to read their way to understanding: a tagline, a feature grid, a screenshot. A short explainer does that work in about a minute, and it keeps working on your homepage, in sales emails, on demo calls, in onboarding and in ads.",
    points: [
      { title: "One minute, one clear story", text: "Problem, product, outcome. A tight script forces the message your whole site should be saying." },
      { title: "Made once, used everywhere", text: "The same video runs on your homepage, in outbound, on demo calls and, cut down, in your ads." },
      { title: "Your product as it really is", text: "We animate your real interface from screenshots or a demo account, styled to your brand." },
    ],
  },

  // ── Deliverables ──
  deliverables: {
    heading: "What every explainer includes",
    items: [
      { title: "Script", text: "Written by us from your site and a short kickoff call. You approve it before anything is drawn." },
      { title: "Storyboard", text: "A frame for every scene, so you see the whole video before animation starts." },
      { title: "Voiceover", text: "A professional voice in the accent that fits your market." },
      { title: "Animation", text: "2D motion graphics in your brand colours and type, with your product UI recreated in motion." },
      { title: "Music and sound", text: "Licensed music and sound design, mixed for the web." },
      { title: "Ad cutdowns", text: "On Launch Kit and Full Funnel: short 9:16 and 1:1 versions with captions, ready for LinkedIn and Meta." },
    ],
  },

  // ── Packages (match the outbound playbook; prices in USD) ──
  packages: {
    heading: "One fixed price. No surprises.",
    subhead: "Pick the package that fits your launch. You pay 50% when you approve the script and 50% on delivery.",
    note: "Prices in USD. Voiceover, licensed music and 2 revision rounds per stage are included in every package. Timelines start when you approve the script.",
    tiers: [
      {
        name: "Starter",
        price: "$2,500",
        period: "one-time",
        tagline: "For a homepage or product page explainer",
        features: [
          "60-second 2D motion graphics explainer",
          "Script and storyboard by our team",
          "Professional voiceover and licensed music",
          "2 revision rounds per stage",
          "Delivered in 3 weeks",
        ],
        cta: "Start with Starter",
        highlight: false,
      },
      {
        name: "Launch Kit",
        price: "$3,500",
        period: "one-time",
        tagline: "For a launch that needs the explainer and the ads",
        features: [
          "90-second explainer",
          "3 ad cutdowns in 9:16 and 1:1, captioned",
          "Script, storyboard, voiceover and music",
          "2 revision rounds per stage",
          "Delivered in 3 weeks",
        ],
        cta: "Start with Launch Kit",
        highlight: true,
        badge: "Best for launches",
      },
      {
        name: "Full Funnel",
        price: "$4,000",
        period: "one-time",
        tagline: "For teams running paid acquisition",
        features: [
          "90-second explainer",
          "5 ad cutdowns, captioned",
          "15-second homepage loop",
          "Source files included",
          "Delivered in 4 weeks",
        ],
        cta: "Start with Full Funnel",
        highlight: false,
      },
    ],
  },

  // ── Process ──
  process: {
    heading: "How it works",
    steps: [
      { n: "01", title: "Free script", text: "Send your website. Within 48 hours you get a 60 to 90 second script and the first 3-4 storyboard frames. No call needed." },
      { n: "02", title: "Kickoff", text: "If you like the direction, a 20-minute call locks the message, the voice and the package. You pay 50% once the script is approved." },
      { n: "03", title: "Storyboard and voice", text: "Every scene gets a frame and the voiceover is recorded. You approve both before animation starts." },
      { n: "04", title: "Animation and delivery", text: "We animate, add music and sound, and deliver files sized for your homepage, demos and ads. The other 50% is due on delivery." },
    ],
  },

  // ── Proof ──
  proof: {
    heading: "What clients say",
    subhead: "Reviews from verified orders on our Fiverr Pro agency profile.",
  },

  // ── Upsell (cross-sell to the ad creative page) ──
  upsell: {
    eyebrow: "After the launch",
    heading: "Turn your explainer into ads.",
    body:
      "The same team produces ad creative for Meta, Google and LinkedIn. Your explainer becomes hooks, cutdowns and statics, refreshed as the results come in.",
    cta: "See ad creative packages",
    href: "/lp/ad-creative",
  },

  // ── FAQ ──
  faq: {
    heading: "Questions founders ask first",
    items: [
      { q: "What exactly is free?", a: "A 60 to 90 second script written for your product, plus the first 3-4 storyboard frames, within 48 hours of your request. No call and no obligation. If you don't go ahead, you keep the script." },
      { q: "Why would you write a script for free?", a: "It is the fastest way for you to judge our thinking before you spend anything. We write a limited number each week, for companies with a live product." },
      { q: "How long does a video take?", a: "Three weeks for Starter and Launch Kit, four weeks for Full Funnel, counted from script approval. Tell us your launch date and we plan backwards from it." },
      { q: "What do you need from us?", a: "Your website, a product walkthrough or demo login, your brand assets and 20 minutes for a kickoff call. We write, you approve." },
      { q: "Can you show our actual product?", a: "Yes. We recreate your interface in motion graphics from screenshots or a demo account, so it looks sharp and is easy to update when the product changes." },
      { q: "Who owns the video?", a: "You do. The final files are yours on delivery, and Full Funnel includes the source files." },
      { q: "How does payment work?", a: "Prices are fixed and in USD. You pay 50% when you approve the script and 50% when the video is delivered." },
    ],
  },

  // ── Final CTA + form ──
  form: {
    eyebrow: "Free script",
    heading: "Get your free script.",
    subhead: "Share your product website. Within 48 hours we send a 60 to 90 second script and the first storyboard frames. No call needed.",
    submitText: "Send me my free script",
    privacy: "We only use your details to reply to this request.",
    defaultService: "SaaS Explainer",
    brandLabel: "Product website",
    brandPlaceholder: "yourproduct.com",
    messagePlaceholder: "What does the product do, who is it for, and where will the video live?",
    selectLabel: "When do you need the video?",
    selectPlaceholder: "Select one",
    selectOptions: ["Within a month", "In 1-3 months", "Later this year", "Just exploring"],
    needLabel: "What do you need?",
    needOptions: ["Homepage explainer", "Launch video", "Ad cutdowns", "Demo or onboarding video"],
  },
};

export function getLandingPage(slug) {
  return landingPages[slug] || null;
}

/** The landing page a lead came from, by its `source` tag (used on /thank-you). */
export function getLandingPageBySource(source) {
  if (!source) return null;
  return Object.values(landingPages).find((p) => p.source === source) || null;
}
