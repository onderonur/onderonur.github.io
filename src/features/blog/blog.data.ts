import { getContents } from '@/features/content/content.data';
import { getSite } from '@/features/site/site.data';
import { compareDesc } from 'date-fns';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { baseBlogPostSchema } from './blog.schemas';
import { getBlogPostDate } from './blog.utils';

export async function getBlogPosts() {
  const [baseBlogPosts, site] = await Promise.all([
    getContents({
      schema: baseBlogPostSchema,
      contentName: 'blog',
    }),
    getSite(),
  ]);

  const blogPosts = baseBlogPosts.map((blogPost) => {
    const path = `/blog/${blogPost.slug}`;
    const heroPath = `${path}/hero.jpg`;

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
    compareDesc(
      getBlogPostDate(blogPostA.data),
      getBlogPostDate(blogPostB.data),
    ),
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
      `../../../public/blog/${slug}/components`
    )) as MDXRemoteProps['components'];

    return components;
  } catch {
    return {};
  }
}
