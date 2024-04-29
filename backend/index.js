require("dotenv").config();
const express = require("express");
const app = express();
const portNumber = 4000;

const mongoose = require("mongoose");

// Middleware

app.use(express.json());

// DB Connection
console.log(process.env.MONGO_URI);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

let db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => console.log("connected to MongoDB"));

// Routes
//Doctors
const doctorsRoute = require("./routes/doctorsRoute");
app.use("/doctors", doctorsRoute);

//Admissions
const admissionsRoute = require("./routes/admissionsRoute"); 
app.use("/admissions", admissionsRoute);

app.listen(portNumber, () => {

  console.log(`server is running on http://localhost:${portNumber}`);

});
