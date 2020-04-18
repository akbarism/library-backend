const express = require('express');
const book = require('./book');
const user = require('./user');
const loan = require('./loan');
const categories = require('./categories');



const Router = express.Router();
Router
    .use('/book', book)
    .use('/user', user)
    .use('/categories', categories)
    .use('/loan', loan);

module.exports = Router;