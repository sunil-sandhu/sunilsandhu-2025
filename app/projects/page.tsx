import type { Metadata } from "next";
import { ventures, SITE_URL } from "@/app/lib/profile";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Projects by Sunil Sandhu — Ventures & Companies",
  description:
    "The projects and companies Sunil Sandhu has founded, including In Plain English, Obsurfable, Differ, Circuit, Stackademic, and Messy Founder.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects by Sunil Sandhu",
    description:
      "The ventures Sunil Sandhu has founded: In Plain English, Obsurfable, Differ, Circuit, Stackademic, and Messy Founder.",
    url: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects founded by Sunil Sandhu",
    itemListElement: ventures.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: v.name,
        url: v.url,
        foundingDate: String(v.year),
        description: v.tagline,
      },
    })),
  };

  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
      <JsonLd data={itemList} />

      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)] mb-4">
          Projects
        </h1>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Over the past decade, Sunil Sandhu has founded and built a range of
          products and companies for developers and founders. Here&apos;s what
          he&apos;s working on and what he&apos;s built.
        </p>
      </header>

      <div className="space-y-6">
        {ventures.map((v) => (
          <a
            key={v.name}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-black/10 dark:border-white/10 p-6 transition-colors hover:border-[var(--primary)] hover:bg-black/[.02] dark:hover:bg-white/[.02]"
          >
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-2xl font-semibold group-hover:text-[var(--primary)] transition-colors">
                {v.name}
              </h2>
              <span className="text-sm text-black/50 dark:text-white/50 whitespace-nowrap">
                {v.role} · {v.year}
              </span>
            </div>
            <p className="text-[var(--primary)] text-sm font-medium mb-3">
              {v.tagline}
            </p>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              {v.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
