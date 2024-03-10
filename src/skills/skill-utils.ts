import { getData } from '@/content/content-utils';
import { z } from 'zod';

const skillSchema = z.object({ name: z.string(), icon: z.string() });

export type Skill = z.infer<typeof skillSchema>;

const skillsSchema = z.array(skillSchema);

export async function getSkills() {
  const skills = await getData({ schema: skillsSchema, contentName: 'skills' });
  return skills;
}
