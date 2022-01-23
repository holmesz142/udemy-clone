const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    fullName: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    classes: [
        { type: mongoose.SchemaTypes.ObjectId, ref: 'Class' }
    ],
    courses: [
        { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }
    ]


}, { timestamps: true })

// User.pre(/^find/, function (next) {
//     this.populate({
//         path: 'classes',
//         select: '_id',
//     });
//     next();
// });

User.pre(/^find/, function (next) {
    this.populate({
        path: ' courses',
        select: '_id',
    });
    next();
});


module.exports = mongoose.model('User', User)