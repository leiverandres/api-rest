const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product');
const indexRouter = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', indexRouter);
app.use('/api/products', productRouter);

module.exports = app;
