const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', (req, res) => {
    res.json(models.Book.build({
        name: 'One Flew Over the Cuckoo’s Nest',
        author: 'Ken Elton Kesey'
    }));
});

module.exports = router;
