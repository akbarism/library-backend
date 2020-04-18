// const jwt = require('jsonwebtoken');

// require('dotenv').config();
// module.exports = {
//     verify: (req, res, next) => {
//         const token = req.header['x-acces-token'];
//         console.log(token);
//         try {
//             let decoded = jwt.verify(token, process.env.SECRET_KEY);
//             console.log('decoded', decoded);
//             next();

//         }catch(err){
//             res.json({
//                 msg: 'imvalid toket'
//             });
//         }
        
//     },
// };