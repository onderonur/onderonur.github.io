import { z } from 'zod';

export const authorSchema = z.object({
  name: z.string(),
  role: z.string(),
  xUsername: z.string(),
  linkedinUsername: z.string(),
  githubUsername: z.string(),
  mail: z.string(),
});
