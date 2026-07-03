import type { Metadata } from "next";
import { profile, ventures, socialLinks, SITE_URL } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "Press Kit — Sunil Sandhu",
  description:
    "Press kit for Sunil Sandhu: bios (short and long), key facts, brand links, and contact details for media, interviews, and podcast requests.",
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Press Kit — Sunil Sandhu",
    description:
      "Bios, key facts, links, and contact details for Sunil Sandhu.",
    url: `${SITE_URL}/press`,
  },
};

const facts = [
  ["Full name", "Sunil Sandhu"],
  ["Roles", "Founder & CEO, In Plain English · Founder of Obsurfable, Differ, Circuit, Stackademic · Creator of Messy Founder"],
  ["Based in", "Barcelona, Spain (originally from Nottingham, UK)"],
  ["Focus areas", "Developer education, developer marketing, AI search visibility, audience-first entrepreneurship"],
  ["Contact", "hello@sunilsandhu.com"],
];

export default function PressPage() {
  const oneLiner = profile.oneLiner;

  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)] mb-4">
          Press Kit
        </h1>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Everything you need to write about or feature Sunil Sandhu. Feel free
          to use the bios and facts below verbatim. For interviews, quotes, or
          high-resolution assets, get in touch at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--primary)]"
          >
            {profile.email}
          </a>
          .
        </p>
      </header>

      <section className="mb-10 flex items-center gap-5">
        <img
          src="/icon.png"
          alt="Sunil Sandhu"
          width={96}
          height={96}
          className="rounded-xl"
        />
        <div className="text-sm text-black/60 dark:text-white/60">
          Placeholder avatar — a high-resolution headshot is available on
          request.
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Key facts</h2>
        <dl className="divide-y divide-black/10 dark:divide-white/10">
          {facts.map(([label, value]) => (
            <div key={label} className="py-3 sm:flex sm:gap-6">
              <dt className="w-40 shrink-0 font-medium text-black/60 dark:text-white/60">
                {label}
              </dt>
              <dd className="text-black/80 dark:text-white/80">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">One-liner</h2>
        <p className="rounded-lg bg-black/[.03] dark:bg-white/[.03] p-4 text-black/80 dark:text-white/80">
          {oneLiner}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Short bio</h2>
        <p className="rounded-lg bg-black/[.03] dark:bg-white/[.03] p-4 text-black/80 dark:text-white/80 leading-relaxed">
          {profile.shortBio}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Long bio</h2>
        <div className="rounded-lg bg-black/[.03] dark:bg-white/[.03] p-4 text-black/80 dark:text-white/80 leading-relaxed space-y-4">
          <p>
            Sunil Sandhu is a founder and entrepreneur based in Barcelona, and
            originally from Nottingham in the UK. He is best known for founding
            In Plain English in 2018 — a tech media company and developer
            education platform that now reaches millions of readers each month
            across more than 200 countries.
          </p>
          <p>
            Over the past decade he has built a portfolio of companies for
            developers and founders: Stackademic (2020), a free coding bootcamp
            he built and taught during the pandemic; Circuit (2022), a developer
            marketing agency; Differ (2024), an algorithm-free blogging platform
            built for the AI era; and Obsurfable (2025), his current focus,
            which helps brands understand and improve how they appear inside AI
            answers. In 2025 he also created Messy Founder, a community for real,
            unpolished founder stories.
          </p>
          <p>
            A self-taught developer with a background in law, Sunil is a strong
            advocate for accessible education and audience-first
            entrepreneurship — the idea that founders should build an audience
            and community before, or alongside, their product.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ventures</h2>
        <ul className="space-y-2">
          {ventures.map((v) => (
            <li key={v.name}>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] font-medium"
              >
                {v.name}
              </a>{" "}
              <span className="text-black/50 dark:text-white/50 text-sm">
                ({v.year}) — {v.tagline}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Links &amp; profiles</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[var(--primary)]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
