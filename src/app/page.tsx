import { getMetadata } from '@/core/seo/seo.utils';
import { Card, CardHeader } from '@/core/shadcn-ui/ui/card';
import { Separator } from '@/core/shadcn-ui/ui/separator';
import { MDXContent } from '@/core/ui/components/mdx-content';
import { Prose } from '@/core/ui/components/prose';
import { getAuthor } from '@/features/author/author.data';
import { AuthorContactInfo } from '@/features/author/components/author-contact-info';
import Image from 'next/image';

export const metadata = getMetadata({
  title: 'Home',
  pathname: '/',
});

export default async function HomePage() {
  const author = await getAuthor();

  return (
    <main className="flex flex-col gap-12">
      <Card className="mx-auto p-6">
        <CardHeader className="items-center gap-6 sm:flex-row">
          <Image
            className="w-24 rounded"
            src={author.data.avatarPath}
            alt={author.data.name}
            width={180}
            height={180}
          />
          <div className="flex flex-col items-center gap-1 text-center">
            <div>
              <h1 className="text-3xl font-black">{author.data.name}</h1>
              <p className="text-xl font-bold text-muted-foreground">
                {author.data.role}
              </p>
            </div>
            <AuthorContactInfo />
          </div>
        </CardHeader>
      </Card>
      <Separator />
      <Prose className="prose-lg">
        <MDXContent source={author.content} />
      </Prose>
    </main>
  );
}
