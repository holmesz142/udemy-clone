const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Intros: [
        { type: String }
    ],
    Contents: [{
        part: {
            type: String,
        },
        content: {
            type: String
        },
    }],
    Requirements: [
        { type: String }
    ],
    Image: {
        type: String
    },
    TotalLesson: {
        type: String
    },
    TotalTime: {
        type: String
    },
    tag: {
        type: String
    },
    FK_Author: {
        type: String
    }


}, { timestamps: true })

module.exports = mongoose.model('Product', Product)