"use client";

import { format as formatDate } from "date-fns";
import Link from "next/link";

interface FeedItemProps {
  title: string;
  date: string;
  format: string;
  url: string;
  origin: string;
}

export default function FeedItem({
  title,
  date,
  format,
  url,
  origin,
}: FeedItemProps) {
  const formatIcon = {
    blog: "📝",
    video: "🎥",
    podcast: "🎧",
    article: "📝",
    newsletter: "📰",
  }[format];

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full py-6 transition-colors hover:bg-black/[.02] dark:hover:bg-white/[.02] rounded-lg"
    >
      <article className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
          <span className="capitalize">{formatIcon}</span>
          <span>•</span>
          <time dateTime={date}>{formatDate(date, "MMM d, yyyy")}</time>
          {origin && (
            <>
              <span>•</span>
              <span>{origin}</span>
            </>
          )}
        </div>

        <h2 className="text-lg font-medium group-hover:text-[#f15e23] transition-colors">
          {title}
        </h2>
      </article>
    </Link>
  );
}
