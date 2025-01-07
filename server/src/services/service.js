const models = require('../../db/models');
const orderSchema = require('../schemas/order.schema');
const productsSchema = require('../schemas/products.schema');

class ProductService {
  constructor({ Product, Order }) {
    this.Product = Product;
    this.Order = Order;
  }

  async getProducts() {
    const products = await this.Product.findAll({ order: [['id', 'DESC']] });
    return productsSchema.array().parse(products);
  }

  async getProductById(id) {
    const product = await this.Product.findByPk(id);
    return productsSchema.parse(product);
  }

  async getOrders() {
    const orders = await this.Order.findAll({ order: [['id', 'DESC']] });
    return orderSchema.array().parse(orders);
  }

  async createOrder(order) {
    const newOrder = await this.Order.create(order);
    return orderSchema.parse(newOrder);
  }
}

const productService = new ProductService(models);
module.exports = productService;
