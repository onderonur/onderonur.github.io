import { AuthorContactInfo } from '@/author/author-contact-info';
import { getAuthor } from '@/author/author-utils';
import { MDXContent } from '@/common/mdx-content';
import { Prose } from '@/common/prose';
import { getMetadata } from '@/seo/seo-utils';
import { Card, CardHeader } from '@/shadcn-ui/ui/card';
import { Separator } from '@/shadcn-ui/ui/separator';
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
