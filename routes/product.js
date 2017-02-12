const productCtlr = require('../controllers/product');
const router = require('express').Router();
const auth = require('../middlewares/auth');

router.get('/', productCtlr.getProducts);

router.get('/:productId', productCtlr.getProduct);

router.post('/', productCtlr.createProduct);

router.put('/:productId', productCtlr.updateProduct);

router.delete('/:productId', productCtlr.deleteProduct);

router.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' });
});

module.exports = router;
