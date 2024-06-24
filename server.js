const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const petRoutes = require('./routes/pets');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');

//express app
const app = express();

app.use(cors());

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//routes
app.use('/api/routes', petRoutes);
app.use('/api/user', userRoutes);
app.use('/api/contact', contactRoutes);

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port ' + process.env.PORT)
        })
    })
    .catch((error) => {
        console.group(error)
    })


