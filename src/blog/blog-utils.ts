import { getContents } from '@/content/content-utils';
import { getSite } from '@/site/site-utils';
import { compareDesc, format } from 'date-fns';
import type { MDXComponents } from 'mdx/types';
import { z } from 'zod';

const baseBlogPostSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  publishedAt: z.coerce.date(),
  heroCaption: z.string().optional(),
});

const blogPostSchema = baseBlogPostSchema.merge(
  z.object({
    path: z.string().min(1),
    url: z.string().url(),
    heroPath: z.string().min(1),
    heroUrl: z.string().url(),
  }),
);

export type BlogPost = z.infer<typeof blogPostSchema>;

export async function getBlogPosts() {
  const [baseBlogPosts, site] = await Promise.all([
    getContents({
      schema: baseBlogPostSchema,
      contentName: 'blog',
    }),
    getSite(),
  ]);

  const blogPosts = baseBlogPosts.map((blogPost) => {
    const path = `/blog/${blogPost.slug}/`;
    const heroPath = `${path}hero.jpg`;

    return {
      ...blogPost,
      data: {
        ...blogPost.data,
        path,
        url: new URL(path, site.baseUrl).toString(),
        heroPath,
        heroUrl: new URL(heroPath, site.baseUrl).toString(),
      },
    };
  });

  blogPosts.sort((blogPostA, blogPostB) =>
    compareDesc(blogPostA.data.publishedAt, blogPostB.data.publishedAt),
  );

  return blogPosts;
}

export async function getBlogPost({ slug }: { slug: string }) {
  const blogPosts = await getBlogPosts();

  const foundIndex = blogPosts.findIndex((blogPost) => blogPost.slug === slug);

  if (foundIndex === -1) {
    return null;
  }

  return {
    current: blogPosts[foundIndex],
    previous:
      foundIndex < blogPosts.length - 1 ? blogPosts[foundIndex + 1] : null,
    next: foundIndex > 0 ? blogPosts[foundIndex - 1] : null,
  };
}

export async function getBlogPostComponents({ slug }: { slug: string }) {
  try {
    const components = (await import(
      `../../public/blog/${slug}/components`
    )) as MDXComponents;

    return components;
  } catch (error) {
    return {};
  }
}

export function getBlogDate(date: Date) {
  return format(date, 'MMMM dd, yyyy');
}
