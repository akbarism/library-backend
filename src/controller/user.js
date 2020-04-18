const userModel = require('../models/user');
const miscHelper = require('../helpers/helpers');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();
const connection = require('../configs/db');


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
            photo: `http://localhost:8000/uploads/${req.file.filename}`

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

            fullname,
            email,
            password
        } = req.body;
        const data = {

            fullname,
            email,
            password,
            status: 0,

        };
        const salt = genSaltSync(10);
        data.password = hashSync(data.password, salt);
        data.salt = salt;
        userModel.register(data)
            .then(result => {
                result.email = data.email;
                const newresult = result;
                let token = jwt.sign({ id: result.insertId, email: email }, process.env.SECRET_KEY);
                console.log(token);
                
                newresult.token = token;
                // const tokenactiv = jwt.verify(token, process.env.SECRET_KEY);
                // console.log(tokenactiv);
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD
                    }
                });
                const mailOptions = {
                    from: 'maniskntl71@gmail.com',
                    to: result.email,
                    subject: 'link to activate',
                    html: '<H1>THANKS FOR REGISTER!</H1><BR><P>click the link below to activate</P><br><p>Click<a href="http://localhost:8080/auth?activated=' + token + '"> LINK</a></p>'
                };
                transporter.sendMail(mailOptions, (err) => {
                    if (err) {
                        res.send('Email ctivation Failed !');
                    } else {
                        const result = {
                            token: token,
                            status: 'succes'
                        };
                        miscHelper.response(res, result, 200, newresult);
                    }
                });
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

    },
    authentication: (req, res) => {
        const reqtoken = req.query.activated;
        const verify = jwt.verify(reqtoken, process.env.SECRET_KEY);
        
        const status = {
            status: 1
        };
        connection.query(`UPDATE user SET status = ${status.status} WHERE id_user = ${verify.id}`, (err, result) => {
            if (err) {
                miscHelper.response(res, err, 202, 'Failed Activation');
            }
            miscHelper.response(res, result, 200, 'Success Activation');
        });
    },

};