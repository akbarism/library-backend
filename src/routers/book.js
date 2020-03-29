const express = require('express');
const Router = express.Router();
const bookController = require('../controller/book');
const morgan = require('morgan');

Router

    .get('/', bookController.getBooks)
    .get('/:id_book', bookController.bookDetail)
    .post('/', bookController.insertBook)
    .patch('/:id_book', bookController.updateBook)
    .delete('/:id_book', bookController.deleteBook);
module.exports = Router;