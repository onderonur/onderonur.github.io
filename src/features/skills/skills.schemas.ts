import { z } from 'zod';

const skillSchema = z.object({ name: z.string(), icon: z.string() });

export type Skill = z.infer<typeof skillSchema>;

export const skillsSchema = z.array(skillSchema);
