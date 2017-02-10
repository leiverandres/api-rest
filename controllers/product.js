'use strict'

const Product = require('./models/product');

module.exports {
  getProduct: function(req, res) {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
      if (err)
        return res.status(500).send({message: `Error al realizar la petición ${err}`});
      if (!product)
        return res.status(404).send({message: `No existe producto con ese ID`});
      return res.status(200).send({ product });
    });
  },
  getProducts: function(req, res) {
    Product.find({}, (err, products) => {
      if (err)
        return res.status(500).send({message: `Error al realizar la petición ${err}`});
      if (!products)
        return res.status(404).send({message: `No existen productos`});
      res.status(200).send({ products });
    });
  },
  updateProduct: function() {
    let productId = req.params.productId;
    Product.findOneAndRemove({_id: productId}, (err, product) => {
      if (err)
        return res.status(500).send({message: `Error al realizar la petición ${err}`});
      if (!product)
        return res.status(404).send({message: `No existen productos para eliminar`});
      return res.status(204).send(message: 'Producto ha sido eliminado');
    });
  },
  deleteProduct: function() {
    let productId = req.params.productId;
    let bodyUpdate = req.body;
    Product.findByIdAndUpdate(productId, bodyUpdate, (err, product) => {
      if (err)
        return res.status(500).send({message: `Error al realizar la petición ${err}`});
      return res.status(200).send({ product });
    });
  }
}
