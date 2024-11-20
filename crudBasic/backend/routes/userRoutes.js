const express = require("express");
const router = express.Router();
const User = require("../models/userModels");

// Create User
router.post("/", async (req, res) => {
    console.log("Request Body:", req.body); // Log the received data
    const { name, course,email } = req.body;
  
    if (!name || !course || !email) {
      console.error("Missing fields in request body.");
      return res.status(400).json({ error: "All fields are required" });
    }
  
    try {
      const user = new User({ name,course,email});
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      console.error("Error saving to database:", err.message); // Log database errors
      res.status(500).json({ error: err.message });
    }
  });
  
  

// Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update User
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name,course,email} = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, course,email},
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
