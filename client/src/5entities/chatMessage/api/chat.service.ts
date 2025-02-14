import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import axiosInstance from '../../../6shared/api/axiosInstance';
import { chatMessageSchema, ChatMessageT } from '../model/chatMessage.schema';

class ChatService {
  constructor(private client: AxiosInstance) {}

  async createChat(text: string): Promise<ChatMessageT> {
    try {
      const response = await this.client.post('/chat/init', { text });
      const newMessage = chatMessageSchema.parse(response.data);
      return {
        ...newMessage,
        content: newMessage.content
          .replaceAll('<script>', '&lt;script&gt;')
          .replaceAll('</script>', '&lt;/script&gt;'),
      };
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
      const newMessage = chatMessageSchema.parse(response.data);
      return {
        ...newMessage,
        content: newMessage.content
          .replaceAll('<script>', '&lt;script&gt;')
          .replaceAll('</script>', '&lt;/script&gt;'),
      };
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
