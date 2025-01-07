import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import { productsSchema, ProductT } from '../model/products.schema';
import axiosInstance from '../../../6shared/api/axiosInstance';


class ProductService {
  constructor(private client: AxiosInstance) {}

  async getProducts(): Promise<ProductT[]> {
    try {
      const response = await this.client('/products');
      return productsSchema.array().parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZodError:', error.issues);
      } else {
        console.error(error);
      }
      return Promise.reject(new Error('Error fetching posts'));
    }
  }

  async getProductById(id: ProductT['id']): Promise<ProductT> {
    try {
      const response = await this.client(`/products/${id}`);
      return productsSchema.parse(response.data);
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

const productService = new ProductService(axiosInstance);

export default productService;