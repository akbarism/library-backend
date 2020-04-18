const bookModel = require('../models/book');
const MiscHelper = require('../helpers/helpers');
// const conn = require('../configs/db');
require('dotenv').config();
// const redis = require('redis');
// const client = redis.createClient(process.env.PORT_REDIS);
module.exports = {

    getBooks: (req, res) => {
        var jumlah = 0;
        bookModel.getBooks()
            .then((resultBook) => {
                jumlah = resultBook.length;
            });
        const search = req.query.search;
        const sort = req.query.sort;
        const pagination = req.query.pagination;
        bookModel.getBooks(search, pagination, sort)

            .then((resultBook) => {
                const result = resultBook;
                MiscHelper.response(res, result, 200, false, jumlah);
            })


            .catch((err) => console.log(err));
    },
    bookDetail: (req, res) => {
        const idBook = req.params.id_book;
        bookModel.bookDetail(idBook)
            .then((result) => {

                MiscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    },
    insertBook: (req, res) => {
        const {
            tittle,
            author,
            // image,
            status,
            id_category,
            description
        } = req.body;
        const data = {
            tittle,
            author,
            image: `http://localhost:8000/uploads/${req.file.filename}`,
            status,
            id_category,
            description
        };
        bookModel.insertBook(data)
            .then((result) => {
                MiscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    },
    updateBook: (req, res) => {
        const idbook = req.params.id_book;
        const {
            tittle,
            description,
            author,

            status,
            id_category } = req.body;
        const data = {
            tittle,
            description,
            author,

            status,
            id_category
        };
        console.log(data);
        bookModel.updateBook(data, idbook)
            .then((result) => {
                MiscHelper.response(res, result, 200, [idbook, data]);
            })
            .catch((err) => console.log(err));
    },
    deleteBook: (req, res) => {
        const idbook = req.params.id_book;
        bookModel.deleteBook(idbook)
            .then((result) => {
                // res.send(result)
                // console.log(result)
                MiscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    }
};