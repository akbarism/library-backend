require('dotenv').config();
//const db = require('./src/configs/db');
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const router = require('./src/routers/index.js');
const cors = require('cors');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('./uploads'));
app.use(router);
app.listen(port, () => {
    console.log(`App listen post ${port}`);

});
