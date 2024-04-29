const express = require("express");
const router = express.Router();

const admissionsController = require("../controllers/admissionsController");

//Create
router.post("/create", admissionsController.createAdmission);

//Read
router.get("/", admissionsController.getAdmissions);

//Update
router.put("/update/:id", admissionsController.updateAdmission);

//Delete
router.delete("/delete/:id", admissionsController.deleteAdmission);

module.exports = router;