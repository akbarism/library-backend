const express = require('express');
const Router = express.Router();
const userController = require('../controller/user');
// const auth = require('../helpers/auth');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage
});
Router
    .get('/', userController.getUser)
    .get('/auth', userController.authentication)
    .get('/:id_user', userController.userDetail)
    .post('/', upload.single('photo'), userController.insertUser)
    .post('/register', userController.register)
    .post('/login', userController.login)
    .patch('/:id_user', userController.updateUser)
    .delete('/:id_user', userController.deleteUser);


module.exports = Router;