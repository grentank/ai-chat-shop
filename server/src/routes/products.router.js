const { Router } = require('express');
const productController = require('../controllers/products.controller');
const productsRouter = Router();

productsRouter.route('/').get(productController.getAllProducts);

productsRouter.route('/:id').get(productController.getOneProduct);

module.exports = productsRouter;
