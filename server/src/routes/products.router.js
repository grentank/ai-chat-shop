const { Router } = require('express');
const productController = require('../controllers/products.controller');
const productsRouter = Router();

productsRouter.route('/').get(productController.getAllProducts);
productsRouter.route('/reset').get(productController.resetProducts);

productsRouter.route('/:id').get(productController.getOneProduct);
productsRouter
  .route('/:id/comments')
  .get(productController.getCommentByProductId)
  .post(productController.createCommentByProductId);

module.exports = productsRouter;
