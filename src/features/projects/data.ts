import { getData } from '@/features/contents/data';
import { projectsSchema } from './schemas';

export async function getProjects() {
  const projects = await getData({
    schema: projectsSchema,
    contentName: 'projects',
  });

  return projects;
}
