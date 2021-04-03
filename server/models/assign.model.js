const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const AssignSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name can't be empty"],    
    },
    name: {
        type: String,
        required: [true, "the book name can't be empty !"],
        unique: [true, "the book is reserved!"],

    },
    startDate:{
        type:Date,
        required: [true, "Start Date can't be empty"],
    },
    endDate:{
        type:Date,
        required: [true, "End Date can't be empty"],
    },
},{ timestamps: true });

AssignSchema.plugin(uniqueValidator);

module.exports.Assign = mongoose.model('Assign', AssignSchema);