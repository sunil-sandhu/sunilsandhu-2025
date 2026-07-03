import type { Metadata } from "next";
import FeedItem from "@/components/FeedItem";
import { getMediaEntries } from "@/app/lib/feed";
import { SITE_URL } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "Media — Sunil Sandhu Interviews, Podcasts & Talks",
  description:
    "Interviews, podcast appearances, videos, and talks featuring Sunil Sandhu, founder of In Plain English, on building developer communities, content, and companies.",
  alternates: { canonical: "/media" },
  openGraph: {
    title: "Media — Sunil Sandhu Interviews, Podcasts & Talks",
    description:
      "Interviews, podcasts, videos, and talks featuring Sunil Sandhu.",
    url: `${SITE_URL}/media`,
  },
};

export default function MediaPage() {
  const entries = getMediaEntries();

  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)] mb-4">
          Media
        </h1>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Interviews, podcasts, videos, and appearances featuring Sunil Sandhu —
          talking about In Plain English, developer marketing, and the journey
          from software developer to founder. For interview or podcast requests,
          see the{" "}
          <a href="/press" className="text-[var(--primary)]">
            press
          </a>{" "}
          page.
        </p>
      </header>

      <main className="divide-y divide-black/10 dark:divide-white/10">
        {entries.map((item) => (
          <FeedItem
            key={item.id}
            title={item.title}
            date={item.date}
            format={item.format}
            url={item.url}
            origin={item.origin}
          />
        ))}
      </main>
    </div>
  );
}
