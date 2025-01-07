const { ZodError } = require('zod');
const serviceInstance = require('../services/service');

class OrderController {
  constructor(service) {
    this.service = service;
  }

  getAllOrders = async (req, res) => {
    try {
      const products = await this.service.getOrders();
      res.json(products);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) console.log(error.issues);
      res.status(500).json({ message: 'Ошибка сервера', issues: error?.issues });
    }
  };

  postOrder = async (req, res) => {
    try {
      const { body } = req;
      const product = await this.service.createOrder(body);
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) console.log(error.issues);
      res.status(500).json({ message: 'Ошибка сервера', issues: error?.issues });
    }
  };
}

const orderController = new OrderController(serviceInstance);
module.exports = orderController;
