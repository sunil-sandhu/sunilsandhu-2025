export const SITE_URL = "https://sunilsandhu.com";

export const profile = {
  name: "Sunil Sandhu",
  firstName: "Sunil",
  url: SITE_URL,
  email: "hello@sunilsandhu.com",
  location: "Barcelona, Spain",
  locationLong:
    "Originally from Nottingham, UK — now based in Barcelona, Spain",
  jobTitle: "Founder & Entrepreneur",
  tagline: "Founder, entrepreneur, and builder of developer communities",
  oneLiner:
    "Sunil Sandhu is a founder and entrepreneur best known for building In Plain English, one of the world's largest developer education platforms.",
  shortBio:
    "Sunil Sandhu is a founder and entrepreneur based in Barcelona (originally from Nottingham, UK). He is the founder of In Plain English, a developer education platform read by millions each month, and has spent over a decade building products, communities, and companies for developers — including Circuit, Stackademic, Differ, Obsurfable, and Messy Founder.",
} as const;

export type Venture = {
  name: string;
  year: number;
  url: string;
  role: string;
  tagline: string;
  description: string;
};

// Ordered by priority for the projects page (current focus first after the flagship).
export const ventures: Venture[] = [
  {
    name: "In Plain English",
    year: 2018,
    url: "https://plainenglish.io",
    role: "Founder & CEO",
    tagline: "Developer education platform read by millions each month",
    description:
      "A tech-focused media company and developer education platform, home to publications such as JavaScript in Plain English, Python in Plain English, and Stackademic. It has grown into one of the largest developer education platforms in the world, reaching millions of readers across 200+ countries.",
  },
  {
    name: "Obsurfable",
    year: 2025,
    url: "https://obsurfable.com",
    role: "Founder",
    tagline: "AEO & LLM-visibility monitoring for brands",
    description:
      "Sunil's current focus: a platform that shows brands how they appear inside AI answers. Obsurfable tracks how large language models like ChatGPT describe you, which questions matter in your space, and which competitors show up instead — so you can optimise for answers, not just rankings.",
  },
  {
    name: "Differ",
    year: 2024,
    url: "https://differ.blog",
    role: "Founder",
    tagline: "An algorithm-free blogging platform built for the AI era",
    description:
      "A blogging platform built for a world where both humans and AI agents read content. Differ is deliberately algorithm-free, a bet that meaningful writing can win in a vertical crowded by Medium and Substack. Two years in, it serves hundreds of thousands of monthly views.",
  },
  {
    name: "Circuit",
    year: 2022,
    url: "https://circuit.ooo",
    role: "Founder",
    tagline: "Developer marketing agency for devtool & SaaS startups",
    description:
      "A developer-marketing agency helping devtool and SaaS teams create technical content and marketing strategies that drive real developer adoption — backed by an owned distribution network of tech publications.",
  },
  {
    name: "Stackademic",
    year: 2020,
    url: "https://stackademic.com",
    role: "Founder & Teacher",
    tagline: "A free coding bootcamp built during the pandemic",
    description:
      "A free coding bootcamp Sunil built during COVID to teach people how to code all over the world. He built the platform, wrote the curriculum, taught the students, and marked the homework himself.",
  },
  {
    name: "Messy Founder",
    year: 2025,
    url: "https://messyfounder.com",
    role: "Creator",
    tagline: "Real, unpolished founder stories and community",
    description:
      "A community built on the belief that momentum beats perfection. Messy Founder is a home for real, unpolished founder stories — builders helping builders, without the highlight-reel pressure.",
  },
];

export type SocialLink = {
  name: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { name: "Email", href: "mailto:hello@sunilsandhu.com" },
  { name: "Newsletter", href: "https://newsletter.plainenglish.io/" },
  { name: "GitHub", href: "https://github.com/sunil-sandhu" },
  { name: "X (Twitter)", href: "https://twitter.com/sunilsandhu" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sunil-sandhu/" },
  { name: "Medium", href: "https://sunilsandhu.medium.com/" },
  { name: "Differ", href: "https://differ.blog/@sunil" },
  { name: "YouTube (Personal)", href: "https://www.youtube.com/@sunil-sandhu" },
  {
    name: "YouTube (In Plain English)",
    href: "https://www.youtube.com/@inplainenglish",
  },
  { name: "Instagram", href: "https://www.instagram.com/sunilsandhu" },
  { name: "TikTok", href: "https://www.tiktok.com/@messyfounder" },
  { name: "BlueSky", href: "https://bsky.app/profile/sunilsandhu.bsky.social" },
  {
    name: "Discord",
    href: "https://discord.gg/in-plain-english-709094664682340443",
  },
  { name: "Twitch", href: "https://www.twitch.tv/inplainenglish" },
];

// Used for the JSON-LD Person `sameAs` array (profiles + owned properties).
export const sameAs: string[] = [
  "https://github.com/sunil-sandhu",
  "https://twitter.com/sunilsandhu",
  "https://www.linkedin.com/in/sunil-sandhu/",
  "https://sunilsandhu.medium.com/",
  "https://differ.blog/@sunil",
  "https://www.youtube.com/@sunil-sandhu",
  "https://www.youtube.com/@inplainenglish",
  "https://www.instagram.com/sunilsandhu",
  "https://bsky.app/profile/sunilsandhu.bsky.social",
  "https://plainenglish.io",
  "https://obsurfable.com",
  "https://differ.blog",
  "https://circuit.ooo",
  "https://stackademic.com",
  "https://messyfounder.com",
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "Media", href: "/media" },
  { name: "Speaking", href: "/speaking" },
  { name: "Press", href: "/press" },
] as const;

export const speakingTopics = [
  {
    title: "Building developer communities",
    description:
      "How to grow and nurture large technical audiences — the lessons behind building In Plain English into a platform read by millions of developers.",
  },
  {
    title: "Developer marketing & content strategy",
    description:
      "Why technical audiences need better content, and how companies can earn developer trust instead of buying attention.",
  },
  {
    title: "AEO, GEO & AI search visibility",
    description:
      "How brands show up (or disappear) inside AI answers, and what building Obsurfable has taught me about optimising for LLMs.",
  },
  {
    title: "Audience-first entrepreneurship",
    description:
      "Why building an audience before a product changes everything, and how content becomes distribution for founders.",
  },
  {
    title: "The messy reality of building startups",
    description:
      "An honest take on the loneliness, lumpiness, and non-linear progress of building companies — the ideas behind Messy Founder.",
  },
];
