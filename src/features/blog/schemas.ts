import { z } from 'zod';

export const baseBlogPostSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  heroCaption: z.string().optional(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const blogPostSchema = baseBlogPostSchema.merge(
  z.object({
    path: z.string().nonempty(),
    url: z.string().url(),
    heroPath: z.string().nonempty(),
    heroUrl: z.string().url(),
  }),
);

export type BlogPost = z.infer<typeof blogPostSchema>;
