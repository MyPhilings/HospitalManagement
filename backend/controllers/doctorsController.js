const Doctor = require("../models/doctorsSchema");

const mongoose = require("mongoose");

//Create
module.exports.createDoctor = (req, res) => {
    const { firstName, lastName, specialty, active } = req.body;

    const newDoctor = new Doctor({
        firstName,
        lastName,
        specialty,
        active,
    });

    try {
        const savedDoctor = newDoctor.save();
        res.status(201).json({ "new doctor": newDoctor });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

//Read
module.exports.getDoctors = (req, res) => {
    Doctor.find()
        .then((doctors) => res.send(doctors))
        .catch((error) => res.send(error));
};

//Update
module.exports.updateDoctor = (req, res) => {
    const { firstName, lastName, specialty, active } = req.body;

    const doctorID = req.params.id;

    const updatedFields = { firstName, lastName, specialty, active };

    Doctor.findByIdAndUpdate(doctorID, updatedFields, { new: true })
        .then((updatedDoctor) => {
            if (!updatedDoctor) {
                return res.status(404).json({ error: "Doctor not found" });
            }

            res.status(200).json(updatedDoctor);
        })

        .catch((error) => {
          res.status(500).json({ error: error.message || "Internal server error" });
        });
}

//Delete
module.exports.deleteDoctor = (req, res) => {
    const doctorID = req.params.id;

    Doctor.findByIdAndDelete(doctorID)
        .then((doctor) => res.send(doctor))
        .catch((error) => res.send(error));
};