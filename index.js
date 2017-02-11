/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/shop', (err) => {
  if (err) {
    console.error(`Connection to DB Failed!! ${err}`);
    return;
  }
  console.log('Connection to DB done');

  app.listen(port, () => {
    console.log(`API REST running on http://localhost:${port}`);
  });
});
