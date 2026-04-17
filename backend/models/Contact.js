import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a contact number'],
    },
    service: {
        type: String,
        required: [true, 'Please select a service'],
    },
    budget: {
        type: String,
        required: [true, 'Please provide a budget range'],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
    },
}, {
    timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
