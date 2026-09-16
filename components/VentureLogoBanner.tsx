import { ventures as allVentures, ventureFaviconUrl, type Venture } from "@/app/lib/profile";

type VentureLogoBannerProps = {
  ventures?: Venture[];
};

export default function VentureLogoBanner({
  ventures = allVentures,
}: VentureLogoBannerProps) {
  return (
    <section className="my-8">
      <ul className="flex flex-wrap items-center gap-5 sm:gap-6">
        {ventures.map((v) => (
          <li key={v.name}>
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              title={v.name}
              className="block"
            >
              <img
                src={ventureFaviconUrl(v.url, 128)}
                alt={v.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-md hover:rotate-360 transition-transform duration-300"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
