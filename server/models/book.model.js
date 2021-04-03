const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Book name can't be empty"],
        minlength: [3, 'Book name should be 3 characters or longer'],
    },
    author: {
        type: String,
        required: [true, "Author name can't be empty"],
        minlength: [2, 'Author name should be 2 characters or longer'],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, 'Description should be 5 characters or longer'],
    },
    imgUrl: {
        type: String,
        required: [true, "An Image Url is required"],
        minlength: [30, "Please use an image url"]
    },
    catagory:{
        type: String, 
    }
}, { timestamps: true })

module.exports.Book = mongoose.model('Book', BookSchema);