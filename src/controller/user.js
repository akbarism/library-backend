const userModel = require('../models/user');
const miscHelper = require('../helpers/helpers');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
module.exports = {
    getUser: (req, res) => {
        const search = req.query.search;
        userModel.getUser(search)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    },
    userDetail: (req, res) => {
        const idUser = req.params.id_user;
        userModel.userDetail(idUser)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    },
    insertUser: (req, res) => {
        const {
            fullname,
            email,
            password } = req.body;
        const data = {
            fullname,
            email,
            password,

        };
        userModel.insertUser(data)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    },
    updateUser: (req, res) => {
        const idUser = req.params.id_user;
        const {
            id_card,
            fullname,
            email,
        } = req.body;
        const data = {
            id_card,
            fullname,
            email,
           

        };
        userModel.updateUser(data, idUser)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    },
    deleteUser: (req, res) => {
        const idUser = req.params.id_user;
        userModel.deleteUser(idUser)
            .then((result) => {
                miscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    },
    register: (req, res) => {
        const {
            user_name,
            fullname,
            email,
            password
        } = req.body;
        const data = {
            user_name,
            fullname,
            email,
            password,
            salt: ''
        };
        const salt = genSaltSync(10);
        data.password = hashSync(data.password, salt);
        data.salt = salt;
        userModel.register(data)
            .then(result => {
                res.send(result);
            })
            .catch(err => console.log(err));
    },
    login: (req, res) => {
        const {
            email,
            password } = req.body;
        const data = {
            email,
            password
        };
        userModel.login(data.email)
            .then(result => {

                //console.log(data.password, result.password);

                const results = compareSync(data.password, result.password);
                console.log(results);

                if (results) {
                    return miscHelper.response(res, result, 200, 'Login Succesfuly');
                } else {
                    return miscHelper.response(res, null, 403, 'Invalid Password');

                }
            })
            .catch(err => {
                miscHelper.response(res, err, 403, 'Wrong Email');
            });
    }
};