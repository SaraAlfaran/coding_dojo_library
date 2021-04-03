const { Book } = require('../models/book.model')


module.exports.createBook = (request, response) => {
    
    const { name, author, description, imgUrl ,catagory } = request.body;
    Book.create({
            name,
            author,
            description,
            imgUrl,
            catagory,
            
        })
        .then(book => response.json(book))
        .catch((err) => response.status(400).json(err));
}

module.exports.getAllBook = (request, response) => {
    Book.find({})
        .then((book) => response.json(book))
        .catch((err) => response.status(400).json(err));
};

module.exports.getBook = (request, response) => {
    Book.findOne({ _id: request.params.idd })
        .then((book) => response.json(book))
        .catch((err) => response.status(400).json(err));
}

module.exports.updatedBook = (request, response) => {
    Book.findOneAndUpdate({ _id: request.params.book_id }, request.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedBook) => response.json(updatedBook))
        .catch((err) => response.status(400).json(err));
}

module.exports.deleteBook = (request, response) => {
    Book.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.status(400).json(err));
}