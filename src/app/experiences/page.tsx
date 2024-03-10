import { MDXContent } from '@/common/mdx-content';
import { PageHeader, PageHeaderTitle } from '@/common/page-header';
import { Prose } from '@/common/prose';
import { getExperiences } from '@/experiences/experience-utils';
import { getMetadata } from '@/seo/seo-utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shadcn-ui/ui/card';
import { Separator } from '@/shadcn-ui/ui/separator';
import Image from 'next/image';

const PAGE_TITLE = 'Experiences';
const PAGE_DESCRIPTION =
  "Discover my professional journey, detailing the companies and roles I've been a part of.";

export const metadata = getMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  pathname: '/experiences',
});

export default async function ExperiencesPage() {
  const experiences = await getExperiences();

  return (
    <main className="mx-auto flex max-w-screen-md flex-col gap-4">
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
                <CardContent className="pt-6">
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
