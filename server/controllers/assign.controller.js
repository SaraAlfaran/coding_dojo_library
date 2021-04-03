const { Assign } = require('../models/assign.model')


module.exports.createAssign = (request, response) => {
    
    const { firstName, name, startDate, endDate } = request.body;
    Assign.create({
            firstName,
            name,
            startDate,
            endDate,
        })
        .then(assign => response.json(assign))
        .catch((err) => response.status(400).json(err));
}

module.exports.getAllAssign = (request, response) => {
    Assign.find({}).sort({ endDate: 1 })
        .then((assign) => response.json(assign))
        .catch((err) => response.status(400).json(err));
};

module.exports.getAssign = (request, response) => {
    Assign.findOne({ _id: request.params.idd })
        .then((assign) => response.json(assign))
        .catch((err) => response.status(400).json(err));
}

module.exports.updatedAssign = (request, response) => {
    Assign.findOneAndUpdate({ _id: request.params.assign_id }, request.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedAssign) => response.json(updatedAssign))
        .catch((err) => response.status(400).json(err));
}

module.exports.deleteAssign = (request, response) => {
    Assign.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.status(400).json(err));
}