const express = require("express");
// to use mongoose schema in this route
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("You made a post request ");
});

module.exports = router;
