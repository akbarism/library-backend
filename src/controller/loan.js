const loanModel = require('../models/loan');
module.exports = {
    getLoan: (req, res) => {
        loanModel.getLoan()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => console.log(err));
    },
    loanDetail: (req, res) => {
        const idLoan = req.params.id_loan;
        loanModel.loanDetail(idLoan)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => console.log(err));
    },
    insertLoan: (req, res) => {
        const {
            id_book,
            id_card
        } = req.body;
        const data = {
            id_book,
            id_card
        };
        loanModel.insertLoan(data)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => console.log(err));
    },
    updateLoan: (req, res) => {
        const idLoan = req.params.id_loan;
        const {
            id_book,
            fine
        } = req.body;
        const data = {
            id_book,
            fine
        };
        loanModel.updateLoan(data, idLoan)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => 
                console.log(err));
    },
    deleteLoan: (req, res) =>{
        const idLoan = req.params.id_loan;
        loanModel.deleteLoan(idLoan)
            .then((result)=>{
                res.send(result);
            })
            .catch((err)=> console.log(err));
    }
};
