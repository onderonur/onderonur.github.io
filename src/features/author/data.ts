import { getContents } from '@/features/contents/data';
import { authorSchema } from './schemas';

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
