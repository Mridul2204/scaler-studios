/**
 * Source-of-truth copy for the public site. Every paragraph, heading,
 * label, and button across every page lives here and acts as the
 * fallback for the CMS — components read from MongoDB via
 * usePageContent(page) and fall back to these defaults if a value is
 * missing or the fetch hasn't resolved yet.
 *
 * Keep this file pure data. Do not import it from server-side code; the
 * seed script duplicates the shape it needs.
 */
export const defaults = {
  // ─────────────── HOME ───────────────
  home: {
    hero: {
      headingBold: "We Build Creative",
      headingItalic: "That Drives Growth",
      videoUrl: "https://ik.imagekit.io/zkaxtyc1u/ScalerStudios/video.mp4",
    },
    about: {
      heading: "Video, motion, and design\nbuilt for brands that need\nto move fast and convert.",
      buttonText: "About us",
      keyFactsLabel: "Key Facts",
      facts: [
        { value: "2020", label: "founded with a simple goal: make creative that performs" },
        { value: "50+", label: "brands helped across e-commerce, tech, finance, and entertainment" },
        { value: "3 services", label: "video, motion, and ad creative — under one roof" },
        { value: "0 layers", label: "you work directly with the team doing the work" },
        { value: "Days,\nnot weeks", label: "from brief to delivered assets" },
      ],
    },
    // Client strip under the About section (logos come from clients.list).
    clients: {
      label: "Brands we have worked with",
      linkText: "See our work",
    },
    insights: {
      heading: "Latest insights",
      trendingButton: "What's trending.",
      cards: [
        {
          bg: "#F4F6F5",
          brand: "SCALER.STUDIOS",
          label: "Performance Creative Is Getting Cheaper.",
          labelColor: "#073624",
          title: "The Cost of Ad\nCreative Is Dropping.",
          desc: "How better tools, faster workflows, and smart iteration are reshaping what brands spend on paid social — and why quality still wins.",
          slug: "cost-of-ad-creative",
        },
        {
          bg: "#1DBF73",
          brand: "SCALER.STUDIOS",
          label: "Volume Beats Perfection in Paid Social",
          labelColor: "#073624",
          title: "Why Volume Beats\nPerfection",
          desc: "The brands scaling fastest on Meta and TikTok are the ones testing more creative, not the ones obsessing over a single perfect ad.",
          slug: "volume-beats-perfection",
        },
        {
          bg: "#073624",
          brand: "SCALER.STUDIOS",
          label: "How Motion Creative Converts",
          labelColor: "#1DBF73",
          title: "Motion, Speed\n& Performance.",
          desc: "A practical look at how motion graphics, fast turnarounds, and platform-native formats are driving better results for DTC and SaaS brands.",
          slug: "motion-speed-performance",
        },
      ],
    },
    servicesLabel: "Services",
    servicePanels: [
      {
        bg: "#073624",
        title: "Video Editing",
        description: "Footage turned into stories that hold attention and earn the click, across every format you publish.",
        items: ["Short-Form Edits", "Long-Form Edits", "YouTube & Social", "Reels & Shorts", "Subtitles & Captions", "Repurposing", "Color & Sound"],
        textColor: "text-[#fbf0f2]",
      },
      {
        bg: "#F4F6F5",
        title: "Motion Design",
        description: "Animation and graphics that bring brands to life and make every frame feel considered and intentional.",
        items: ["Logo Animation", "Kinetic Typography", "Explainer Videos", "Motion Graphics", "Animated Ads"],
        textColor: "text-[#020817]",
      },
      {
        bg: "#1DBF73",
        title: "Ad Creative",
        description: "Performance-led creative built to be tested, measured, and scaled across Meta, TikTok, and beyond.",
        items: ["Static Ads", "Video Ads", "Hook Variations", "A/B Test Sets", "Format Adaptation"],
        textColor: "text-[#020817]",
      },
      {
        bg: "#0E2E2D",
        title: "Performance Marketing",
        description: "Modern marketing built on testing, data, and fast creative execution, so growth is handled end to end.",
        items: ["Campaign Management", "Meta & Google Ads", "Audience Strategy", "Media Buying", "Conversion Optimization"],
        textColor: "text-[#fbf0f2]",
      },
    ],
    cta: {
      left: {
        topBold: "Ready When You Are",
        topItalic: "Video, motion, design & marketing.",
        heading: "Start a Project",
      },
      right: {
        topBold: "Creative Review",
        topItalic: "A focused look at your current creative to find quick wins and opportunities.",
        heading: "Request a Review",
      },
    },
  },

  // ─────────────── ABOUT ───────────────
  about: {
    hero: {
      estHeading: "Est. 2020",
      taglineBold: "Built around craft,",
      taglineItalic: "speed, and reliability.",
    },
    paragraphs: [
      { text: "Scaler Studios is a creative studio partnering with brands during moments of growth, launch, and scale." },
      { text: "Working across video, motion, design, and marketing, we help founders, marketers, and teams turn raw footage and rough ideas into work that performs, where speed matters and quality cannot slip." },
      { text: "Built around craft, speed, and reliability, Scaler Studios combines a senior creative team with fast, scalable production to deliver real results across brands, platforms, and markets." },
    ],

  },

  // ─────────────── SERVICES ───────────────
  services: {
    hero: {
      heading: "Video, motion, and design built for brands that need to move fast and convert",
    },
    servicePanels: [
      {
        bg: "#073624",
        title: "Video Editing",
        description: "Footage turned into stories that hold attention and earn the click, across every format you publish.",
        items: ["Short-Form Edits", "Long-Form Edits", "YouTube & Social", "Reels & Shorts", "Subtitles & Captions", "Repurposing", "Color & Sound", "Thumbnails", "Delivery in All Formats"],
        textColor: "text-[#fbf0f2]",
      },
      {
        bg: "#F4F6F5",
        title: "Motion Design",
        description: "Animation and graphics that bring brands to life and make every frame feel considered and intentional.",
        items: ["Logo Animation", "Kinetic Typography", "Explainer Videos", "Motion Graphics", "Lower Thirds", "Animated Ads", "Title Sequences", "2D & 3D Animation"],
        textColor: "text-[#020817]",
      },
      {
        bg: "#1DBF73",
        title: "Ad Creative",
        description: "Performance-led creative built to be tested, measured, and scaled across Meta, TikTok, and beyond.",
        items: ["Static Ads", "Video Ads", "Hook Variations", "Concept Development", "A/B Test Sets", "Platform-Ready Sizing", "Creative Iteration", "Ad Copy", "Format Adaptation"],
        textColor: "text-[#020817]",
      },
      {
        bg: "#073624",
        title: "Performance Marketing",
        description: "Modern marketing built on testing, data, and fast creative execution, so growth is handled end to end.",
        items: ["Campaign Management", "Creative Testing", "Meta & Google Ads", "Audience Strategy", "Media Buying", "Performance Reporting", "Rapid Iteration", "Conversion Optimization"],
        textColor: "text-[#fbf0f2]",
      },
      {
        bg: "#F4F6F5",
        title: "Social Content",
        description: "A steady stream of content made for the feed, produced fast and on brand, week after week.",
        items: ["Content Calendars", "Reels & Shorts", "Carousels", "Story Sets", "Ongoing Production"],
        textColor: "text-[#020817]",
      },
      {
        bg: "#E8F5EE",
        title: "Graphic Design",
        description: "Clean, considered visuals across every touchpoint, from a single post to a full brand system.",
        items: ["Social Graphics", "Presentations", "Marketing Assets", "Brand Systems"],
        textColor: "text-[#020817]",
      },
      {
        bg: "#0E2E2D",
        title: "Campaigns & Content",
        description: "Cinematic storytelling that drives brand awareness and performance across every channel that matters.",
        items: ["Brand Campaigns", "Social Content", "Motion & Animation", "Paid Media", "Media Buying", "Audience Strategy", "Campaign Rollout", "Content Production"],
        textColor: "text-[#fbf0f2]",
      },
      {
        bg: "#F4F6F5",
        title: "Web & Brand",
        description: "Sites and identity work that make the right first impression, built to convert and designed to scale with the brand as it grows.",
        items: ["Landing Pages", "Website Design", "Web Development", "Brand Identity", "Logo & Wordmark", "Visual Systems", "Conversion Design", "CMS Integration", "Asset Libraries"],
        textColor: "text-[#020817]",
      },
    ],
    sidebar: {
      label: "Who?",
      text: "We work with founders, marketers, and in-house teams across e-commerce, tech, finance, and entertainment who need creative that performs — not just looks good.",
    },
    serviceCards: [
      { id: "editing", title: "Video Editing", text: "Our core output: short-form and long-form edits cut to perform across every platform, delivered fast and on brief." },
      { id: "motion", title: "Motion & Animation", text: "From logo animation to full motion campaigns, we add the layer of movement that makes creative stand out in the feed." },
      { id: "adcreative", title: "Ad Creative", text: "Performance-first creative designed for paid social — built to test, iterate, and scale across Meta, TikTok, and Google." },
      { id: "retainer", title: "Retainer", text: "A monthly creative partnership where we act as your extended team, delivering consistent, on-brand content week after week." },
    ],
    programs: {
      heading: "Our creative services",
      services: [
        { name: "Video Editing", tagline: "Stories that hold attention and earn the click." },
        { name: "Motion Design", tagline: "Every frame feeling considered and intentional." },
        { name: "Ad Creative", tagline: "Built to test, measure, and scale." },
        { name: "Performance Marketing", tagline: "Growth handled end to end." },
        { name: "Social Content", tagline: "Fast, on-brand, week after week." },
        { name: "Graphic Design", tagline: "Clean visuals across every touchpoint." },
        { name: "Campaigns & Content", tagline: "Cinematic storytelling across every channel." },
        { name: "Web & Brand", tagline: "Built to convert and designed to scale." },
      ],
    },
  },

  // ─────────────── CLIENTS ───────────────
  clients: {
    hero: {
      label: "Our Partners",
      heading: "Trusted by\nbrands that ship",
      subtitle: "For brands across e-commerce, tech, finance, and entertainment, Scaler Studios produces the creative that moves work from idea to live.",
    },
    grid: {
      heading: "Trusted by brands that ship",
      subtext: "From a single edit to full campaign production, we help teams create more, faster, without losing the craft.",
    },
    // Logos live in /public/clients as transparent SVG/PNG and are drawn as
    // single-colour silhouettes by ClientLogo (CSS mask), so any logo added
    // here or via the admin CMS picks up the section's text colour. logoSize
    // is a percentage nudge so wordmarks and icon lockups match in weight.
    // Landing pages keep their own logo strip in src/data/landingPages.js.
    list: [
      { name: "Verizon", logo: "/clients/verizon.svg", category: "Telecom", logoSize: "96", showOnHome: true },
      { name: "Shopify", logo: "/clients/shopify.svg", category: "E-commerce", logoSize: "104", showOnHome: true },
      { name: "Maersk", logo: "/clients/maersk.svg", category: "Logistics", logoSize: "86", showOnHome: true },
      { name: "Subway", logo: "/clients/subway.svg", category: "Food and Retail", logoSize: "90", showOnHome: true },
      { name: "Crocs", logo: "/clients/crocs.svg", category: "Retail", logoSize: "82", showOnHome: true },
      { name: "Jacob and Co", logo: "/clients/jacobandco.svg", category: "Luxury", logoSize: "72", showOnHome: true },
      { name: "Gumlet", logo: "/clients/gumlet.svg", category: "SaaS", logoSize: "98", showOnHome: true },
      { name: "Bringg", logo: "/clients/bringg.svg", category: "SaaS", logoSize: "86", showOnHome: true },
      { name: "SafewayTax", logo: "/clients/safewaytax.png", category: "Finance", logoSize: "84", showOnHome: true },
    ],
    cta: {
      heading: "Want to work with us?",
      buttonText: "Get in Touch",
    },
  },

  // ─────────────── WORK / WORKDETAIL ───────────────
  work: {
    tabs: {
      featured: "Featured",
      allProjects: "All Work",
      industries: "Industries",
    },
    metaLabel: "Video · Motion · Ad Creative",
    // Shown when the CMS has no projects. Same shape as the admin panel's
    // Work entries, so anything added in the CMS replaces this list.
    // Cover images: /public/work/<slug>.jpg. Add videoUrl for an autoplay loop.
    projects: [
      {
        title: "Verizon",
        slug: "verizon-employee-testimonials",
        subtitle: "Employee testimonial film series",
        category: "Corporate",
        client: "Verizon",
        services: "Video Editing · Interview Films · Internal Comms",
        description: "A series of employee testimonial films for Verizon: interviews capturing how people across the company see its culture, values and day-to-day experience, edited into a consistent series for internal and employer-brand use.",
        imageUrl: "/work/verizon.jpg",
        videoUrl: "",
        featuredOnWork: true,
        featuredOnHome: true,
        sortOrder: 1,
      },
      {
        title: "Shopify",
        slug: "shopify-office-relocation",
        subtitle: "Office relocation interview films",
        category: "Tech",
        client: "Shopify",
        services: "Video Editing · Interview Films · Corporate",
        description: "Interview-led films around Shopify's office relocation, built from staff perspectives on the new workspace. Multi-camera interview edits with clean graphics and a pace that keeps a long-form internal film watchable.",
        imageUrl: "/work/shopify.jpg",
        videoUrl: "",
        featuredOnWork: true,
        featuredOnHome: true,
        sortOrder: 2,
      },
      {
        title: "Subway",
        slug: "subway-social-performance-film",
        subtitle: "Data-led social media performance film",
        category: "Food & Retail",
        client: "Subway",
        services: "Motion Design · Video Editing · Data Visualisation",
        description: "A performance recap film that turns campaign data into a story: animated charts and kinetic type blended with campaign visuals to show growth across Subway's social channels, cut for a leadership audience.",
        imageUrl: "/work/subway.jpg",
        videoUrl: "",
        featuredOnWork: true,
        featuredOnHome: true,
        sortOrder: 3,
      },
      {
        title: "Fiverr",
        slug: "fiverr-internal-communications",
        subtitle: "Internal communications campaign films",
        category: "Tech",
        client: "Fiverr",
        services: "Video Editing · Motion Graphics · Internal Comms",
        description: "Produced for Fiverr's Internal Communications team: a set of films highlighting employee celebrations for a company-wide challenge, edited from employee-submitted footage into a polished, upbeat series.",
        imageUrl: "/work/fiverr.jpg",
        videoUrl: "",
        featuredOnWork: true,
        featuredOnHome: true,
        sortOrder: 4,
      },
      {
        title: "Bringg",
        slug: "bringg-office-move-film",
        subtitle: "Corporate film: the move to a larger office",
        category: "Tech",
        client: "Bringg",
        services: "Video Editing · Corporate Film · Motion Graphics",
        description: "A corporate film covering Bringg's move to a larger office, highlighting the company's growth and the new workspace. Interview and b-roll edit with branded motion graphics and titles.",
        imageUrl: "/work/bringg.jpg",
        videoUrl: "",
        featuredOnWork: true,
        featuredOnHome: true,
        sortOrder: 5,
      },
      {
        title: "Performance Creative",
        slug: "performance-ad-creative",
        subtitle: "Static and video ads for DTC and service brands",
        category: "Ad Creative",
        client: "DTC and service brands",
        services: "Ad Creative · Hook Variations · Meta & Google Ads",
        description: "Ongoing ad creative production for e-commerce, home improvement and service brands: hook variations, UGC-style edits, statics and platform-ready resizes, delivered in days and iterated on performance data.",
        imageUrl: "/work/performance-creative.jpg",
        videoUrl: "",
        featuredOnWork: true,
        featuredOnHome: true,
        sortOrder: 6,
      },
    ],
  },
  workDetail: {
    info: {
      clientLabel: "Client",
      industryLabel: "Industry",
      servicesLabel: "Services",
      servicesValue: "Video Editing · Motion Design · Ad Creative",
    },
    moreProjectsHeading: "More projects",

  },

  // ─────────────── CONTACT ───────────────
  contact: {
    hero: {
      label: "Contact",
      title: "Let's create\nsomething great",
      subtitle: "We'd love to hear about your next project",
    },
    info: {
      location: {
        title: "Visit Us",
        addressLine1: "",
        addressLine2: "",
        regions: "",
      },
      phone: {
        title: "WhatsApp",
        number: "+91 83106 77125",
        hours: "Mon - Sat, replies within a few hours",
      },
      email: {
        title: "Email Us",
        address: "mridul@scalerstudios.com",
        response: "We'll respond within 24 hours",
      },
    },
    form: {
      label: "Get in touch",
      title: "Want to work\nwith us?",
      subtitle: "Let us know a bit about you and your project. We'll get back to you within one business day.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      companyLabel: "Company",
      companyPlaceholder: "Your company name",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project...",
      checkboxLabel: "Send me occasional updates on insights and services",
      submitText: "Send Message",
      successTitle: "Thank you!",
      successMessage: "We've received your message and will be in touch shortly.",
    },
  },

  // ─────────────── LEGAL ───────────────
  legal: {
    hero: {
      heading: "Legal",
      lastUpdated: "Last updated: 2026",
    },
    sections: [
      {
        heading: "Imprint",
        content: "Scaler Studios",
        email: "mridul@scalerstudios.com",
      },
      {
        heading: "Privacy",
        content: "We respect your privacy. Personal data submitted through forms on this site is used solely to respond to your inquiry and is never sold or shared with third parties for marketing purposes. To request deletion or export of your data, contact us at the email above.",
      },
      {
        heading: "Cookies",
        content: "This site uses essential cookies for routing and accessibility. We do not use third-party tracking cookies. Analytics, when enabled, are anonymized and aggregated.",
      },
      {
        heading: "Intellectual Property",
        content: "All content, branding, and design assets on this site are the property of Scaler Studios or our clients. Unauthorized reproduction is prohibited.",
      },
    ],
  },

  // ─────────────── INSIGHTS (Articles) ───────────────
  insights: {
    articles: [
      {
        title: "The Cost of Ad Creative Is Dropping.",
        slug: "cost-of-ad-creative",
        heroImage: "",
        body: "## Performance Creative Is Getting Cheaper\n\nThe cost of producing ad creative has dropped significantly over the last few years. Better tools, faster workflows, and smarter iteration have made it possible to produce more for less — and the brands taking advantage of this are pulling ahead.\n\n## What's Actually Changed\n\nThree things have shifted at once: AI-assisted editing tools have cut production time dramatically, short-form formats have removed the need for expensive production setups, and the market has standardised around a test-and-learn approach that rewards volume over polish.\n\n## Why Quality Still Wins\n\nCheaper doesn't mean worse. The brands winning on paid social aren't cutting corners — they're redirecting budget from production overhead into more concepts, more hooks, more iteration. The creative itself still needs to stop the scroll. The difference is now you can test ten versions in the time it used to take to finish one.",
        images: [],
      },
      {
        title: "Why Volume Beats Perfection in Paid Social.",
        slug: "volume-beats-perfection",
        heroImage: "",
        body: "## The Fastest-Scaling Brands Test More\n\nThe brands scaling fastest on Meta and TikTok are not the ones with the most polished creative. They're the ones with the most creative in market, testing hooks, formats, and concepts at pace.\n\n## The Math of Testing\n\nIf you're running one ad at a time, you're guessing. If you're running ten, you're learning. The platforms reward creative diversity — fresh assets perform better than fatigued ones, and the algorithm needs signal from multiple angles to find your audience efficiently.\n\n## What This Means for Production\n\nIt means your creative partner needs to move fast and iterate freely. Not spend three weeks perfecting one video. The brief should be: give us five hooks, test them, and double down on what works. That's how you scale.",
        images: [],
      },
      {
        title: "Motion, Speed & Performance.",
        slug: "motion-speed-performance",
        heroImage: "",
        body: "## How Motion Creative Converts\n\nMotion graphics are no longer a nice-to-have. On every major platform — Meta, TikTok, YouTube, LinkedIn — animated creative consistently outperforms static in click-through and view duration.\n\n## Why Speed Matters\n\nThe window to capture attention is getting shorter. Three seconds is generous. Motion gives you more tools to use in that window: movement draws the eye, kinetic text delivers the message faster than a voiceover, and animated transitions hold attention through the frame.\n\n## Platform-Native Formats\n\nThe other shift is format. Brands that produce motion creative built for the platform — not repurposed from a TV spot or a website animation — see meaningfully better results. That means vertical, fast, text-forward, and cut for the specific rhythm of each feed.",
        images: [],
      },
    ],
  },

  // ─────────────── COMING SOON ───────────────
  comingSoon: {
    heading: "Coming Soon",
    subtitle: "We are actively working on this page. Check back soon!",
    cta: "Go back home",
  },

  // ─────────────── GLOBAL (Navbar + Footer) ───────────────
  global: {
    nav: {
      menu: [
        { label: "Work", href: "/work" },
        { label: "About", href: "/about" },
        { label: "Clients", href: "/clients" },
        { label: "Services", href: "/services" },
      ],
      contactButton: "Contact",
      menuButton: "Menu",
      sayHelloLabel: "Say hello",
      sayHelloEmail: "mridul@scalerstudios.com",
      talentLabel: "Join the team?",
      talentEmail: "mridul@scalerstudios.com",
    },
    footer: {
      exploreLabel: "Explore",
      exploreLinks: [
        { label: "Services", href: "/services" },
        { label: "Work", href: "/work" },
        { label: "About", href: "/about" },
        { label: "Clients", href: "/clients" },
      ],
      stalkUsLabel: "Stalk us",
      stalkUsLinks: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/scaler-studios/" },
        { label: "Instagram", href: "https://www.instagram.com/scaler.studios/" },
      ],
      sayHelloLabel: "Say Hello",
      sayHelloEmail: "mridul@scalerstudios.com",
      callUsLabel: "WhatsApp",
      callUsPhone: "+91 83106 77125",
      copyright: "© 2020–2026 Scaler Studios",
      legalLink: "Legal",
      address: "",
    },
  },
};
