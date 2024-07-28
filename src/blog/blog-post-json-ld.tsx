import { getAuthor } from '@/author/author-utils';
import { JsonLd } from '@/seo/json-ld';
import { getSite } from '@/site/site-utils';
import type { BlogPosting } from 'schema-dts';
import type { BlogPost } from './blog-utils';

type BlogPostJsonLd = {
  frontmatter: BlogPost;
};

export async function BlogPostJsonLd({
  frontmatter: { title, description, heroUrl, publishedAt, updatedAt },
}: BlogPostJsonLd) {
  const [site, author] = await Promise.all([getSite(), getAuthor()]);

  return (
    <JsonLd<BlogPosting>
      content={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        image: heroUrl,
        description,
        datePublished: publishedAt.toISOString(),
        dateModified: updatedAt?.toISOString(),
        author: [
          {
            '@type': 'Person',
            name: author.data.name,
            url: site.baseUrl,
          },
        ],
      }}
    />
  );
}
