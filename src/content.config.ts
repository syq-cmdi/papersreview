import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const text = z.string().min(1);
const optionalText = z.string().optional();
const optionalList = z.array(z.string()).default([]);

const publication = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/publications" }),
  schema: z.object({
    title: text,
    titleEn: optionalText,
    authors: z.array(z.string()).default([]),
    venue: optionalText,
    venueEn: optionalText,
    year: z.number().int(),
    date: z.coerce.date().optional(),
    type: z.enum(["journal", "conference", "book", "chapter", "preprint", "report"]).default("journal"),
    status: z.enum(["published", "accepted", "rr", "submitted", "working"]).default("working"),
    tags: optionalList,
    topics: optionalList,
    doi: optionalText,
    pdf: optionalText,
    url: optionalText,
    bibtex: optionalText,
    abstract: optionalText,
    abstractEn: optionalText,
    featured: z.boolean().default(false),
    relatedProjects: optionalList
  })
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/news" }),
  schema: z.object({
    title: text,
    titleEn: optionalText,
    date: z.coerce.date(),
    category: z.enum(["course", "research", "award", "talk", "media", "milestone"]).default("milestone"),
    summary: optionalText,
    summaryEn: optionalText,
    tags: optionalList,
    featured: z.boolean().default(false),
    related: optionalList
  })
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/talks" }),
  schema: z.object({
    title: text,
    titleEn: optionalText,
    event: text,
    eventEn: optionalText,
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: optionalText,
    locationEn: optionalText,
    speaker: text,
    type: z.enum(["keynote", "conference", "invited", "monthly", "seminar"]).default("conference"),
    slides: optionalText,
    poster: optionalText,
    tags: optionalList,
    featured: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/projects" }),
  schema: z.object({
    title: text,
    titleEn: optionalText,
    summary: text,
    summaryEn: optionalText,
    date: z.coerce.date().optional(),
    status: z.enum(["active", "completed", "planned"]).default("active"),
    tags: optionalList,
    techStack: optionalList,
    cover: optionalText,
    demoUrl: optionalText,
    repoUrl: optionalText,
    contributors: optionalList,
    featured: z.boolean().default(false),
    relatedPublications: optionalList
  })
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/team" }),
  schema: z.object({
    name: text,
    nameEn: optionalText,
    role: text,
    roleEn: optionalText,
    group: z.enum(["lead", "faculty", "industry", "advisor", "ta", "student", "alumni"]).default("faculty"),
    affiliation: optionalText,
    affiliationEn: optionalText,
    email: optionalText,
    image: optionalText,
    homepage: optionalText,
    tags: optionalList,
    tagsEn: optionalList,
    order: z.number().default(99)
  })
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/resources" }),
  schema: z.object({
    title: text,
    titleEn: optionalText,
    type: z.enum(["syllabus", "guide", "dataset", "code", "platform", "document"]).default("document"),
    date: z.coerce.date().optional(),
    url: optionalText,
    file: optionalText,
    summary: optionalText,
    summaryEn: optionalText,
    tags: optionalList,
    lang: z.enum(["zh", "en", "bilingual"]).default("zh")
  })
});

export const collections = {
  publication,
  news,
  talks,
  projects,
  team,
  resources
};
