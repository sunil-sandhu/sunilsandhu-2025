import feed from "@/public/feed.json";
import FeedItem from "../components/FeedItem";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
      {/* Introduction */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/icon.png"
            alt="Sunil Sandhu"
            width={80}
            height={80}
            className="hover:rotate-360 filter grayscale transition-transform duration-300"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)]">
            Sunil Sandhu
          </h1>
        </div>

        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Hey, I’m Sunil. You might know me from{" "}
          <a
            href="https://plainenglish.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            In Plain English.
          </a>{" "}
          Over the past 10 years I've built a bunch of apps, products, software,
          and services (you can find them all{" "}
          <a
            href="https://typehq.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            here
          </a>
          ).
        </p>
        <br />
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl">
          You can find a links to all of the content I've created below.
        </p>
      </header>

      {/* Feed */}
      <main className="divide-y divide-black/10 dark:divide-white/10 mb-24 md:md-16">
        {feed
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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
      <Footer />
    </div>
  );
}
