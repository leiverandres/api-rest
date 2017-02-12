const jwt = require('jwt');
const moment = require('moment');
const config = require('../config');

function isAuth(req, res, next) {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({ message: 'No tienes authorization' });
  }
  token = token.split(' ')[1];
  const payload = jwt.decode(token, config.SECRET_TOKEN);

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'El token ha caducado' });
  }

  req.user = payload.sub;
  next();
}

module.exports = isAuth;
