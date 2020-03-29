const express = require('express');
const Router = express.Router();
const categoryController = require('../controller/categories')

Router

    .get('/', categoryController.getCategory)
    .get('/:id_category', categoryController.categoryDetail)

module.exports = Router;