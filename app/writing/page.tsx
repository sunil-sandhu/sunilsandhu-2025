import type { Metadata } from "next";
import FeedItem from "@/components/FeedItem";
import { getWritingEntries } from "@/app/lib/feed";
import { SITE_URL } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "Writing by Sunil Sandhu — Articles & Tutorials",
  description:
    "An archive of articles and tutorials written by Sunil Sandhu on software development, JavaScript, entrepreneurship, developer marketing, and building online businesses.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing by Sunil Sandhu",
    description:
      "Articles and tutorials by Sunil Sandhu on software development, entrepreneurship, and developer marketing.",
    url: `${SITE_URL}/writing`,
  },
};

export default function WritingPage() {
  const entries = getWritingEntries();

  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)] mb-4">
          Writing
        </h1>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Articles and tutorials by Sunil Sandhu — covering software
          development, JavaScript, entrepreneurship, and building on the
          internet. Many were originally published across In Plain English and
          other publications.
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
