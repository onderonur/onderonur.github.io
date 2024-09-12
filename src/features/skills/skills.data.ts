import { getData } from '@/features/content/content.data';
import { skillsSchema } from './skills.schemas';

export async function getSkills() {
  const skills = await getData({ schema: skillsSchema, contentName: 'skills' });
  return skills;
}
