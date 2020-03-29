const connection = require('../configs/db');

module.exports = {
    getLoan: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT loan.*, user.fullname, user.phone, book.tittle, book.author, book.image FROM loan INNER JOIN user on loan.id_card = user.id_card INNER JOIN book on loan.id_book = book.id_book', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    loanDetail: (id_loan) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM loan WHERE id_loan', id_loan,
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    insertLoan: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO loan SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    updateLoan: (data, idLoan) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE loan SET ? WHERE id_loan = ?',
                [data, idLoan], (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    deleteLoan: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM loan WHERE id_loan',
                id, (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    }
};