const { Router } = require('express');
const orderController = require('../controllers/order.controller');
const ordersRouter = Router();

ordersRouter
  .route('/')
  .get(orderController.getAllOrders)
  .post(orderController.postOrder);

module.exports = ordersRouter;
