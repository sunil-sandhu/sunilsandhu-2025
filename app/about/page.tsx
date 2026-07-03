import type { Metadata } from "next";
import Link from "next/link";
import { ventures, SITE_URL } from "@/app/lib/profile";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Sunil Sandhu — Founder & Entrepreneur",
  description:
    "The story of Sunil Sandhu: a founder and entrepreneur from Nottingham, now based in Barcelona, who built In Plain English, Circuit, Stackademic, Differ, Obsurfable, and Messy Founder.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sunil Sandhu — Founder & Entrepreneur",
    description:
      "The story of Sunil Sandhu, founder of In Plain English, Obsurfable, Differ, Circuit, Stackademic, and Messy Founder.",
    url: `${SITE_URL}/about`,
    type: "profile",
  },
};

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
      <JsonLd data={breadcrumb} />

      <article className="prose-custom">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)] mb-6">
          About Sunil Sandhu
        </h1>

        <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed mb-8">
          Sunil Sandhu is a founder and entrepreneur best known for building{" "}
          <a
            href="https://plainenglish.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            In Plain English
          </a>
          , one of the largest developer education platforms in the world.
          Originally from Nottingham in the UK and now based in Barcelona, he has
          spent more than a decade building products, communities, and companies
          for developers and founders.
        </p>

        <div className="space-y-6 text-lg text-black/70 dark:text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-10 mb-4">
              From law degree to software developer
            </h2>
            <p>
              Sunil&apos;s path into technology wasn&apos;t the traditional one.
              He earned a law degree (LLB) from Kingston University before
              teaching himself to code and moving into web development. Working
              across agencies and startups, he built a broad engineering
              toolkit — JavaScript, React, Vue, Node.js, TypeScript, and the wider
              web platform — and developed a habit that would come to define his
              career: explaining complex technical ideas in plain, accessible
              language.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-10 mb-4">
              Building In Plain English
            </h2>
            <p>
              In 2018, Sunil founded In Plain English. What started as a way to
              publish clear, beginner-friendly programming tutorials grew into a
              tech media company home to some of the most popular developer
              publications online, including JavaScript in Plain English and
              Python in Plain English. Today it reaches millions of readers each
              month across more than 200 countries, powered by a community of
              tens of thousands of contributing writers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-10 mb-4">
              Teaching the world to code with Stackademic
            </h2>
            <p>
              When the pandemic hit in 2020, Sunil built Stackademic — a free
              coding bootcamp designed to teach people how to code from anywhere
              in the world. He did nearly all of it himself: building the
              platform, writing the curriculum, teaching the students, and even
              marking the homework. It reflected a belief that runs through all
              of his work — that quality education should be accessible to
              everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-10 mb-4">
              Developer marketing with Circuit
            </h2>
            <p>
              In 2022, Sunil founded Circuit, a developer-marketing agency for
              devtool and SaaS companies. Circuit helps technical teams create
              content that earns developer trust rather than buys attention —
              backed by an owned network of publications that gives it real
              control over distribution. It grew directly out of the lessons he
              learned reaching developers at scale with In Plain English.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-10 mb-4">
              Betting on the AI era: Differ and Obsurfable
            </h2>
            <p>
              In 2024, Sunil launched Differ, a blogging platform built for a
              world where both humans and AI agents read content. In a category
              dominated by Medium and Substack, Differ made a contrarian bet:
              stay deliberately algorithm-free and let good writing find its
              audience. Two years in, it serves hundreds of thousands of monthly
              views.
            </p>
            <p>
              His current focus is Obsurfable, launched in 2025. As AI answers
              become the new front door to the internet, Obsurfable helps brands
              understand how they appear inside tools like ChatGPT — how
              they&apos;re described, which questions matter, and which
              competitors show up instead — so they can optimise for answers, not
              just search rankings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-10 mb-4">
              Messy Founder and building in public
            </h2>
            <p>
              In 2025, Sunil created Messy Founder, a community built on a simple
              idea: momentum beats perfection. It&apos;s a home for real,
              unpolished founder stories — a counter to the highlight-reel version
              of entrepreneurship — where builders help builders and progress is
              allowed to be lumpy, nonlinear, and human.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-10 mb-4">
              Philosophy
            </h2>
            <p>
              A thread runs through everything Sunil builds: start with an
              audience, lead with genuinely useful content, and build community
              before product. He believes distribution is a first-class problem
              for founders, that education should be free and accessible, and
              that the most durable businesses are built in public, honestly, and
              over the long term.
            </p>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
            What Sunil has built
          </h2>
          <ul className="space-y-3">
            {ventures.map((v) => (
              <li key={v.name} className="text-lg">
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] font-medium"
                >
                  {v.name}
                </a>{" "}
                <span className="text-black/50 dark:text-white/50 text-base">
                  ({v.year}) — {v.tagline}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-black/70 dark:text-white/70">
            See more on the{" "}
            <Link href="/projects" className="text-[var(--primary)]">
              projects
            </Link>{" "}
            page, explore his{" "}
            <Link href="/writing" className="text-[var(--primary)]">
              writing
            </Link>
            , or get in touch via the{" "}
            <Link href="/press" className="text-[var(--primary)]">
              press
            </Link>{" "}
            page.
          </p>
        </section>
      </article>
    </div>
  );
}
