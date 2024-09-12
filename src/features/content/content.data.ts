import type { Content } from '@/features/content/content.types';
import matter from 'gray-matter';
import { promises as fs } from 'node:fs';
import type { z } from 'zod';

// https://github.com/colinhacks/zod/issues/105#issuecomment-667059243
export async function getContents<Schema extends z.ZodTypeAny>({
  schema,
  contentName,
}: {
  schema: Schema;
  contentName: 'authors' | 'blog' | 'experiences';
}): Promise<Content<Schema>[]> {
  const contentPath = `${process.cwd()}/public/${contentName}`;

  const files = await fs.readdir(contentPath, { withFileTypes: true });

  const slugs = files
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  const fileContents = await Promise.all(
    slugs.map((slug) => fs.readFile(`${contentPath}/${slug}/index.mdx`)),
  );

  const contents: Content<Schema>[] = fileContents.map((fileContent, i) => {
    const slug = slugs[i];
    const { data, content } = matter(fileContent);
    return {
      slug,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: schema.parse(data),
      content,
    };
  });

  return contents;
}

export async function getData<Schema extends z.ZodTypeAny>({
  schema,
  contentName,
}: {
  schema: Schema;
  contentName: 'projects' | 'skills' | 'site';
}) {
  const dataPath = `${process.cwd()}/public/${contentName}/index.json`;

  const fileContent = await fs.readFile(dataPath);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = schema.parse(JSON.parse(fileContent.toString()));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data as z.infer<Schema>;
}
