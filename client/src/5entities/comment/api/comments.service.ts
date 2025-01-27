import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import axiosInstance from '../../../6shared/api/axiosInstance';
import { ProductT } from '../../products/model/products.schema';
import { commentSchema, CommentT } from '../model/comment.schema';

class CommentService {
  constructor(private client: AxiosInstance) {}

  async getCommentsByProductId(id: ProductT['id']): Promise<CommentT[]> {
    try {
      const response = await this.client(`/products/${id}/comments`);
      return commentSchema.array().parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZodError:', error.issues);
      } else {
        console.error(error);
      }
      return Promise.reject(new Error('Error fetching posts'));
    }
  }

  async createNewComment(productId: ProductT['id'], text: string): Promise<CommentT> {
    try {
      const response = await this.client.post(`/products/${productId}/comments`, { text });
      return commentSchema.parse(response.data);
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

const commentService = new CommentService(axiosInstance);

export default commentService;
