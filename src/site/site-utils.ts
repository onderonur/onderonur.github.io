import { getData } from '@/content/content-utils';
import { z } from 'zod';

const siteSchema = z.object({
  baseUrl: z.string(),
  title: z.string(),
  titleTemplate: z.string(),
  description: z.string(),
  image: z.string(),
  googleSiteVerification: z.string(),
});

export type Site = z.infer<typeof siteSchema>;

export async function getSite() {
  const site = await getData({ schema: siteSchema, contentName: 'site' });
  return site;
}
