const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorsDocument = new Schema({
    lastName: {
        type: String,
        required: [true, "last name is needed"]
    },

    firstName: {
        type: String,
        required: [true, "first name is needed"]
    },

    specialty: {
        type: String,
        required: [true, "specialty is needed"]
    },
    
    active: {
        type: Boolean,
        required: [true, "status is needed"]
    }
});
    
const Doctor = mongoose.model("Doctor", doctorsDocument);
module.exports = Doctor;