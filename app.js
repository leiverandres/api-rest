const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const productRouter = require('./routes/product')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/products', productRouter);

module.exports = app;
