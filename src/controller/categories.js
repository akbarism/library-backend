const categoryModel = require('../models/categories')
module.exports = {
    getCategory: (req, res) => {
        categoryModel.getCategory()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => console.log(err))
    },
    categoryDetail: (req, res) => {
        const idCategory = req.params.id_category
        categoryModel.categoryDetail(idCategory)
            .then((result) => {
                res.send(result)
            })
            .catch((err) => console.log(err))
    }
}