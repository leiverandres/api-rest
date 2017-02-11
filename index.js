/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.host, (err) => {
  if (err) {
    console.error(`Connection to DB Failed!! ${err}`);
    return;
  }
  console.log('Connection to DB done');

  app.listen(config.port, () => {
    console.log(`API REST running on http://localhost:${config.port}`);
  });
});
