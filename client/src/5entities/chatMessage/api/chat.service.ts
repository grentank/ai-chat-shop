import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import axiosInstance from '../../../6shared/api/axiosInstance';
import { chatMessageSchema, ChatMessageT } from '../model/chatMessage.schema';

class ChatService {
  constructor(private client: AxiosInstance) {}

  async sendMessage(text: string): Promise<ChatMessageT> {
    try {
      const response = await this.client.post('/chat', { text });
      return chatMessageSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZodError:', error.issues);
      } else {
        console.error(error);
      }
      return Promise.reject(new Error('Error fetching posts'));
    }
  }
}

const chatService = new ChatService(axiosInstance);

export default chatService;
