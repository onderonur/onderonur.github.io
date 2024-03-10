import { getData } from '@/content/content-utils';
import { z } from 'zod';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  demoUrl: z.string().optional(),
  sourceCodeUrl: z.string(),
  techStack: z.array(z.object({ name: z.string() })),
});

export type Project = z.infer<typeof projectSchema>;

const projectsSectionSchema = z.object({
  title: z.string(),
  items: z.array(projectSchema),
});

const projectsSchema = z.array(projectsSectionSchema);

export async function getProjects() {
  const projects = await getData({
    schema: projectsSchema,
    contentName: 'projects',
  });

  return projects;
}
