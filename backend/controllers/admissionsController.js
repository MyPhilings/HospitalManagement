const Admissions = require("../models/admissionsSchema");

const mongoose = require("mongoose");

//Create
module.exports.createAdmission = (req, res) => {
    const { admissionDate, dischargeDate, diagnosis } = req.body;

    const newAdmission = new Admissions({
        admissionDate,
        dischargeDate,
        diagnosis,
    });

    try {
        const savedAdmission = newAdmission.save();
        res.status(201).json({ "new admission": newAdmission });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

//Read
module.exports.getAdmissions = (req, res) => {
    Admissions.find()
        .then((admissions) => res.send(admissions))
        .catch((error) => res.send(error));
};

//Update
module.exports.updateAdmission = (req, res) => {
    const { admissionDate, dischargeDate, diagnosis } = req.body;

    const admissionID = req.params.id;

    const updatedFields = { admissionDate, dischargeDate, diagnosis };

    Admissions.findByIdAndUpdate(admissionID, updatedFields, { new: true })
        .then((updatedAdmission) => {
            if (!updatedAdmission) {
                return res.status(404).json({ error: "Admission not found" });
            }

            res.status(200).json(updatedAdmission);
        })

        .catch((error) => {
          res.status(500).json({ error: error.message || "Internal server error" });
        });
};

//Delete
module.exports.deleteAdmission = (req, res) => {
    const admissionID = req.params.id;

    Admissions.findByIdAndDelete(admissionID)
        .then((admission) => res.send(admission))
        .catch((error) => res.send(error));
};