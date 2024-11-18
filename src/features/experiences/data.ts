import { getContents } from '@/features/contents/data';
import { experienceSchema } from './schemas';

export async function getExperiences() {
  const baseExperiences = await getContents({
    schema: experienceSchema,
    contentName: 'experiences',
  });

  const experiences = baseExperiences.map((experience) => ({
    ...experience,
    data: {
      ...experience.data,
      logo: `/experiences/${experience.slug}/logo.jpg`,
    },
  }));

  experiences.sort(
    (experienceA, experienceB) =>
      experienceB.data.order - experienceA.data.order,
  );

  return experiences;
}
