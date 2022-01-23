const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductOwn = new Schema({
    idProduct: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },


}, { timestamps: true })

module.exports = mongoose.model('ProductOwn', ProductOwn)