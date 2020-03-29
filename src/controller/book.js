const bookModel = require('../models/book');
const MiscHelper = require('../helpers/helpers');
module.exports = {

    getBooks: (req, res) => {
        
        const search = req.query.search;
        const sort = req.query.sort;
        const pagination = req.query.pagination;
        bookModel.getBooks(search, pagination, sort)

            .then((resultBook) => {
                const jumlah = resultBook.length;
                const result = resultBook;
                console.log(resultBook.length);
                console.log(result.length);
                if (resultBook[2].length > 0) {
                    MiscHelper.response(res, result, 200, false, jumlah);


                } else {
                    MiscHelper.response(res, result, 404, false, jumlah);
                }

            })
            .catch((err) => console.log(err));
    },
    bookDetail: (req, res) => {
        const idBook = req.params.id_book;
        bookModel.bookDetail(idBook)
            .then((result) => {
                // res.send(result)
                // console.log(result)
                MiscHelper.response(res, result, 200);
            })
            .catch((err) => console.log(err));
    },
    insertBook: (req, res) => {
        const {
            tittle,
            description,
            author,
            image,
            status,
            id_category } = req.body;
        const data = {
            tittle,
            description,
            author,
            image,
            status,
            id_category
        };
        bookModel.insertBook(data)
            .then((result) => {
                // res.send(result)
                // console.log(result)
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
            image,
            status,
            id_category } = req.body;
        const data = {
            tittle,
            description,
            author,
            image,
            status,
            id_category
        };
        bookModel.updateBook(data, idbook)
            .then((result) => {
                // res.send(result)
                // console.log(result)
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