import feed from "@/public/feed.json";

export type FeedEntry = {
  id: string;
  title: string;
  date: string;
  origin: string;
  format: string;
  url: string;
  subtitle?: string;
  promoteAsNew?: boolean;
};

const entries = feed as FeedEntry[];

function byDateDesc(a: FeedEntry, b: FeedEntry) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function isInterview(entry: FeedEntry) {
  return /interview|spotlight|q&a|podcast/i.test(`${entry.id} ${entry.title}`);
}

export function getWritingEntries(): FeedEntry[] {
  return entries
    .filter(
      (e) =>
        (e.format === "blog" || e.format === "article") && !isInterview(e)
    )
    .sort(byDateDesc);
}

export function getMediaEntries(): FeedEntry[] {
  return entries
    .filter(
      (e) => e.format === "video" || e.format === "podcast" || isInterview(e)
    )
    .sort(byDateDesc);
}
