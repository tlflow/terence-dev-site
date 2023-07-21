import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z
      .string()
      .max(60, "For optimize SEO, please provide title of 60 chars or less "),
    description: z
      .string()
      .max(
        180,
        "For optimize SEO, please provide description of 180 chars or less "
      ),
    pubDate: z.date(),
    draft: z.boolean(),
    author: z.enum(["John Doe", "Jane Doe"]),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};
