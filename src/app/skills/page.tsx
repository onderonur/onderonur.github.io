import { getMetadata } from '@/core/seo/utils';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from '@/core/ui/components/page-header';
import { SkillCard } from '@/features/skills/components/skill-card';
import { getSkills } from '@/features/skills/data';

const PAGE_TITLE = 'Skills';
const PAGE_DESCRIPTION =
  'An overview of the tools, technologies, and methodologies I use and love.';

export async function generateMetadata() {
  return await getMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    pathname: '/skills',
  });
}

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <main className="flex flex-col gap-4">
      <PageHeader>
        <PageHeaderTitle>{PAGE_TITLE}</PageHeaderTitle>
        <PageHeaderDescription>{PAGE_DESCRIPTION}</PageHeaderDescription>
      </PageHeader>
      <ul className="grid-cols-autofill-36 grid gap-4">
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
