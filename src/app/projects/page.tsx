import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from '@/common/page-header';
import { Projects } from '@/projects/projects';
import { getMetadata } from '@/seo/seo-utils';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  "Browse through a collection of open-source projects I've personally implemented.";

export const metadata = getMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  pathname: '/projects',
});

export default function ProjectsPage() {
  return (
    <main className="flex flex-col gap-8">
      <PageHeader>
        <PageHeaderTitle>{PAGE_TITLE}</PageHeaderTitle>
        <PageHeaderDescription>{PAGE_DESCRIPTION}</PageHeaderDescription>
      </PageHeader>
      <Projects />
    </main>
  );
}
