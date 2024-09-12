import { getData } from '@/features/content/content.data';
import { siteSchema } from './site.schemas';

export async function getSite() {
  const site = await getData({ schema: siteSchema, contentName: 'site' });
  return site;
}
