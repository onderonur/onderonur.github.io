import { Link } from '@/common/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shadcn-ui/ui/card';
import Image from 'next/image';
import type { BlogPost } from './blog-utils';
import { getBlogDate } from './blog-utils';

type BlogPostCardProps = {
  frontmatter: BlogPost;
};

export function BlogPostCard({ frontmatter }: BlogPostCardProps) {
  return (
    <Link href={frontmatter.path}>
      <Card className="flex h-full flex-col overflow-hidden">
        <CardHeader className="p-0 pb-4">
          <div className="relative aspect-[4/3]">
            <Image
              className="object-cover"
              src={frontmatter.heroPath}
              alt={frontmatter.title}
              fill
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <CardTitle className="text-lg">{frontmatter.title}</CardTitle>
          <CardDescription className="pt-2 font-semibold">
            {frontmatter.description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription>
            {getBlogDate(frontmatter.publishedAt)}
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  );
}
