const express = require('express')
const { submitForm } = require('../controllers/contactController')

const router = express.Router();

//POST a contact form response
router.post('/', submitForm)

module.exports = router;