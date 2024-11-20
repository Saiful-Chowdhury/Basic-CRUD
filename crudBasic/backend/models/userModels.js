const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  enrollmentDate: {type: Date, default: Date.now,},
});

module.exports = mongoose.model("User", userSchema);//User is the name of the database
