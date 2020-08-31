const express = require("express");
// to use mongoose schema in this route
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();
// the post request handler
router.post("/signup", async (req, res) => {
  // take out of the body of incoming request
  // req.body has an email and password on it, just need to take this to create new user
  // destructure
  const { email, password } = req.body;
  // create new user , pass in propertys we want user to have
  const user = new User({ email, password });
  // now save the user we just created
  // .save is an async operation so need to user async await syntax
  await user.save();
  // this will apear in postman
  res.send("You made a post request ");
});

module.exports = router;
