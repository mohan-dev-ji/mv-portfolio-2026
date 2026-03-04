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
      "An app built to help children develop communication skills through consistent symbol interaction by leveraging the context of everyday situations into learning opportunities.",
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
              "Children with communication challenges often struggle to develop expressive language. Traditional communication tools can be complex and hard to use through-out everday life.",
              "Parents and carers need an accessible way to expose children to symbols while not in learning environments.",
            ],
          },
          {
            title: "Built",
            paragraphs: [
              "Mo Speech is a Web App built with Next.js and Convex. It displays symbols in a full screen, distraction-free interface designed for repeated exposure.",
              "It's main focus is to quickly access any symbol in the widely used SymbolStix library via user input in the form of voice or text.",
            ],
          },
          {
            title: "What's next",
            paragraphs: [
              "Phase 1 focused on search. User feedback is now shaping Phase 2 where we will solve the navigation and modelling challenges, which are the major pain points of the AAC (Augmentative and Alternative Communication) comminity.",
              "Mo Speech is developing into a modern AAC modelling device",
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
          "Search the entire library of over 52,000 symbols by speaking or typing.",
          "Sequences of symbols can be played full screen to avoid distractions and enhance focus.",
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
          "Symbols are organised into core words and the users history, tracking the last 100 used symbols.",
          "Dark mode reduces screen glare for users who rely on the app in low-light environments.",
        ],
      },
      {
        type: "stack",
        items: ["React", "Next.js", "TypeScript", "Cursor", "Claude Code", "Convex", "Cloudfare"],
      },
    ],
  },

  {
    slug: "the-headlines",
    breadcrumb: ["Work In Progress"],
    title: "The Headlines",
    description: "Creating news articles from RSS feeds, YouTube video and general thoughts.",
    role: "Solo — Concept to Production",
    year: "2025",
    href: "https://theheadlines.io",
    buttonLabel: "View Live Site",
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
              "How can we validate the truthfullness of the news?",
            ],
          },
          {
            title: "Built",
            paragraphs: [
              "A news aggregation software system that takes sources from RSS feeds, YouTube videos and general comments.",
              "Sources are fed into Perplexity for fact checking against other similar reports and article composition in a journalistic manner.",
              "Finished articles are user facing while topic selection is controlled on a custom backend interface.",
            ],
          },
          {
            title: "What's next",
            paragraphs: [
              "The pipeline proved the concept with real control over well-formed articles but the cost and maintence overheads made it hard to sustain without a monetisation model.",
              "This project is on hold but Version 2 is in ealry ideation. This will be a consumer app where users specify their topics of interest for which they will receive personalised insights while avoiding the noise of general news.",
              
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
        heading: "RSS Feeds",
        paragraphs: [
          "The custom backend interface allows the curator to add any RSS feed online.",
          "Here they can refresh the feed, choose the latest stories that interest them for fact-checking and article creation.",
        ],
        image: { src: "/images/Projects/the-headlines/screen-3.jpg", alt: "The Headlines backend interface" },
      },
      {
        type: "image-text",
        image: { src: "/images/Projects/the-headlines/screen-4.jpg", alt: "YouTube video source editor" },
        heading: "YouTube Video",
        paragraphs: [
          "YouTube videos can be selected as a whole or as a clip with specified in and out times. This pipeline includes video transcription via the Supadata.ai API which is sent to Perplexity for fact checking and article creation in a journalistic manner.",
        ],
      },
      {
        type: "text-image",
        heading: "Custom Research",
        paragraphs: [
          "Provide your own topic with a title, and other optional details to prompt Perplexity to provide detailed feedback or broadly researching an area of interest.",
        ],
        image: { src: "/images/Projects/the-headlines/screen-5.jpg", alt: "Image generation pipeline" },
      },
      {
        type: "image-text",
        heading: "Image Generation",
        paragraphs: [
          "The call to Perplexity also creates 3 image generation prompts based on the context of the articles.",
          "The curator chooses the most fitting one which is fed into a separate pipeline that calls DALL-E 3 to generate an accompanying image.",
        ],
        image: { src: "/images/Projects/the-headlines/screen-6.jpg", alt: "Image generation pipeline" },
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
