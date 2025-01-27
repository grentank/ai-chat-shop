const models = require('../../db/models');
const orderSchema = require('../schemas/order.schema');
const productsSchema = require('../schemas/products.schema');

class ProductService {
  constructor({ Product, Order, Comment, User }) {
    this.Product = Product;
    this.Order = Order;
    this.Comment = Comment;
    this.User = User;
  }

  async getProducts() {
    const products = await this.Product.findAll({ order: [['id', 'ASC']] });
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

  async getCommentsByProductId(productId) {
    const product = await this.Product.findOne({
      where: { id: productId },
      include: {
        model: this.Comment,
        include: [this.User, this.Product],
      },
    });
    return product.Comments;
  }

  async createCommentByProductId(productId, body) {
    await this.Comment.create({ body, productId, userId: 6 });
    const comment = await this.Comment.findOne({
      where: { productId },
      order: [['id', 'DESC']],
      include: [this.User, this.Product],
    });
    return comment;
  }
}

const productService = new ProductService(models);

module.exports = productService;
