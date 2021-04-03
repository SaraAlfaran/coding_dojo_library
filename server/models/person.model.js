const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name can't be empty"],
        minlength: [3, 'first name should be 3 characters or longer'],
    },
    lastName: {
        type: String,
        required: [true, "last name can't be empty"],
        minlength: [2, 'last name should be 2 characters or longer'],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
          validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
          message: "Please enter a valid email",
        },
    },
    phoneNumber:{
        type: Number,
        required:[true, "phone number can't be empty"],
        minlength: [10, 'phone number should be 10 characters'],
    }
}, { timestamps: true })

module.exports.Person = mongoose.model('Person', PersonSchema);