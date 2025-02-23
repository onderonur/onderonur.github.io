import { Section, SectionTitle } from '@/core/ui/components/section';
import { ProjectCard } from '@/features/projects/components/project-card';
import { getProjects } from '@/features/projects/data';

export async function Projects() {
  const projects = await getProjects();

  return (
    <>
      {projects.map((section) => {
        return (
          <Section key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            <ul className="grid-cols-autofill-64 grid gap-4">
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
