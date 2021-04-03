const { Person } = require('../models/person.model')


module.exports.createPerson = (request, response) => {
    
    const { firstName, lastName, email, phoneNumber } = request.body;
    Person.create({
            firstName,
            lastName,
            email,
            phoneNumber
        })
        .then(person => response.json(person))
        .catch((err) => response.status(400).json(err));
}

module.exports.getAllPerson = (request, response) => {
    Person.find({})
        .then((person) => response.json(person))
        .catch((err) => response.status(400).json(err));
};

module.exports.getPerson = (request, response) => {
    Person.findOne({ _id: request.params.idd })
        .then((person) => response.json(person))
        .catch((err) => response.status(400).json(err));
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({ _id: request.params.person_id }, request.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedPerson) => response.json(updatedPerson))
        .catch((err) => response.status(400).json(err));
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.status(400).json(err));
}