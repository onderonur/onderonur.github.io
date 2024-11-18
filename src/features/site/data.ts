import { getData } from '@/features/contents/data';
import { siteSchema } from './schemas';

export async function getSite() {
  const site = await getData({ schema: siteSchema, contentName: 'site' });
  return site;
}
