import { z } from 'zod';

export const experienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  dateRange: z.string(),
  location: z.string(),
  order: z.number(),
});
