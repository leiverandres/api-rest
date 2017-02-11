const Product = require('../models/product');

module.exports = {
  getProduct(req, res) {
    const productId = req.params.productId;
    Product.findById(productId, (err, product) => {
      if (err) {
        return res.status(500).send({ message: `Error al realizar la petición ${err}` });
      }
      if (!product) {
        return res.status(404).send({ message: 'No existe producto con ese ID' });
      }
      return res.status(200).send({ product });
    });
  },
  getProducts(req, res) {
    Product.find({}, (err, products) => {
      if (err) {
        res.status(500).send({ message: `Error al realizar la petición ${err}` });
      }
      if (!products) {
        res.status(404).send({ message: 'No existen productos' });
      }
      res.status(200).send({ products });
    });
  },
  createProduct(req, res) {
    const product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored) => {
      if (err) res.status(500).send({ message: 'Error saving in DB' });
      res.status(201).send({ product: productStored });
    });
  },
  updateProduct(req, res) {
    const productId = req.params.productId;
    Product.findOneAndRemove({ _id: productId }, (err, product) => {
      if (err) {
        res.status(500).send({ message: `Error al realizar la petición ${err}` });
      }
      if (!product) {
        res.status(404).send({ message: 'No existen productos para eliminar' });
      }
      res.status(204).send({ message: 'Producto ha sido eliminado' });
    });
  },
  deleteProduct(req, res) {
    const productId = req.params.productId;
    const bodyUpdate = req.body;
    Product.findByIdAndUpdate(productId, bodyUpdate, (err, product) => {
      if (err) {
        res.status(500).send({ message: `Error al realizar la petición ${err}` });
      }
      res.status(200).send({ product });
    });
  },
};
