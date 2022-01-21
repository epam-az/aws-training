const express = require('express');

const hello = require('./hello');
const users = require('./users');
const books = require('./books');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello, it an API.'
  });
});

router.use('/hello', hello);
router.use('/users', users);
router.use('/books', books);

module.exports = router;
