'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
	res.send(200, {products: []});
});

app.get('/api/products/:productId', (req, res) => {

});

app.post('/api/products', (req, res) => {
  console.log('POST /api/products');
  console.log(req.body);

  let product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;

  product.save((err, productStored) => {
    if (err) res.status(500).send({message: 'Error saving in DB'});
    res.status(200).send({product: productStored});
  });
});

app.put('/api/products/:productId', (req, res) => {

});

app.delete('/api/products/:productId', (req, res) => {

});

mongoose.connect('mongodb://localhost:27018/shop', (err, res) => {
  if (err) {
    return console.log(`Connection to DB Failed!! ${err}`);
  }
  console.log('Connection to DB done');

  app.listen(port, () => {
    console.log(`API REST running on http://localhost:${port}`);
  });
});
