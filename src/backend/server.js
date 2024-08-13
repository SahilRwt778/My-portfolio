const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolio_Comments', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Create a schema and model for the contact form
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Contact = mongoose.model('Contact', contactSchema);

// POST route to handle form submissions with validation
app.post(
    '/api/contact',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Please enter a valid email address'),
        body('message').notEmpty().withMessage('Message is required')
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            message,
        });

        newContact.save()
            .then(contact => res.json(contact))
            .catch(err => res.status(400).json({ error: err.message }));
    }
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
