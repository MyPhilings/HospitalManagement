const express = require("express");
const router = express.Router();

const doctorsController = require("../controllers/doctorsController");

//Create
router.post("/create", doctorsController.createDoctor);

//Read
router.get("/", doctorsController.getDoctors);

//Update
router.put("/update/:id", doctorsController.updateDoctor);

//Delete
router.delete("/delete/:id", doctorsController.deleteDoctor);

module.exports = router;