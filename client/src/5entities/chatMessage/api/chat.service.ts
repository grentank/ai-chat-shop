import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import axiosInstance from '../../../6shared/api/axiosInstance';
import { chatMessageSchema, ChatMessageT } from '../model/chatMessage.schema';

class ChatService {
  constructor(private client: AxiosInstance) {}

  async createChat(text: string): Promise<ChatMessageT> {
    try {
      const response = await this.client.post('/chat/init', { text });
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

  async sendUserMessage(messages: ChatMessageT[], text: string): Promise<ChatMessageT> {
    try {
      const response = await this.client.post('/chat/', { messages, text });
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
