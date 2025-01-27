import { z } from 'zod';
import { productsSchema } from '../../products/model/products.schema';
import { userSchema } from '../../user/model/user.schema';

export const commentSchema = z.object({
  id: z.number(),
  userId: z.number(),
  productId: z.number(),
  body: z.string(),
  Product: productsSchema,
  User: userSchema,
});

export type CommentT = z.infer<typeof commentSchema>;
