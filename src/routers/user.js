const express = require('express');
const Router = express.Router();
const userController = require('../controller/user');
Router
    .get('/', userController.getUser)
    .get('/:id_user', userController.userDetail)
    .post('/', userController.insertUser)
    .post('/register', userController.register)
    .post('/login', userController.login)
    .patch('/:id_user', userController.updateUser)
    .delete('/:id_user', userController.deleteUser);

module.exports = Router;