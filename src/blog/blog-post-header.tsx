import { stripHtml } from '@/common/common-utils';
import { ShareButtons } from '@/common/share-buttons';
import Image from 'next/image';
import type { BlogPost } from './blog-utils';
import { formatBlogPostDate } from './blog-utils';

type BlogPostHeaderProps = {
  frontmatter: BlogPost;
};

export function BlogPostHeader({
  frontmatter: { title, publishedAt, updatedAt, url, heroPath, heroCaption },
}: BlogPostHeaderProps) {
  return (
    <header>
      <div className="text-center">
        <h1 className="m-0 bg-gradient-to-br from-rose-500 to-primary bg-clip-text pb-2 text-transparent">
          {title}
        </h1>
        <p className="m-0 text-muted-foreground">
          Published at {formatBlogPostDate(publishedAt)}.
          {updatedAt && ` Last updated at ${formatBlogPostDate(updatedAt)}.`}
        </p>
      </div>
      <div>
        <ShareButtons url={url} />
      </div>
      {heroPath && (
        <figure>
          <div className="relative aspect-video">
            <Image
              className="m-0 rounded-md object-cover"
              src={heroPath}
              alt={heroCaption ? stripHtml(heroCaption) : ''}
              priority
              fill
            />
          </div>
          {heroCaption && (
            <figcaption
              className="text-center"
              dangerouslySetInnerHTML={{ __html: heroCaption }}
            />
          )}
        </figure>
      )}
    </header>
  );
}
