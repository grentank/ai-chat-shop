const { ZodError } = require('zod');
const serviceInstance = require('../services/service');

class ProductController {
  constructor(service) {
    this.service = service;
  }

  getAllProducts = async (req, res) => {
    try {
      const products = await this.service.getProducts();
      res.json(products);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) console.log(error.issues);
      res.status(500).json({ message: 'Ошибка сервера', issues: error?.issues });
    }
  };

  getOneProduct = async (req, res) => {
    try {
      const { id } = req.params;
      if (Number.isNaN(Number(id)))
        throw new Error(`id должен быть числом, получено: ${id}`);
      const product = await this.service.getProductById(Number(id));
      res.json(product);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) console.log(error.issues);
      res.status(500).json({ message: 'Ошибка сервера', issues: error?.issues });
    }
  };
}

const productController = new ProductController(serviceInstance);
module.exports = productController;
