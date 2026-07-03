import Link from "next/link";
import feed from "@/public/feed.json";
import FeedItem from "../components/FeedItem";

export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
      {/* Introduction */}
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/icon.png"
            alt="Sunil Sandhu"
            width={80}
            height={80}
            className="hover:rotate-360 transition-transform duration-300"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)]">
            Sunil Sandhu
          </h1>
        </div>

        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Hey, I&apos;m Sunil — a founder and entrepreneur, originally from
          Nottingham and now based in Barcelona. You might know me from{" "}
          <a
            href="https://plainenglish.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            In Plain English
          </a>
          , one of the largest developer education platforms in the world.
        </p>
        <br />
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Over the past decade I&apos;ve built a bunch of products, communities,
          and companies for developers and founders — including{" "}
          <a
            href="https://obsurfable.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            Obsurfable
          </a>
          ,{" "}
          <a
            href="https://differ.blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            Differ
          </a>
          ,{" "}
          <a
            href="https://circuit.ooo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            Circuit
          </a>
          ,{" "}
          <a
            href="https://stackademic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            Stackademic
          </a>
          , and{" "}
          <a
            href="https://messyfounder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            Messy Founder
          </a>
          . You can read more{" "}
          <Link href="/about" className="text-[var(--primary)]">
            about me
          </Link>{" "}
          or browse everything I&apos;ve{" "}
          <Link href="/projects" className="text-[var(--primary)]">
            built
          </Link>
          .
        </p>
        <br />
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Below you&apos;ll find links to the content I&apos;ve created over the
          years — you can also filter it down to just{" "}
          <Link href="/writing" className="text-[var(--primary)]">
            writing
          </Link>{" "}
          or{" "}
          <Link href="/media" className="text-[var(--primary)]">
            interviews &amp; talks
          </Link>
          .
        </p>
      </header>

      {/* Feed */}
      <main className="divide-y divide-black/10 dark:divide-white/10">
        {[...feed]
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((item) => (
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
