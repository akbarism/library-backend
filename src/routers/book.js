const Router = express.Router();
const bookController = require('../controller/book');
// const redisHelpers = require('../helpers/redis');
// const morgan = require('morgan');

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
    .get('/', bookController.getBooks)
    .get('/:id_book', bookController.bookDetail)
    .post('/', upload.single('image'), bookController.insertBook)
    .patch('/:id_book', bookController.updateBook)
    .delete('/:id_book', bookController.deleteBook);
module.exports = Router;