module.exports = {
  port: process.env.PORT || 5000,
  db: {
    host: process.env.DB || 'mongodb://localhost:27017/shop',
  },
};
