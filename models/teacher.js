const mongoose = require("mongoose");
require('mongoose-type-email');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    teacher_id: {
        type: String
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        allowBlank: false
    },
    password: {
        type: String,
        required: true
    },  
    role: {
        type: String,
        required:true
    },
    group_id: {
        type: Array,
        required: true
    },
    hunt_id: {
        type: Array,
        required: true
    }
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;