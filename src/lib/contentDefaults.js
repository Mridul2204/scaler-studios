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
      videoUrl: "",
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
    works: {
      headingBold: "Edit. Animate.",
      headingItalic: "Perform.",
      ctaText: "See more projects",
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
    list: [
      { name: "J.P. Morgan", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/jpmorgan.png", category: "Finance", logoSize: "100", showOnHome: true },
      { name: "Hotel on Rivington", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/rivington.png", category: "Hospitality", logoSize: "100", showOnHome: true },
      { name: "Centerbridge", logo: "https://marshallhaber.com/wp-content/uploads/2020/10/centerbridge.png", category: "Finance", logoSize: "100", showOnHome: true },
      { name: "Trish McEvoy", logo: "https://marshallhaber.com/wp-content/uploads/2021/05/trishmcevoy-1.png", category: "Beauty", logoSize: "100", showOnHome: true },
      { name: "Special Olympics", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/1200px-Special_Olympics_logo.svg_-1.png", category: "Nonprofit", logoSize: "140", showOnHome: true },
      { name: "Mizrahi Developments", logo: "https://marshallhaber.com/wp-content/uploads/2022/06/MIZ_Logo_SVG_Gadrientdark.png", category: "Real Estate", logoSize: "100", showOnHome: true },
      { name: "Stone Ridge", logo: "https://marshallhaber.com/wp-content/uploads/2023/09/SR_Logo_Blue@2x.png", category: "Finance", logoSize: "100", showOnHome: true },
      { name: "Eurotech", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/16_Eurotech_Logo.png", category: "Technology", logoSize: "100", showOnHome: true },
      { name: "Usher", logo: "https://marshallhaber.com/wp-content/uploads/2021/08/usher-new-logo_white.png", category: "Entertainment", logoSize: "100", showOnHome: true },
      { name: "Magen David Adom", logo: "https://marshallhaber.com/wp-content/uploads/2023/07/mda_cleanlogo.png", category: "Healthcare", logoSize: "100", showOnHome: true },
      { name: "JDC", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/jdc.png", category: "Nonprofit", logoSize: "100", showOnHome: true },
      { name: "Coinbase", logo: "https://marshallhaber.com/wp-content/uploads/2022/03/Coinbase_Logo.png", category: "Finance", logoSize: "100", showOnHome: true },
      { name: "Kaplan", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/kaplan.png", category: "Education", logoSize: "100", showOnHome: true },
      { name: "Memorial Sloan Kettering", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/logo-memorial-sloan-kettering-cancer-center_2018.png", category: "Healthcare", logoSize: "140", showOnHome: true },
      { name: "Humankind Investments", logo: "https://marshallhaber.com/wp-content/uploads/2022/03/HumankindInvestments_Logo.png", category: "Finance", logoSize: "100", showOnHome: true },
      { name: "Celadon", logo: "https://marshallhaber.com/wp-content/uploads/2022/03/Celadon_Logo.png", category: "Technology", logoSize: "100", showOnHome: true },
      { name: "Burson Marsteller", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/Burson-Marsteller-logo_250px.png", category: "Communications", logoSize: "100" },
      { name: "Signature Bank", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/23_Signature_Bank.png", category: "Finance", logoSize: "100" },
      { name: "Berkshire Hathaway", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/berkshire-hathaway-logonew.png", category: "Finance", logoSize: "100" },
      { name: "Jefferies", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/09_Jeffries_Logo.png", category: "Finance", logoSize: "100" },
      { name: "Weizmann Institute of Science", logo: "https://marshallhaber.com/wp-content/uploads/2023/07/logo.png", category: "Education", logoSize: "100" },
      { name: "Y&R", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/YR.png", category: "Advertising", logoSize: "100" },
      { name: "National Jewish Health", logo: "https://marshallhaber.com/wp-content/uploads/2021/05/nationaljewishhealth.png", category: "Healthcare", logoSize: "100" },
      { name: "Freeport LNG", logo: "https://marshallhaber.com/wp-content/uploads/2021/08/freeport-logo.png", category: "Energy", logoSize: "100" },
      { name: "Weatherproof", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/56_Weatherproof_Logo.png", category: "Fashion", logoSize: "100" },
      { name: "Platinum Cleaning", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/Platinum_Logo_Secondary_Horizontal_4C.png", category: "Services", logoSize: "100" },
      { name: "FXFL", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/fxfl.png", category: "Sports", logoSize: "100" },
      { name: "Raynor Gaming", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/Raynor_Logo_Vertical_Gradient_RGB.png", category: "Sports", logoSize: "100" },
      { name: "Polaris Medical Resorts", logo: "https://marshallhaber.com/wp-content/uploads/2023/07/polaris.png", category: "Healthcare", logoSize: "100" },
      { name: "Rosedev", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/42_Rosedev_Logo.png", category: "Real Estate", logoSize: "100" },
      { name: "Ackman-Ziff", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/17_Ackman_Ziff_Logo.png", category: "Real Estate", logoSize: "100" },
      { name: "JAT Capital", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/04_JAT_Capital_Logo.png", category: "Finance", logoSize: "100" },
      { name: "Mike Bloomberg", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/47_Mike_Bloomberg_Logo.png", category: "Government", logoSize: "100" },
      { name: "Madison Realty Capital", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/madison-realty-capital-logo.png", category: "Real Estate", logoSize: "100" },
      { name: "Sphera", logo: "https://marshallhaber.com/wp-content/uploads/2020/06/spheralogo2.png", category: "Technology", logoSize: "100" },
      { name: "Reliant Safety", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/48_Reliant_Safety_Logo.png", category: "Services", logoSize: "100" },
      { name: "Forcefield", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/49_Forcefield_Logo.png", category: "Technology", logoSize: "100" },
      { name: "Noitacov Resorts & Spa", logo: "https://marshallhaber.com/wp-content/uploads/2023/07/noitacov_logo-1.png", category: "Hospitality", logoSize: "100" },
      { name: "South Africa", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/southafrica.png", category: "Government", logoSize: "100" },
      { name: "Amudim", logo: "https://marshallhaber.com/wp-content/uploads/2022/03/Amudim_PrimaryLogo_RGB.png", category: "Nonprofit", logoSize: "100" },
      { name: "Hertz Investment Group", logo: "https://marshallhaber.com/wp-content/uploads/2021/05/hertz-2.png", category: "Real Estate", logoSize: "100" },
      { name: "Apexon", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/apexon.png", category: "Technology", logoSize: "100" },
      { name: "The Classic", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/07_Classic_Logo.png", category: "Hospitality", logoSize: "100" },
      { name: "Nariman House", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/Nariman_house_logo.png", category: "Nonprofit", logoSize: "100" },
      { name: "Optifino", logo: "https://marshallhaber.com/wp-content/uploads/2023/07/optifino.png", category: "Finance", logoSize: "100" },
      { name: "Met Council", logo: "https://marshallhaber.com/wp-content/uploads/2021/05/MetCouncil.jpg", category: "Nonprofit", logoSize: "100" },
      { name: "Meridian", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/meridian.png", category: "Finance", logoSize: "100" },
      { name: "Treeco", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/45_Treeco_Logo.png", category: "Real Estate", logoSize: "100" },
      { name: "BHI USA", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/bhi.png", category: "Finance", logoSize: "100" },
      { name: "Reliant Realty", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/51_Reliant_Realty_Logo.png", category: "Real Estate", logoSize: "100" },
      { name: "Lincoln Avenue Capital", logo: "https://marshallhaber.com/wp-content/uploads/2021/05/LincolnAvenueCapital.jpg", category: "Real Estate", logoSize: "100" },
      { name: "Copia", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/54_Copia_Logo.png", category: "Finance", logoSize: "100" },
      { name: "Futerfas Law", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/FuterfasLaw_Logo.png", category: "Legal", logoSize: "100" },
      { name: "AIFL", logo: "https://marshallhaber.com/wp-content/uploads/2022/03/AIFL_Logo.png", category: "Nonprofit", logoSize: "100" },
      { name: "Parklee", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/astleys_logo_black.png", category: "Real Estate", logoSize: "100" },
      { name: "5WPR", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/25_5WPR_Logo.png", category: "Communications", logoSize: "100" },
      { name: "The Frick Estate", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/WCH.png", category: "Real Estate", logoSize: "100" },
      { name: "Estates at Alpine", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/63_Estates_at_Alpine_Logo.png", category: "Real Estate", logoSize: "100" },
      { name: "UX3", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/UX3_Logo.jpg", category: "Technology", logoSize: "100" },
      { name: "Associated", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/assoiated-logo.png", category: "Finance", logoSize: "100" },
      { name: "Lapolla", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/68_Lapolla_Logo.png", category: "Real Estate", logoSize: "100" },
      { name: "Olami", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/18_Olami_Logo.png", category: "Nonprofit", logoSize: "100" },
      { name: "TAG", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/32_TAG_Logo.png", category: "Nonprofit", logoSize: "100" },
      { name: "Chai Lifeline", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/chai_lifeline_hort_4_color.png", category: "Healthcare", logoSize: "100" },
      { name: "IAC", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/60_IAC_Logo_small.jpg", category: "Nonprofit", logoSize: "100" },
      { name: "Jewish National Fund", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/jewish-national-fund_logonew.png", category: "Nonprofit", logoSize: "100" },
      { name: "SIDS", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/57_SIDS_Logo.png", category: "Healthcare", logoSize: "100" },
      { name: "AFHU", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/37_American_Friends_Hebrew_Logo.png", category: "Education", logoSize: "100" },
      { name: "Permanent Mission", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/13_Permanent_Mission_Logo.jpg", category: "Government", logoSize: "100" },
      { name: "MEMRI", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/77_Memri_Logo.png", category: "Nonprofit", logoSize: "100" },
      { name: "Technion", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/technion.jpg", category: "Education", logoSize: "100" },
      { name: "NK Architects", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/69_NK_Architect_Logo.png", category: "Real Estate", logoSize: "100" },
      { name: "Le Marais", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/71_Le_Marais_Logo-copy.png", category: "Hospitality", logoSize: "100" },
      { name: "OATS", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/73_OATS_Logo.png", category: "Nonprofit", logoSize: "100" },
      { name: "ELC Breast Cancer Campaign", logo: "https://marshallhaber.com/wp-content/uploads/2022/03/ELC_BreastCancer_Logo-1.png", category: "Healthcare", logoSize: "100" },
      { name: "NYSCQ", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/NYSCQ_Logo.jpg", category: "Real Estate", logoSize: "100" },
      { name: "StellaService", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/38_Stella_Logo.png", category: "Technology", logoSize: "100" },
      { name: "The Gilbert", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/the-gilbert-logo.png", category: "Real Estate", logoSize: "100" },
      { name: "Bailey & Galyen", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/BG-LOGO.jpg", category: "Legal", logoSize: "100" },
      { name: "SBE", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/20_SBE_Logo-1.png", category: "Hospitality", logoSize: "100" },
      { name: "Belz Enterprises", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/08_Belz_Enterprise.png", category: "Real Estate", logoSize: "100" },
      { name: "Kasowitz", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/22_Kasowitz_Logo.png", category: "Legal", logoSize: "100" },
      { name: "Milberg Factors", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/MilbergFactors_Logo_BOLD_black_singleline_00.png", category: "Finance", logoSize: "100" },
      { name: "Newseum", logo: "https://marshallhaber.com/wp-content/uploads/2019/10/09_Newseum_Logo.png", category: "Education", logoSize: "100" },
      { name: "NYU Langone", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/11_NYU_Langone_Logo.png", category: "Healthcare", logoSize: "100" },
      { name: "GCG", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/12_GCG_Logo.png", category: "Finance", logoSize: "100" },
      { name: "Intelligence Options", logo: "https://marshallhaber.com/wp-content/uploads/2019/11/19_Intelligence_Options_Logo.png", category: "Services", logoSize: "100" },
      { name: "Charity Bids", logo: "https://marshallhaber.com/wp-content/uploads/2022/01/new-logo.png", category: "Nonprofit", logoSize: "100" }
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
        title: "Call Us",
        number: "",
        hours: "Mon - Fri, 9am - 6pm",
      },
      email: {
        title: "Email Us",
        address: "studio@scalerstudios.com",
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
        email: "studio@scalerstudios.com",
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
      sayHelloEmail: "studio@scalerstudios.com",
      talentLabel: "Join the team?",
      talentEmail: "studio@scalerstudios.com",
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
        { label: "LinkedIn", href: "https://www.linkedin.com/company/scalerstudios" },
        { label: "Instagram", href: "https://www.instagram.com/scalerstudios" },
      ],
      sayHelloLabel: "Say Hello",
      sayHelloEmail: "studio@scalerstudios.com",
      callUsLabel: "Call us",
      callUsPhone: "",
      copyright: "© 2020–2026 Scaler Studios",
      legalLink: "Legal",
      address: "",
    },
  },
};
