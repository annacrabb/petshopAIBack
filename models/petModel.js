const mongoose = require('mongoose');

const Schema = mongoose.Schema
const petSchema = new Schema({
    petName: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    cost: {
        type: Number,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Pet', petSchema)
