import { getContents } from '@/content/content-utils';
import { z } from 'zod';

const baseAuthorSchema = z.object({
  name: z.string(),
  role: z.string(),
  xUsername: z.string(),
  linkedinUsername: z.string(),
  githubUsername: z.string(),
  mail: z.string(),
});

const authorSchema = baseAuthorSchema.merge(
  z.object({
    avatarPath: z.string(),
  }),
);

export type Author = z.infer<typeof authorSchema>;

export async function getAuthor() {
  const baseAuthors = await getContents({
    schema: baseAuthorSchema,
    contentName: 'authors',
  });

  const authors = baseAuthors.map((author) => ({
    ...author,
    data: {
      ...author.data,
      avatarPath: `/authors/${author.slug}/avatar.jpg`,
    },
  }));

  return authors[0];
}
