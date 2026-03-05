export type Project = {
  slug: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  buttonLabel: string;
};

export const projects: Project[] = [
  {
    slug: "mo-speech",
    label: "Live",
    title: "Mo Speech",
    description: "An AAC symbol exposure app built to help children develop communication skills.",
    tags: ["React", "Convex", "UX/UI Design", "Live product"],
    href: "/projects/mo-speech",
    image: "/images/Projects/mo-speech/hero.png",
    buttonLabel: "Mo Speech",
  },
  {
    slug: "the-headlines",
    label: "Work in progress",
    title: "The Headlines",
    description:
      "A website that uses RSS feed to find news-worthy articles and researches their validity.",
    tags: ["Concept", "Deployment", "UX/UI Design", "Design System", "Build"],
    href: "/projects/the-headlines",
    image: "/images/Projects/the-headlines/hero.jpg",
    buttonLabel: "The Headlines",
  },
  {
    slug: "media-transporter",
    label: "Work in progress",
    title: "Media Transporter",
    description:
      "A file transfer tool that tracks the progress of files across different servers and Hot Folders.",
    tags: ["Concept", "User Research", "User Flows", "UX/UI Design"],
    href: "/projects/media-transporter",
    image: "/images/Projects/media-transporter/hero.jpg",
    buttonLabel: "Media Transporter",
  },
  {
    slug: "crypto-collective",
    label: "Case Study",
    title: "Crypto Collective",
    description:
      "A collaborative donation platform that brings the crypto community together for charitable causes.",
    tags: [
      "Concept",
      "User Research",
      "UX/UI Design",
      "Journey Maps",
      "Design System",
      "Persona development",
      "Build",
    ],
    href: "/projects/crypto-collective",
    image: "/images/Projects/crypto-collective/hero.jpg",
    buttonLabel: "Crypto Collective",
  },
  {
    slug: "one-inbox",
    label: "Case Study",
    title: "One InBox",
    description:
      "A multi-channel inbox that combines Gmail, WhatsApp and Messenger into one central platform.",
    tags: [
      "User Research",
      "UX/UI Design",
      "Journey Maps",
      "Design System",
      "Persona development",
    ],
    href: "/projects/one-inbox",
    image: "/images/Projects/one-inbox/hero.png",
    buttonLabel: "One InBox",
  },
];
