export interface LeadgenData {
  hero: {
    headingWhite: string;
    headingGreen: string;
    body: string;
    trustPoints: string[];
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      buttonText: string;
      privacyNote: string;
    };
  };
  pillars: {
    title: string;
    body: string;
    image: string;
  }[];
  whatsInside: {
    heading: string;
    intro: string;
    guidesHeading: string;
    guides: string[];
    templatesHeading: string;
    templates: string[];
    communityHeading: string;
    community: string[];
  };
}

export const leadgenData: LeadgenData = {
  hero: {
    headingWhite: "The B2B LinkedIn",
    headingGreen: "Playbook.",
    body: "For B2B service providers, consultants, and coaches who want to grow on LinkedIn the right way.",
    trustPoints: [
      "Step-by-step positioning framework",
      "Proven outbound messaging templates",
      "Ready-to-use visual assets you can start using today",
    ],
    form: {
      title: "Get it for free",
      subtitle:
        "Enter your details below and we'll send it straight to your inbox.",
      nameLabel: "WHAT'S YOUR NAME?",
      namePlaceholder: "e.g. Bob Smith",
      emailLabel: "BEST EMAIL TO REACH YOU?",
      emailPlaceholder: "you@company.com",
      buttonText: "Get Instant Access →",
      privacyNote: "🔒 No spam, ever. Unsubscribe at any time.",
    },
  },

  pillars: [
    {
      title: "1. Positioning",
      body: "Learn how to define exactly who you serve, what makes you different, and how to say it so the right people lean in. Clean, intentional positioning doesn’t just look professional - it signals you’re established, reliable, and worth investing in",
      image: "/services/bulb.png"
    },
    {
      title: "2. Content",
      body: "Discover how to build a content system that tells your story, explains your value, and shows the real person behind the business. Consistent, authentic content turns casual viewers into curious prospects",
      image: "/services/speaker.png"
    },
    {
      title: "3. Outreach",
      body: "Learn warm, human approaches that spark genuine interest. You’ll get ready-to-adapt templates that focus on curiosity and value - so people reply because they want to, not because they feel pressured.",
      image: "/services/website.png"
    },
  ],

  whatsInside: {
    heading: "What’s inside... 🧐",
    intro:
      "This isn’t another generic guide. It’s your complete practical toolkit - everything you need to sharpen your presence, create better content, and present your business with confidence. No piecing together advice from 20 different places - just one focused bundle to build real momentum, fast.",
    guidesHeading: "🧠 Guides & Frameworks",
    guides: [
      "Complete 12-page e-book - step-by-step from profile polish to pipeline growth",
      "Brand positioning framework - clarify your identity, colours, fonts, and story",
      "ICP & lead gen system - find exactly who you should be talking to",
      "DM templates - ready to be adapted, proven to work",
      "AI prompts - learn to speed up planning and content creation without losing your voice",
    ],
    templatesHeading: "🎨 Fully Customisable Canva Templates",
    templates: [
      "33 LinkedIn Banners - refresh your profile instantly",
      "8 Featured Section Thumbnails - highlight your best work first",
      "13 Carousel Templates - share ideas, build authority, boost engagement",
      "21-page Sales Brochure - present clearly and professionally",
      "Case Study Template - turn happy clients into your strongest proof",
      "Professional E-Book Template - ready to brand and reuse for your own lead magnet",
      "400+ Curated Stock Images - keep your feed looking polished all year",
    ],
    communityHeading: "Community Fun",
    community: [

      "Free Invite to the Inner Circle WhatsApp Community - 250+ UK/EU/US founders supporting each other, sharing wins, and building momentum together",
    ],
  },
};
