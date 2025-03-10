import { getMetadata } from '@/core/seo/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/core/shadcn-ui/components/card';
import { Separator } from '@/core/shadcn-ui/components/separator';
import { MDXContent } from '@/core/ui/components/mdx-content';
import { PageHeader, PageHeaderTitle } from '@/core/ui/components/page-header';
import { Prose } from '@/core/ui/components/prose';
import { getExperiences } from '@/features/experiences/data';
import Image from 'next/image';

const PAGE_TITLE = 'Experiences';
const PAGE_DESCRIPTION =
  "Discover my professional journey, detailing the companies and roles I've been a part of.";

export async function generateMetadata() {
  return await getMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    pathname: '/experiences',
  });
}

export default async function ExperiencesPage() {
  const experiences = await getExperiences();

  return (
    <main className="mx-auto flex max-w-(--breakpoint-md) flex-col gap-4">
      <PageHeader>
        <PageHeaderTitle>{PAGE_TITLE}</PageHeaderTitle>
      </PageHeader>
      <ul className="flex flex-col gap-4">
        {experiences.map((experience) => {
          return (
            <li key={experience.data.order}>
              <Card>
                <CardHeader>
                  <div className="flex gap-6">
                    <Image
                      className="w-12 flex-none self-start rounded"
                      src={experience.data.logo}
                      alt={experience.data.company}
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-xl leading-none">
                        {experience.data.role}
                      </CardTitle>
                      <CardDescription className="font-semibold">
                        {experience.data.company}
                      </CardDescription>
                      <div>
                        <CardDescription>
                          {experience.data.dateRange}
                        </CardDescription>
                        <CardDescription>
                          {experience.data.location}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent>
                  <Prose>
                    <MDXContent source={experience.content} />
                  </Prose>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
