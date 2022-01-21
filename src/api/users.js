const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', (req, res) => {
    models.User.findAll()
      .then((result) => {
          res.json(result);
      });
});

router.get('/:id', (req, res) => {
    models.User.findOne({where: {id: req.params.id}})
        .then((result) => {
            res.json(result);
        });
});

router.post('/', (req, res) => {
    models.User.create(req.body)
        .then((result) => {
            res.json(result);
        });
});

router.get('/random/create', (req, res) => {
    models.User.create({ firstName: 'Jane', lastName: 'Doe' })
      .then((result) => {
            res.json(result);
      });
});

router.get('/db/healthcheck', (req, res) => {
    res.json({message: 'healthcheck'});
});

module.exports = router;
