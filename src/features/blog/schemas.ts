import { z } from 'zod';

export const baseBlogPostSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  heroCaption: z.string().optional(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const blogPostSchema = baseBlogPostSchema.merge(
  z.object({
    path: z.string().min(1),
    url: z.string().url(),
    heroPath: z.string().min(1),
    heroUrl: z.string().url(),
  }),
);

export type BlogPost = z.infer<typeof blogPostSchema>;
