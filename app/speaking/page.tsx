import type { Metadata } from "next";
import { speakingTopics, profile, SITE_URL } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "Speaking — Sunil Sandhu",
  description:
    "Sunil Sandhu speaks and writes about building developer communities, developer marketing, AI search visibility (AEO/GEO), and audience-first entrepreneurship. Invite him to speak or appear on your podcast.",
  alternates: { canonical: "/speaking" },
  openGraph: {
    title: "Speaking — Sunil Sandhu",
    description:
      "Topics Sunil Sandhu speaks about: developer communities, developer marketing, AI search visibility, and audience-first entrepreneurship.",
    url: `${SITE_URL}/speaking`,
  },
};

export default function SpeakingPage() {
  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)] mb-4">
          Speaking
        </h1>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Sunil Sandhu speaks at conferences, on podcasts, and to teams about
          what he&apos;s learned building In Plain English and a portfolio of
          companies for developers and founders. He has appeared on podcasts,
          television, and at developer events, and has taught coding in
          classrooms and online.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Topics</h2>
        <div className="space-y-6">
          {speakingTopics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-xl border border-black/10 dark:border-white/10 p-6"
            >
              <h3 className="text-xl font-medium text-[var(--primary)] mb-2">
                {topic.title}
              </h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl bg-black/[.03] dark:bg-white/[.03] p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">Invite Sunil to speak</h2>
        <p className="text-black/70 dark:text-white/70 mb-6 max-w-xl mx-auto">
          Organising a conference, meetup, or podcast? Sunil is available for
          talks, panels, and interviews on the topics above.
        </p>
        <a
          href={`mailto:${profile.email}?subject=Speaking%20request`}
          className="inline-block rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}
