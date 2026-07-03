import { profile, sameAs, ventures, SITE_URL } from "@/app/lib/profile";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    email: profile.email,
    jobTitle: profile.jobTitle,
    description: profile.shortBio,
    image: `${SITE_URL}/icon.png`,
    sameAs,
    worksFor: ventures.map((v) => ({
      "@type": "Organization",
      name: v.name,
      url: v.url,
    })),
    founder: ventures.map((v) => ({
      "@type": "Organization",
      name: v.name,
      url: v.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
