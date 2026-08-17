import { z } from "zod";

export const chapterSchema = z.object({
  slug: z.string(),
  index: z.number().int().min(1),
  title: z.string(),
  biome: z.string(),
  mechanic: z.string(),
  summary: z.string(),
  detail: z.string(),
  status: z.enum(["demo", "w-budowie", "planowany"]),
});
export type Chapter = z.infer<typeof chapterSchema>;

export const mechanicSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  detail: z.string(),
});
export type Mechanic = z.infer<typeof mechanicSchema>;

export const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});
export type FaqItem = z.infer<typeof faqItemSchema>;

export const galleryItemSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string(),
});
export type GalleryItem = z.infer<typeof galleryItemSchema>;

export const principleSchema = z.object({
  title: z.string(),
  detail: z.string(),
});
export type Principle = z.infer<typeof principleSchema>;
