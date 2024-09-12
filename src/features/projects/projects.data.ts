import { getData } from '@/features/content/content.data';
import { projectsSchema } from './projects.schemas';

export async function getProjects() {
  const projects = await getData({
    schema: projectsSchema,
    contentName: 'projects',
  });

  return projects;
}
