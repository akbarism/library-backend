require('dotenv').config();
const db = require('./src/configs/db')
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser')
const router = require('./src/routers/index.js');
const cors = require('cors');

// const bookRoute = require('./src/routers/book');
// const categoriesRoute = require('./src/routers/categories');
// const loanRoute = require('./src/routers/loan');
// const userRoute = require('./src/routers/user');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
// app.use('/books', bookRoute)
// app.use('/categories', categoriesRoute)
// app.use('/loan', loanRoute)
// app.use('/user', userRoute)

app.use(router)
app.listen(port, () => {
    console.log(`App listen post ${port}`);

})

app.get('/kontol', (req, res) => res.send('My secret number is ... ' + process.env.PORT))