import { z } from 'zod';

export const chatMessageSchema = z.object({
  id: z.number(),
  text: z.string(),
  isUser: z.boolean(),
});

export type ChatMessageT = z.infer<typeof chatMessageSchema>;
