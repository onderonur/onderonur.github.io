import type { z } from 'zod';

export type Content<Schema extends z.ZodTypeAny> = {
  slug: string;
  data: z.infer<Schema>;
  content: string;
};
