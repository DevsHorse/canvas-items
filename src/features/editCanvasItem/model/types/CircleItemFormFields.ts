import { z } from 'zod';
import { circleItemFormSchema } from '../validation/circleItemFormSchema';

export type CircleItemFormFields = z.infer<typeof circleItemFormSchema>;
