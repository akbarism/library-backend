const connection = require('../configs/db');

module.exports = {
    getUser: (search) => {
        return new Promise((resolve, reject) => {
            if (search){
                connection.query('SELECT * FROM user WHERE id_user LIKE ? OR fullname LIKE ?', [`%${search}%`, `%${search}%`],
                    (err, result) => {
                        if (!err) {
                            resolve(result);
                        } else {
                            reject(new Error(err));
                        }

                    });
            }else{
                connection.query('SELECT * FROM user',
                    (err, result) => {
                        if (!err) {
                            resolve(result);
                        } else {
                            reject(new Error(err));
                        }
                    });
            }
        });
    },
    userDetail: (id_user) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE id_user = ?', id_user,
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    insertUser: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?',
                data, (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    updateUser: (data, idUser) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET ? WHERE id_user = ?',
                [data, idUser], (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        '';
                        reject(new Error(err));
                    }
                });
        });
    },
    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM user WHERE id_user = ?',
                id, (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    register: data => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?',
                data, (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    login: email => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE email = ?', email, (err, result) => {
                if (!err) {
                    resolve(result[0]);
                } else {
                    reject(new Error(err));
                }
            });
        });
    }
};

