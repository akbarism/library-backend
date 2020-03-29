const connection = require('../configs/db');

module.exports = {
    getCategory: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM categories', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    categoryDetail: (id_category) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT categories.category_name, book.*  FROM categories INNER JOIN BOOK ON categories.id_category = book.id_category WHERE category_name = ?', id_category,
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    }
};