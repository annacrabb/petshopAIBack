const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true,
        enum: [
            'I have questions about how sponsorship works',
            'I want to tell you about more research to fund',
            'I want to see how else I can help'
        ]
    },
    subject: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
