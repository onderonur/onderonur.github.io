import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from '@/common/page-header';
import { getMetadata } from '@/seo/seo-utils';
import { SkillCard } from '@/skills/skill-card';
import { getSkills } from '@/skills/skill-utils';

const PAGE_TITLE = 'Skills';
const PAGE_DESCRIPTION =
  'An overview of the tools, technologies, and methodologies I use and love.';

export const metadata = getMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  pathname: '/skills',
});

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <main className="flex flex-col gap-4">
      <PageHeader>
        <PageHeaderTitle>{PAGE_TITLE}</PageHeaderTitle>
        <PageHeaderDescription>{PAGE_DESCRIPTION}</PageHeaderDescription>
      </PageHeader>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => {
          return (
            <li key={skill.name}>
              <SkillCard skill={skill} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
