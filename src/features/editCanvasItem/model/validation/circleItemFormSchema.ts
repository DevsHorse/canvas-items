import { canvasConfig } from '@/shared/config/canvasConfig';
import { z } from 'zod';

export const circleItemFormSchema = z.object({
  x: z.number({ message: 'Required' }).min(0).max(canvasConfig.width),
  y: z.number({ message: 'Required' }).min(0).max(canvasConfig.height),
  radius: z.number({ message: 'Required' }).min(5),
});
