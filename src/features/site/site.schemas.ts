import { z } from 'zod';

export const siteSchema = z.object({
  baseUrl: z.string(),
  title: z.string(),
  titleTemplate: z.string(),
  description: z.string(),
  image: z.string(),
  googleSiteVerification: z.string(),
});
