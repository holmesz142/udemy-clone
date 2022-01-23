const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Class = new Schema({
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
    Image: {
        type: String
    },
    FK_Author: {
        type: String
    },
    TimeStart: {
        type: Date
    },
    TimeEnd: {
        type: Date
    },
    students: [
        { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }
    ]

}, { timestamps: true })

Class.pre(/^find/, function (next) {
    this.populate({
        path: 'students',
        select: '-password',
    });
    next();
});


module.exports = mongoose.model('Class', Class)