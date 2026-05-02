import type { CollectionEntry } from "astro:content";

export function byDateDesc<T extends { data: { date?: Date; year?: number } }>(a: T, b: T) {
  const aTime = a.data.date?.getTime() ?? new Date(`${a.data.year ?? 0}-01-01`).getTime();
  const bTime = b.data.date?.getTime() ?? new Date(`${b.data.year ?? 0}-01-01`).getTime();
  return bTime - aTime;
}

export function byFeaturedThenDate<T extends { data: { featured?: boolean; date?: Date; year?: number } }>(a: T, b: T) {
  if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
  return byDateDesc(a, b);
}

export function publicationJsonLd(publication: CollectionEntry<"publication">, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": publication.data.type === "book" ? "Book" : "ScholarlyArticle",
    headline: publication.data.title,
    name: publication.data.title,
    author: publication.data.authors.map((name) => ({ "@type": "Person", name })),
    datePublished: publication.data.date?.toISOString().slice(0, 10) ?? `${publication.data.year}`,
    isPartOf: publication.data.venue,
    url: new URL(`/zh/publications/${publication.id}/`, siteUrl).toString(),
    description: publication.data.abstract
  };
}
