const express = require("express");

const mongoose = require("mongoose");
// require the package
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });

    await user.save();
    // instead of sending back a message will create and  send the JWT
    // res.send("You made a post request ");
    //////jwt//////
    // the first argument to this function is the info we want to put inside the token
    // we want to encode the user id, the second arg is the secert key - secure this
    const token = jwt.sign({ userId: user._id }, "change me");
    // res.send the token object (can look at this in postman or request.rest)
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
