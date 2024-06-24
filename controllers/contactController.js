const Contact = require('../models/contactModel')
const mongoose = require('mongoose')

const submitForm = async (req, res) => {
    const { email, name, reason, subject } = req.body

    console.log('received form:', req.body)

    let emptyFields = []

    if (!name) {
        emptyFields.push('name')
    }
    if (!email) {
        emptyFields.push('email')
    }
    if (!reason) {
        emptyFields.push('reason')
    }
    if (!subject) {
        emptyFields.push('subject')
    }

    if (emptyFields.length > 0) {
        console.log('Empty fields:', emptyFields)
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try {
        const form = await Contact.create({ name, email, reason, subject })
        res.status(200).json(form)
    } catch (error) {
        console.log('Error creating form', error.message)
        res.status(400).json({ error: error.message })
    }

}
module.exports = {
    submitForm
}
