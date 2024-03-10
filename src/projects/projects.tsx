import { Section, SectionTitle } from '@/common/section';
import { ProjectCard } from './project-card';
import { getProjects } from './project-utils';

export async function Projects() {
  const projects = await getProjects();

  return (
    <>
      {projects.map((section) => {
        return (
          <Section key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((project) => {
                return (
                  <li key={project.title}>
                    <ProjectCard project={project} />
                  </li>
                );
              })}
            </ul>
          </Section>
        );
      })}
    </>
  );
}
