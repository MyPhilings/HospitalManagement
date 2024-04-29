const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const admissionsDocument = new Schema({
    admissionDate: {
        type: String,
        required: [true, "admission date is needed"]
    },

    dischargeDate: {
        type: String,
        required: [true, "discharge date is needed"]
    },

    diagnosis: {
        type: String,
        required: [true, "diagnosis is needed"]
    }
});
    
const Admissions = mongoose.model("Admissions", admissionsDocument);
module.exports = Admissions;