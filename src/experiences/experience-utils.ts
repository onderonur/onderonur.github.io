import { getContents } from '@/content/content-utils';
import { z } from 'zod';

const experienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  dateRange: z.string(),
  location: z.string(),
  order: z.number(),
});

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
