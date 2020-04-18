const connection = require('../configs/db');
//const MiscHelpers = require('../helpers/helpers');

module.exports = {
    getBooks: (search, pagination, sort, ) => {
        return new Promise((resolve, reject) => {
            if (search) {
                connection.query('SELECT book.*, categories.category_name FROM book INNER JOIN categories ON book.id_category = categories.id_category WHERE tittle LIKE ? OR description LIKE ?', [`%${search}%`, `%${search}%`], (err, result) => {

                    if (!err) {
                        resolve([`search of : ${search}`, `total search : ${result.length}`, result]);

                    } else {
                        reject(new Error(err));
                    }
                });
            } else if (pagination) {
                connection.query('SELECT * FROM book LIMIT ' + (pagination * 10 - 10) + ', 10', (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
            } else if (sort) {
                connection.query('SELECT * FROM book ORDER BY ' + sort + ' ASC', (err, result) => {
                    if (!err) {
                        resolve([`sort by : ${sort}`, `content perpage : ${result.length}`, result]);
                    } else {
                        reject(new Error(err));
                    }
                });
            } else {
                connection.query('SELECT book.*, categories.category_name FROM book INNER JOIN categories ON book.id_category = categories.id_category',
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
    bookDetail: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT book.*, categories.category_name FROM book INNER JOIN categories ON book.id_category = categories.id_category WHERE id_book = ?', id,
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    insertBook: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO book SET ?',
                data, (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    updateBook: (data, idbook) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE book SET ? WHERE id_book = ?',
                [data, idbook], (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
        });
    },
    deleteBook: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM book WHERE id_book = ?',
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
