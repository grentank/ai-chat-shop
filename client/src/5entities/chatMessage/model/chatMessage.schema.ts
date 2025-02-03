import { z } from 'zod';

export const chatMessageSchema = z.object({
  messageId: z.string(),
  content: z.string(),
  role: z.enum(['system', 'assistant', 'user']),
});

export type ChatMessageT = z.infer<typeof chatMessageSchema>;
