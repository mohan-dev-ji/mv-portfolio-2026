export type ProjectSection =
  | { type: "hero-image"; src: string; alt: string }
  | { type: "overview-strip"; cards: { title: string; paragraphs: string[] }[] }
  | { type: "image-image"; left: { src: string; alt: string }; right: { src: string; alt: string } }
  | { type: "text-image"; heading: string; paragraphs: string[]; image: { src: string; alt: string } }
  | { type: "image-text"; image: { src: string; alt: string }; heading: string; paragraphs: string[] }
  | { type: "stack"; items: string[] };

export type ProjectDetail = {
  slug: string;
  breadcrumb: string[];
  title: string;
  description: string;
  role: string;
  year: string;
  href?: string;
  buttonLabel?: string;
  relatedSlugs: string[];
  sections: ProjectSection[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "mo-speech",
    breadcrumb: ["Live Product"],
    title: "Mo Speech",
    description:
      "An AAC symbol exposure app built to help children develop communication skills through consistent symbol interaction.",
    role: "Solo — Concept to Production",
    year: "2026",
    href: "https://mospeech.com",
    buttonLabel: "View Live App",
    relatedSlugs: ["the-headlines", "crypto-collective"],
    sections: [
      {
        type: "hero-image",
        src: "/images/Projects/mo-speech/hero.png",
        alt: "Mo Speech app overview",
      },
      {
        type: "overview-strip",
        cards: [
          {
            title: "Problem",
            paragraphs: [
              "Children with communication challenges often struggle to develop expressive language. Traditional AAC modelling tools can be complex and hard to use consistently at home.",
              "Parents and carers need a simple, accessible way to expose children to symbols and reinforce communication throughout the day.",
            ],
          },
          {
            title: "Built",
            paragraphs: [
              "Mo Speech is a Progressive Web App built with Next.js and Convex. It presents AAC symbols in a simple, distraction-free interface designed for repeated exposure.",
              "The app supports multiple categories, dark mode, and was designed with both carers and children in mind.",
            ],
          },
          {
            title: "What's next",
            paragraphs: [
              "Expanding the symbol library, adding audio support for each symbol, and building out a dashboard for carers to track engagement over time.",
              "User testing with families is ongoing to refine the interaction model.",
            ],
          },
        ],
      },
      {
        type: "image-image",
        left: { src: "/images/Projects/mo-speech/screen-1.png", alt: "Mo Speech home screen" },
        right: { src: "/images/Projects/mo-speech/screen-2.png", alt: "Mo Speech symbol grid" },
      },
      {
        type: "text-image",
        heading: "Main Features",
        paragraphs: [
          "Symbol grids are organised into categories, making it easy to find and present relevant vocabulary in the moment.",
          "A clean, high-contrast interface keeps the focus on the symbols — reducing cognitive load for both child and carer.",
          "Offline-capable as a PWA, so it works reliably without a steady internet connection.",
        ],
        image: { src: "/images/Projects/mo-speech/screen-3.png", alt: "Mo Speech symbol grid view" },
      },
      {
        type: "image-text",
        image: {
          src: "/images/Projects/mo-speech/screen-4.jpg",
          alt: "Mo Speech categories and dark mode",
        },
        heading: "Categories & Dark Mode",
        paragraphs: [
          "Symbols are grouped into intuitive categories — food, activities, emotions and more — so carers can navigate quickly during real interactions.",
          "Dark mode reduces eye strain for evening use and gives the interface a calm, focused feel.",
        ],
      },
      {
        type: "stack",
        items: ["React", "Next.js", "TypeScript", "Cursor", "Claude Code", "Convex"],
      },
    ],
  },

  {
    slug: "the-headlines",
    breadcrumb: ["Work In Progress"],
    title: "The Headlines",
    description: "Creating news articles from RSS feeds, YouTube video and general thoughts.",
    role: "Solo — Concept to Production",
    year: "2026",
    href: "https://the-headlines.vercel.app",
    buttonLabel: "The Headlines",
    relatedSlugs: ["mo-speech", "media-transporter"],
    sections: [
      {
        type: "hero-image",
        src: "/images/Projects/the-headlines/hero.jpg",
        alt: "The Headlines app overview",
      },
      {
        type: "overview-strip",
        cards: [
          {
            title: "Problem",
            paragraphs: [
              "Staying updated with the news is difficult in these times of information overload.",
              "Keeping track of topics that happen over time is a challenge this project addresses.",
              "What is the best way to research and write an article?",
            ],
          },
          {
            title: "Built",
            paragraphs: [
              "A news aggregation software system that takes sources from RSS feeds, YouTube videos and general comments.",
              "Sources are fed into Perplexity for fact checking and article composition.",
              "Finished articles are user facing while topic selection is controlled on a custom backend interface.",
            ],
          },
          {
            title: "What's next",
            paragraphs: [
              "This project turned out great for controlling the narrative of articles created.",
              "This required a lot of manual work.",
              "The next phase of development is to run a cron job once a day to collect, research and write topics of interest in one API call to Gemini.",
            ],
          },
        ],
      },
      {
        type: "image-image",
        left: { src: "/images/Projects/the-headlines/screen-1.jpg", alt: "The Headlines article view" },
        right: { src: "/images/Projects/the-headlines/screen-2.jpg", alt: "The Headlines news feed" },
      },
      {
        type: "text-image",
        heading: "Backend Interface",
        paragraphs: [
          "This custom backend interface allows the curator to fully control the RSS feed they want to include.",
          "Here they can refresh the feed and choose the stories they want to process.",
        ],
        image: { src: "/images/Projects/the-headlines/screen-3.jpg", alt: "The Headlines backend interface" },
      },
      {
        type: "image-text",
        image: { src: "/images/Projects/the-headlines/screen-4.jpg", alt: "YouTube video source editor" },
        heading: "YouTube video to article",
        paragraphs: [
          "YouTube videos with in and out times can be added as sources to be fact checked and written about by Perplexity.",
        ],
      },
      {
        type: "text-image",
        heading: "Image Generation Pipeline",
        paragraphs: [
          "The call to Perplexity also creates 3 image generation prompts based on the context of the articles.",
          "The curator chooses the most fitting one which is fed into a separate pipeline that calls DALL-E 3 to generate the accompanying image to the written article.",
        ],
        image: { src: "/images/Projects/the-headlines/screen-5.jpg", alt: "Image generation pipeline" },
      },
      {
        type: "stack",
        items: ["React", "Next.js", "TypeScript", "Cursor", "Claude Code", "Convex"],
      },
    ],
  },

  {
    slug: "media-transporter",
    breadcrumb: ["Work In Progress"],
    title: "Media Transporter",
    description:
      "A tool that simplifies file transfers to cross-site facilities into workflows and schedules tasks for operators to work more efficiently.",
    role: "Concept in development",
    year: "2026",
    relatedSlugs: ["crypto-collective", "one-inbox"],
    sections: [
      {
        type: "hero-image",
        src: "/images/Projects/media-transporter/hero.jpg",
        alt: "Media Transporter app overview",
      },
      {
        type: "overview-strip",
        cards: [
          {
            title: "Problem",
            paragraphs: [
              "Data IO operators in media companies often have multiple steps to complete one file transfer.",
              "Many of these tasks are repetitive and can be automated with the right tools.",
              "Time is wasted finding tasks from the most appropriate source and working out which is the most urgent job.",
            ],
          },
          {
            title: "Design",
            paragraphs: [
              "Media Transporter is programmed to recognise established methods of transferring files so the operator doesn't have to.",
              "The terminal styled window shows the operator the exact movements and metadata of the file.",
              "Tasks can be scheduled to operators in order of importance.",
            ],
          },
        ],
      },
      {
        type: "image-image",
        left: { src: "/images/Projects/media-transporter/screen-1.jpg", alt: "Media Transporter task list" },
        right: { src: "/images/Projects/media-transporter/screen-2.jpg", alt: "Media Transporter file view" },
      },
      {
        type: "text-image",
        heading: "Bandwidth Monitor",
        paragraphs: [
          "The bandwidth of the transfer is in constant view allowing the operator to troubleshoot any network issues that might affect their work.",
        ],
        image: { src: "/images/Projects/media-transporter/screen-3.jpg", alt: "Bandwidth monitor view" },
      },
      {
        type: "image-text",
        image: { src: "/images/Projects/media-transporter/screen-4.jpg", alt: "Full report terminal view" },
        heading: "Full Report",
        paragraphs: [
          "On completion of a job a full report is available to view in the terminal window.",
          "These reports get saved as logs into the user's history.",
        ],
      },
      {
        type: "stack",
        items: ["Figma", "User Flows", "User Research"],
      },
    ],
  },

  {
    slug: "crypto-collective",
    breadcrumb: ["Case Study"],
    title: "Crypto Collective",
    description:
      "Enabling people who are invested in Cryptocurrency to impact the real world in a positive way.",
    role: "Designer",
    year: "2025",
    relatedSlugs: ["the-headlines", "media-transporter"],
    sections: [
      {
        type: "hero-image",
        src: "/images/Projects/crypto-collective/hero.jpg",
        alt: "Crypto Collective app overview",
      },
      {
        type: "overview-strip",
        cards: [
          {
            title: "Problem",
            paragraphs: [
              "Our user research has consistently shown that lack of transparency is the primary reason people hesitate to donate to charities. Donors want to know exactly how their money is being used and what impact it's making.",
              "Cryptocurrency investors are building up large amounts of wealth in digital assets. They are not so quick to cash out into FIAT currency due to tighter tax laws being implemented.",
            ],
          },
          {
            title: "Design",
            paragraphs: [
              "Crypto Collective is a digital donation platform. The platform leverages blockchain technology to create a transparent, efficient, and engaging donation experience.",
              "Users browse Appeals, choose how much they want to donate and in which cryptocurrency. The transaction is then instantly verified on the blockchain, ensuring transparency from the moment the donation is made.",
            ],
          },
        ],
      },
      {
        type: "image-image",
        left: { src: "/images/Projects/crypto-collective/screen-1.jpg", alt: "Crypto Collective home feed" },
        right: { src: "/images/Projects/crypto-collective/screen-2.jpg", alt: "Crypto Collective appeals view" },
      },
      {
        type: "text-image",
        heading: "Customisation",
        paragraphs: [
          "Users can create a profile and follow their favourite Cryptocurrency.",
          "They can join groups and follow communities to support appeals that are close to their heart.",
        ],
        image: { src: "/images/Projects/crypto-collective/screen-3.jpg", alt: "Crypto Collective profile customisation" },
      },
      {
        type: "image-text",
        image: { src: "/images/Projects/crypto-collective/screen-4.jpg", alt: "Crypto Collective league table" },
        heading: "Gamification",
        paragraphs: [
          "Donations are tracked on a community and group level. This data is arranged into league tables with the total amount raised for the month determining the winner.",
        ],
      },
      {
        type: "stack",
        items: ["Figma", "User Interface", "User Experience"],
      },
    ],
  },

  {
    slug: "one-inbox",
    breadcrumb: ["Case Study"],
    title: "One InBox",
    description:
      "An all in application for independent medical practices. Easy tracking of all communications, appointments and payments.",
    role: "Designer",
    year: "2024",
    relatedSlugs: ["mo-speech", "crypto-collective"],
    sections: [
      {
        type: "hero-image",
        src: "/images/Projects/one-inbox/hero.png",
        alt: "One InBox dashboard overview",
      },
      {
        type: "overview-strip",
        cards: [
          {
            title: "Problem",
            paragraphs: [
              "Medical Receptionists struggle to maintain communications over several different platforms while booking appointments and billing have to be manually maintained.",
              "Owners need informative insights into billings and payments to make informed business decisions.",
            ],
          },
          {
            title: "Design",
            paragraphs: [
              "One InBox is a multi-channel communication system that can access any messaging service to appear in one inbox.",
              "Depending on the type of user, key insights on the business can be seen with automatic supply ordering as a feature that can be enabled.",
            ],
          },
        ],
      },
      {
        type: "image-image",
        left: { src: "/images/Projects/one-inbox/screen-1.jpg", alt: "One InBox inbox view" },
        right: { src: "/images/Projects/one-inbox/screen-2.jpg", alt: "One InBox conversation view" },
      },
      {
        type: "text-image",
        heading: "Supply & Demand",
        paragraphs: [
          "Supplies are tracked and Suppliers are logged to ensure stock never runs out and proprietors always pay the best price.",
        ],
        image: { src: "/images/Projects/one-inbox/screen-3.jpg", alt: "One InBox supply management" },
      },
      {
        type: "stack",
        items: ["Figma", "User Interface", "User Experience"],
      },
    ],
  },
];
