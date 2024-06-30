import { z } from 'zod';
import { pointItemFormSchema } from '../validation/pointItemFormSchema';

export type PointItemFormFields = z.infer<typeof pointItemFormSchema>;
