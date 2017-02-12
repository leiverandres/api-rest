const router = require('express').Router;

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Entry point of the API' });
});

router.get('/authenticate', (req, res) => {
  res.status(200).send({ token: 'this shoudl be the token' });
});

module.exports = router;
