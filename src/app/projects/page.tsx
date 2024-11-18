import { getMetadata } from '@/core/seo/utils';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from '@/core/ui/components/page-header';
import { Projects } from '@/features/projects/components/projects';

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
