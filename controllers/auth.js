const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../service/index');

module.exports = {
  singUp(req, res) {
    User.findOne({ email: req.body.email }, (error, user) => {
      if (error) res.status();
      const user = new User({
        email: req.body.email,
        username: req.body.username,
      });

      user.save((err) => {
        if (err) {
          res.status(500).send({ message: 'Error al crear al usuario' });
        }
        res.status(201).send({ token: service.createToken(user) });
      });
    });
  },
  singIn(req, res) {
    User.findOne({
      email: req.body.email,
    }, )
  },
};
