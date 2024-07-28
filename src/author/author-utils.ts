import { getContents } from '@/content/content-utils';
import { z } from 'zod';

const authorSchema = z.object({
  name: z.string(),
  role: z.string(),
  xUsername: z.string(),
  linkedinUsername: z.string(),
  githubUsername: z.string(),
  mail: z.string(),
});

export async function getAuthor() {
  const baseAuthors = await getContents({
    schema: authorSchema,
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
