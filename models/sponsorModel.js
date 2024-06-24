const mongoose = require('mongoose');

const Schema = mongoose.Schema
const sponsorSchema = new Schema({
    sponsorName: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Sponsor', sponsorSchema)
