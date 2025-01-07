import { z } from 'zod';

export const orderSchema = z.object({
  id: z.number(),
  fullname: z.string(),
  address: z.string(),
  phone: z.string(),
  cost: z.number(),
});

export type OrderT = z.infer<typeof orderSchema>;
