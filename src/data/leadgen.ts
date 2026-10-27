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
  whatsInside: {
    heading: string;
    intro: string;
    resourcesHeading: string;
    resources: string[];
  };
  faqs: {
    heading: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export const leadgenData: LeadgenData = {
  hero: {
    headingWhite: "The Ultimate LinkedIn",
    headingGreen: "B2B Growth Kit.",
    body: "For B2B service providers, consultants, and coaches who want to attract better clients on LinkedIn without sounding salesy.",
    trustPoints: [
      "Step-by-step positioning framework",
      "Proven outbound messaging templates",
      "100% free · Instant access",
    ],
    form: {
      title: "Get the free kit",
      subtitle: "Enter your details below and we'll send it straight to your inbox.",
      nameLabel: "What's your name?",
      namePlaceholder: "e.g. Bob Smith",
      emailLabel: "Best email to reach you?",
      emailPlaceholder: "you@company.com",
      buttonText: "Get Instant Access →",
      privacyNote: "🔒 No spam, ever. Unsubscribe at any time.",
    },
  },

  whatsInside: {
    heading: "What's inside?",
    intro:
      "This free E-book gives you a practical toolkit of resources to help you sharpen your brand positioning, improve your content, and present your business more professionally online. Instead of piecing things together from random advice, you get one focused bundle designed to help you build momentum on LinkedIn faster.",
    resourcesHeading: "Resources include...",
    resources: [
      "Free WhatsApp community, with 250+ B2B professionals supporting and learning from each other",
      "33 LinkedIn Banners (Canva templates)",
      "8 LinkedIn Featured Thumbnails (Canva templates)",
      "13 LinkedIn Carousels (Canva templates)",
      "12-page E-book (Canva template)",
      "21-page Slide Deck (Canva template)",
      "Case Study (Canva template)",
      "365 Stock Photos",
      "Plus More!",
    ],
  },

  faqs: {
    heading: "FAQs",
    items: [
      {
        question: "What happens after I sign up?",
        answer:
          "You'll receive access to the <strong>free toolkit</strong> and can start using the resources straight away.",
      },
      {
        question: "Do I need much Canva experience?",
        answer:
          "No. <strong>Basic Canva skills are enough</strong> to use and adapt the templates to your brand guidelines.",
      },
      {
        question: "Will this help if I'm inconsistent on LinkedIn?",
        answer:
          "Yes. It's especially useful if you need structure, prompts, and ready-made assets to <strong>make LinkedIn easier</strong> to maintain.",
      },
    ],
  },
};
