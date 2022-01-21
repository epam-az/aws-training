const {Sequelize} = require('sequelize');
const user = require('../models/user');
const book = require('../models/book');

const sequelize = new Sequelize(`postgres://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`);
sequelize.sync();

const models = {
    User: user(sequelize),
    Book: book(sequelize)
}

module.exports = models;
