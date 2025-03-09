"use client";

import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:hello@sunilsandhu.com",
    },

    {
      name: "GitHub",
      href: "https://github.com/sunil-sandhu",
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/sunilsandhu",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sunil-sandhu/",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/inplainenglishhq",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sunilsandhu",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@realsunilsandhu",
    },
    {
      name: "Discord",
      href: "https://discord.gg/in-plain-english-709094664682340443",
    },
    {
      name: "Twitch",
      href: "https://www.twitch.tv/inplainenglish",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background py-8 mt-16 border-t border-black/10 dark:border-white/10">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 flex-row">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black/60 dark:text-white/60 hover:text-[#f15e23] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
