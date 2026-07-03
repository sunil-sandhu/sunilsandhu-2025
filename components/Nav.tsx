"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/lib/profile";

export default function Nav() {
  const pathname = usePathname();

  // Keep the novelty /cc pages free of the site chrome.
  if (pathname?.startsWith("/cc")) return null;

  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-[var(--background)]/80 border-b border-black/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-bold text-[var(--primary)] whitespace-nowrap"
        >
          Sunil Sandhu
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm justify-end">
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => {
              const isActive =
                pathname === link.href || pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-[var(--primary)] ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-black/60 dark:text-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
        </div>
      </div>
    </nav>
  );
}
