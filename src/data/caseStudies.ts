export interface StatItem {
  val: string;
  lbl: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface CaseStudyItem {
  key: string;
  name: string;
  industry: string;
  location: string;
  website: string;
  websiteUrl: string;
  email: string;
  serviceTaken: string;
  headline: string;
  image: string;
  situation: string;
  challenges: string[];
  solution: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  initials: string;
  resultsText: string;
  stats: StatItem[];
  benefits: BenefitItem[];
}

export const caseStudiesData: Record<string, CaseStudyItem> = {
  earnly: {
    key: "earnly",
    name: "Earnly",
    industry: "Fintech",
    location: "UK",
    website: "www.earnly.co.uk",
    websiteUrl: "https://www.earnly.co.uk",
    email: "adam.marsh@earnly.co.uk",
    serviceTaken: "Personal Branding",
    headline: "Built a credible founder brand that expanded reach.",
    image: "/images/case-study-earnly.jpg",
    situation:
      "Earnly is a UK-based fintech company giving finance leaders real-time visibility over their tax obligations. The team knew LinkedIn was the highest-leverage platform for reaching their ICP, but the founder's profile was underutilised.",
    challenges: [
      "Struggled to explain the value of real-time tax visibility in simple, benefit-led language.",
      "Content was posted ad-hoc, with no clear rhythm, leading to low engagement.",
    ],
    solution:
      "Rocket began by running a positioning and messaging workshop to map ICP, key pains, and desired transformation, then distilled this into a clear LinkedIn narrative and content system.",
    quote:
      "Taz took my scattered thoughts about tax and cash-flow and turned them into a clear founder story that people actually care about. Within a few weeks, I could feel the shift.",
    quoteAuthor: "Adam Marsh",
    quoteRole: "Founder & CEO, Earnly",
    initials: "EA",
    resultsText:
      "We published 52 posts, generating over 310,000 impressions and reaching 28,000 unique LinkedIn members within their ICP. The most successful posts achieved 10,000+ impressions and sparked in-depth comment threads.",
    stats: [
      { val: "52", lbl: "Posts published" },
      { val: "310,000+", lbl: "Total impressions" },
      { val: "28,000", lbl: "Unique ICP members" },
      { val: "10,000+", lbl: "Best post impressions" },
    ],
    benefits: [
      {
        title: "Authority",
        desc: "Positioned the founder as a credible voice on tax and cash flow for UK SMEs.",
      },
      {
        title: "Visibility",
        desc: "Increased reach and awareness among relevant finance decision-makers.",
      },
      {
        title: "Trust",
        desc: "Warmed up future buyers through consistent content that educated before the sales conversation.",
      },
    ],
  },
  simha: {
    key: "simha",
    name: "Simha AI",
    industry: "AI sales",
    location: "UK",
    website: "www.aisalestraining.co.uk",
    websiteUrl: "https://www.aisalestraining.co.uk",
    email: "chris.gallagher@aisalestraining.co.uk",
    serviceTaken: "Pipeline Growth",
    headline:
      "Helped Simha AI turn LinkedIn into a consistent source of sales meetings.",
    image: "/images/case-study-simha.jpg",
    situation:
      "Simha helps organisations combine AI tech with proven sales principles to improve growth. They had a strong offer, but needed a more structured outbound system to consistently convert interest into sales conversations.",
    challenges: [
      "Reaching the right decision-makers consistently without wasting time on low-fit accounts.",
      "Managing replies and nurturing warm prospects without letting valuable conversations lose momentum.",
    ],
    solution:
      "A done-for-you LinkedIn outbound system around Simha AI's ICP combining account targeting, list building, segmentation, and messaging to create a more focused pipeline engine.",
    quote:
      "Taz helped us bring structure and consistency to our LinkedIn outreach, and that quickly improved the quality of conversations we were having. What stood out was how hands-on and commercially aware the approach was. It never felt generic.",
    quoteAuthor: "Chris Gallagher",
    quoteRole: "Co-Founder, Simha AI",
    initials: "SA",
    resultsText:
      "After 6 months, the campaign generated more than 1,400 targeted new connections, 320+ replies, 78 warm opportunities, and 19 booked meetings with decision-makers.",
    stats: [
      { val: "1,400+", lbl: "Targeted connections" },
      { val: "320+", lbl: "Direct replies" },
      { val: "78", lbl: "Warm opportunities" },
      { val: "19", lbl: "Booked meetings" },
    ],
    benefits: [
      {
        title: "Consistency",
        desc: "Built a steady outbound rhythm that replaced sporadic prospecting.",
      },
      {
        title: "Relevance",
        desc: "Improved lead quality through sharper targeting, segmentation, and messaging.",
      },
      {
        title: "Momentum",
        desc: "Created warmer conversations that moved from first reply to a meaningful sales discussion.",
      },
    ],
  },
  xme: {
    key: "xme",
    name: "XME.digital",
    industry: "Telecoms",
    location: "Ukraine",
    website: "www.xme.digital",
    websiteUrl: "https://www.xme.digital/",
    email: "",
    serviceTaken: "Pipeline Growth",
    headline:
      "Helped XME.Digital turn LinkedIn into a stronger outbound channel.",
    image: "/images/case-study-xme.jpg",
    situation:
      "XME.digital provides a digital integration platform that helps enterprises scale digital services across complex environments. The team needed a structured way to reach decision-makers and create better sales conversations.",
    challenges: [
      "Reaching relevant decision-makers in complex enterprise accounts without wasting effort on poor-fit prospects.",
      "Managing replies consistently and moving interested prospects toward meetings before momentum was lost.",
    ],
    solution:
      "A done-for-you outreach system around XME.digital's ideal customer profile, including account research, list building, segmentation, and messaging designed to spark relevant commercial conversations.",
    quote:
      "A great experience working with Rocket. Their support was invaluable in helping us achieve our business goals. Brought clarity and consistency to our outreach, which made LinkedIn feel far more commercially effective.",
    quoteAuthor: "Enterprise Growth Lead",
    quoteRole: "XME.digital",
    initials: "XM",
    resultsText:
      "The campaign generated more than 1,500 targeted new connections, 325+ replies from relevant prospects, 44 warm opportunities, and 19 booked meetings with decision-makers.",
    stats: [
      { val: "1,500+", lbl: "Targeted connections" },
      { val: "325+", lbl: "Relevant replies" },
      { val: "44", lbl: "Warm opportunities" },
      { val: "19", lbl: "Booked meetings" },
    ],
    benefits: [
      {
        title: "Consistency",
        desc: "Built a steady outbound rhythm that replaced sporadic prospecting.",
      },
      {
        title: "Relevance",
        desc: "Improved lead quality through sharper targeting, segmentation, and messaging.",
      },
      {
        title: "Momentum",
        desc: "Created warmer conversations that moved from first reply to a meaningful sales discussion.",
      },
    ],
  },
  kestrel: {
    key: "kestrel",
    name: "Kestrel Innovations",
    industry: "Business consultant",
    location: "UK",
    website: "",
    websiteUrl: "",
    email: "",
    serviceTaken: "Pipeline Growth",
    headline:
      "Helped Kestrel turn LinkedIn into a consistent source of conversations.",
    image: "/images/case-study-kestrel.jpg",
    situation:
      "Kestrel Innovations is a consultancy helping organisations improve performance through its Kestrel Improvement System. The team needed a clearer LinkedIn outbound system to reach the right decision-makers consistently.",
    challenges: [
      "Reaching relevant decision-makers in complex enterprise accounts without wasting effort on poor-fit prospects.",
      "Managing replies consistently and moving interested prospects toward meetings before momentum was lost.",
    ],
    solution:
      "A done-for-you outreach system around Kestrel Innovations' ideal customer profile, including account research, list building, segmentation, and messaging designed to spark relevant commercial conversations.",
    quote:
      "Taz brought much more structure to our outreach and made LinkedIn feel like a proper commercial channel rather than a hit-and-miss activity. What stood out was how hands-on and thoughtful the whole process was - the conversations felt far more relevant from the start.",
    quoteAuthor: "Managing Director",
    quoteRole: "Kestrel Innovations",
    initials: "KI",
    resultsText:
      "The campaign generated more than 1,300 targeted new connections, 295+ replies from relevant prospects, 39 warm opportunities, and 12 booked meetings with decision-makers.",
    stats: [
      { val: "1,300+", lbl: "Targeted connections" },
      { val: "295+", lbl: "Relevant replies" },
      { val: "39", lbl: "Warm opportunities" },
      { val: "12", lbl: "Booked meetings" },
    ],
    benefits: [
      {
        title: "Consistency",
        desc: "Built a steady outbound rhythm that replaced sporadic prospecting.",
      },
      {
        title: "Relevance",
        desc: "Improved lead quality through sharper targeting, segmentation, and messaging.",
      },
      {
        title: "Momentum",
        desc: "Created warmer conversations that moved from first reply to a meaningful sales discussion.",
      },
    ],
  },
  hpj: {
    key: "hpj",
    name: "High Performance Journey",
    industry: "Leadership Coaching",
    location: "UK",
    website: "",
    websiteUrl: "",
    email: "",
    serviceTaken: "Pipeline Growth",
    headline:
      "Helped HPJ turn LinkedIn into a consistent source of conversations.",
    image: "/images/case-study-hpj.jpg",
    situation:
      "High Performance Journey delivers high-impact experiential leadership to corporate teams across the public and private sector. The challenge was building a reliable way to get in front of HR heads who could bring HPJ in.",
    challenges: [
      "Phil's calendar was built around delivering programmes, not manually sourcing prospects on LinkedIn.",
      "Reaching the right mix of HR decision-makers across sectors as varied as defence, biotech, and financial services.",
    ],
    solution:
      "Rocket built HPJ a done-for-you LinkedIn outreach system: targeted ICP list, tailored messaging, and full campaign management - handling outreach, replies, and lead nurturing so Phil could focus on delivering and closing.",
    quote:
      "Rocket built HPJ a done-for-you LinkedIn outreach system that opened doors to senior HR decision-makers across multiple sectors. It gave us a predictable pipeline so our team could focus 100% on delivering leadership programmes.",
    quoteAuthor: "Phil",
    quoteRole: "Founder, High Performance Journey",
    initials: "HP",
    resultsText:
      "Over 4 months, HPJ's LinkedIn activity generated 1,250+ targeted connections, 200+ replies, 51 warm opportunities, and 18 booked meetings with decision-makers.",
    stats: [
      { val: "1,250+", lbl: "Targeted connections" },
      { val: "200+", lbl: "Direct replies" },
      { val: "51", lbl: "Warm opportunities" },
      { val: "18", lbl: "Booked meetings" },
    ],
    benefits: [
      {
        title: "Time",
        desc: "Phil reclaimed hours previously spent on manual prospecting, redirecting focus toward programme delivery.",
      },
      {
        title: "Pipeline",
        desc: "A steady stream of warm conversations replaced sporadic, ad hoc networking.",
      },
      {
        title: "Sustainable Growth",
        desc: "A repeatable outreach system gave HPJ a predictable channel.",
      },
    ],
  },
};
