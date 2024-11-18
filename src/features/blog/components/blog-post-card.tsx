import { Link } from '@/core/routing/components/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/core/shadcn-ui/ui/card';
import type { BlogPost } from '@/features/blog/schemas';
import { formatBlogPostDate, getBlogPostDate } from '@/features/blog/utils';
import Image from 'next/image';

type BlogPostCardProps = {
  frontmatter: BlogPost;
};

export function BlogPostCard({ frontmatter }: BlogPostCardProps) {
  return (
    <Link href={frontmatter.path}>
      <Card className="flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[4/3]">
          <Image
            className="object-cover"
            src={frontmatter.heroPath}
            alt={frontmatter.title}
            fill
          />
        </div>
        <CardHeader className="flex-1">
          <CardTitle className="text-lg">{frontmatter.title}</CardTitle>
          <CardDescription className="pt-2 font-semibold">
            {frontmatter.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <CardDescription>
            {formatBlogPostDate(getBlogPostDate(frontmatter))}
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  );
}
