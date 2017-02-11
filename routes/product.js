const productCtlr = require('../controllers/product');
const router = require('express').Router();

router.get('/', productCtlr.getProducts);

router.get('/:productId', productCtlr.getProduct);

router.post('/', productCtlr.createProduct);

router.put('/:productId', productCtlr.updateProduct);

router.delete('/:productId', productCtlr.deleteProduct);

module.exports = router;
