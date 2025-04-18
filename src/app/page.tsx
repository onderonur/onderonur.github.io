import { getMetadata } from '@/core/seo/utils';
import { Card, CardHeader } from '@/core/shadcn-ui/components/card';
import { Separator } from '@/core/shadcn-ui/components/separator';
import { MDXContent } from '@/core/ui/components/mdx-content';
import { Prose } from '@/core/ui/components/prose';
import { AuthorContactInfo } from '@/features/author/components/author-contact-info';
import { getAuthor } from '@/features/author/data';
import Image from 'next/image';

export async function generateMetadata() {
  return await getMetadata({
    title: 'Home',
    pathname: '/',
  });
}

export default async function HomePage() {
  const author = await getAuthor();

  return (
    <main className="flex flex-col gap-12">
      <Card className="mx-auto p-6">
        <CardHeader className="items-center gap-6 p-6 sm:flex-row">
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
              <p className="text-muted-foreground text-xl font-bold">
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
