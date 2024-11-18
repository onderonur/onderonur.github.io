import { getData } from '@/features/contents/data';
import { skillsSchema } from './schemas';

export async function getSkills() {
  const skills = await getData({ schema: skillsSchema, contentName: 'skills' });
  return skills;
}
