"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialLinks, profile } from "@/app/lib/profile";

export default function Footer() {
  const pathname = usePathname();

  // Keep the novelty /cc pages free of the site chrome.
  if (pathname?.startsWith("/cc")) return null;

  return (
    <footer className="bg-background py-10 mt-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-black/60 dark:text-white/60 hover:text-[var(--primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-black/40 dark:text-white/40">
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
