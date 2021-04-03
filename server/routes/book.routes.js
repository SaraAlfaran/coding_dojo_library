const PersonController = require('../controllers/person.controller');
const Users = require('../controllers/user.controller');
const BookController = require('../controllers/book.controller');
const AssignController = require('../controllers/assign.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.get("/api/logout", Users.logout);
    app.post('/api/person/new', PersonController.createPerson);
    app.get('/api/person', PersonController.getAllPerson);
    app.get('/api/person/:idd', PersonController.getPerson);
    app.put("/api/person/:Person_id/edit", PersonController.updatePerson)
    app.delete("/api/person/:id", PersonController.deletePerson)
    app.post('/api/book/new', BookController.createBook);
    app.get('/api/book', BookController.getAllBook);
    app.get('/api/book/:idd', BookController.getBook);
    app.delete("/api/book/:id", BookController.deleteBook)
    app.post('/api/assign/new', AssignController.createAssign);
    app.get('/api/assign', AssignController.getAllAssign);
    app.get('/api/assign/:idd', AssignController.getAssign);
    app.delete("/api/assign/:id", AssignController.deleteAssign)
}