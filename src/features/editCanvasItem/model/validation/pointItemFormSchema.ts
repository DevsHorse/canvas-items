import { canvasConfig } from '@/shared/config/canvasConfig';
import { z } from 'zod';

export const pointItemFormSchema = z.object({
  x: z.number({ message: 'Required' }).min(0).max(canvasConfig.width),
  y: z.number({ message: 'Required' }).min(0).max(canvasConfig.height),
});
