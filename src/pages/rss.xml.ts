import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { byDateDesc } from "@/lib/content";
import { site } from "@/lib/site";

export async function GET(context: { site?: URL }) {
  const news = (await getCollection("news")).sort(byDateDesc);
  const publications = (await getCollection("publication")).sort(byDateDesc);

  const items = [
    ...news.map((item) => ({
      title: item.data.title,
      description: item.data.summary ?? "",
      pubDate: item.data.date,
      link: `/zh/news/${item.id}/`
    })),
    ...publications.map((item) => ({
      title: item.data.title,
      description: item.data.abstract ?? item.data.venue ?? "",
      pubDate: item.data.date ?? new Date(`${item.data.year}-01-01`),
      link: `/zh/publications/${item.id}/`
    }))
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items
  });
}
