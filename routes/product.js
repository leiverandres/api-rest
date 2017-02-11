const router = require('express').Router();
const productCtlr = require('../controllers/product');

module.exports = function productRoutes(app) {
  app.get('/', productCtlr.getProducts);

  app.get('/:productId', productCtlr.getProduct);

  app.post('/', productCtlr.createProduct);

  router.put('/:productId', productCtlr.updateProduct);

  router.delete('/:productId', productCtlr.deleteProduct);
};
