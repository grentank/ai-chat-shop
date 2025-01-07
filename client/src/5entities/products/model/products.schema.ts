import { z } from 'zod';

export const productsSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  image: z.string(),
});

export type ProductT = z.infer<typeof productsSchema>;
