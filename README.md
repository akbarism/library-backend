# library-backend

![badge](https://img.shields.io/badge/Code%20Style-Standard-yellowgreen) ![badge](https://img.shields.io/badge/npm-ver--6.13.4-red) ![badge](https://img.shields.io/badge/lang-javascript-yellow) 
# app
---
1. Visual Studio Code
2. Express JS
3. Node JS
4. MySql

# package

* [**bycrypt**](#bcrypt)
* [**body-parser**](body-parser)
* [**cors**](cors)
* [**dotenv**](dotenv)
* [**eslint**](eslint)
* [**express**](express)
* [**mysql**](mysql)
* [**nodemon**](nodemon)
# instalation package

## bcrypt

![b](https://img.shields.io/badge/Build-Passing-brightgreen) ![b](https://img.shields.io/badge/Dependencies-Up%20To%20date-success)

A library to help you hash passwords.
### how to install bcrypt
```
npm install bcrypt
```
### async
```
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
```
### to hash a paswrod
```
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
```
## body-parser

![b](https://img.shields.io/badge/npm-v1.19.0-blue) ![b](https://img.shields.io/badge/Build-Passing-brightgreen) ![b](https://img.shields.io/badge/Download-23M/month-success)

Node.js body parsing middleware.

### how to install body-parser
```
npm install body-parser
```
### example use
```
var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```
## cors

![b](https://img.shields.io/badge/npm-v2.8.5-blue) ![b](https://img.shields.io/badge/Build-Passing-brightgreen) ![b](https://img.shields.io/badge/Download-23M/month-success)

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
### how to install bcrypt
```
npm install cors
```
### simple use
```
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```
## dotenv

![b](https://img.shields.io/badge/Build-Passing-brightgreen) ![b](https://img.shields.io/badge/npm-v8.2.0-blue) ![badge](https://img.shields.io/badge/Code%20Style-Standard-brightgreen)

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
how to install bcrypt
```
npm install dotenv
```
usage
```
require('dotenv').config()
```
## eslint

![b](https://img.shields.io/badge/Build-Passing-brightgreen) ![b](https://img.shields.io/badge/Dependencies-Up%20To%20date-success)

A library to help you hash passwords.
how to install bcrypt
```
npm install eslint
```
## express

![b](https://img.shields.io/badge/Build-Passing-brightgreen) ![b](https://img.shields.io/badge/Dependencies-Up%20To%20date-success)

A library to help you hash passwords.
how to install bcrypt
```
npm install espress
```
## morgan

![b](https://img.shields.io/badge/Build-Passing-brightgreen) ![b](https://img.shields.io/badge/Dependencies-Up%20To%20date-success)

A library to help you hash passwords.
how to install bcrypt
```
npm install morgan
```
## mysql

![b](https://img.shields.io/badge/Build-Passing-brightgreen) ![b](https://img.shields.io/badge/Dependencies-Up%20To%20date-success)

A library to help you hash passwords.
how to install bcrypt
```
npm install mysql
```
