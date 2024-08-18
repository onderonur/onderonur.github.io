import { BlogPostHeader } from '@/blog/blog-post-header';
import { BlogPostJsonLd } from '@/blog/blog-post-json-ld';
import {
  getBlogPost,
  getBlogPostComponents,
  getBlogPosts,
} from '@/blog/blog-utils';
import { stripHtml } from '@/common/common-utils';
import { MDXContent } from '@/common/mdx-content';
import { Prose } from '@/common/prose';
import { ShareButtons } from '@/common/share-buttons';
import { Link } from '@/routing/link';
import { getMetadata } from '@/seo/seo-utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();

  return blogPosts.map((blogPost) => {
    return { slug: blogPost.slug };
  });
}

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: BlogPostPageProps): Promise<Metadata> {
  const blogPost = await getBlogPost({ slug });

  if (!blogPost) {
    notFound();
  }

  const { current } = blogPost;

  return getMetadata({
    title: current.data.title,
    description: current.data.description,
    pathname: current.data.path,
    images: [
      {
        url: current.data.heroPath,
        alt: stripHtml(current.data.heroCaption ?? ''),
      },
    ],
  });
}

export default async function BlogPostPage({
  params: { slug },
}: BlogPostPageProps) {
  const [components, blogPost] = await Promise.all([
    getBlogPostComponents({ slug }),
    getBlogPost({ slug }),
  ]);

  if (!blogPost) {
    notFound();
  }

  const { current, next, previous } = blogPost;

  return (
    <main>
      <BlogPostJsonLd frontmatter={current.data} />
      <Prose>
        <article>
          <BlogPostHeader frontmatter={current.data} />
          <div>
            <MDXContent
              source={current.content}
              components={{
                ...components,
              }}
              options={{
                scope: {
                  slug,
                },
              }}
            />
          </div>
          <footer>
            <ShareButtons url={current.data.url} />
          </footer>
        </article>
      </Prose>
      {(previous || next) && (
        <div className="flex flex-col gap-6 py-6">
          <hr />
          <div className="flex flex-wrap gap-2">
            {previous && (
              <Link
                href={previous.data.path}
                className="flex max-w-72 flex-row-reverse gap-1"
              >
                <div>
                  <div className="text-sm text-muted-foreground">Previous</div>
                  <div className="line-clamp-2">{previous.data.title}</div>
                </div>
                <RxChevronLeft className="mt-5 h-6 w-6 flex-none" />
              </Link>
            )}
            {next && (
              <Link
                href={next.data.path}
                className="ml-auto flex max-w-72 gap-1"
              >
                <div>
                  <div className="text-sm text-muted-foreground">Next</div>
                  <div className="line-clamp-2">{next.data.title}</div>
                </div>
                <RxChevronRight className="mt-5 h-6 w-6 flex-none" />
              </Link>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
