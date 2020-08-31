const express = require("express");
// to use mongoose schema in this route
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });

    await user.save();

    res.send("You made a post request ");
  } catch (err) {
    // catch any error thown in the post request
    // http status code can be sent 422 is user sent invalid data
    // "message" is produced by mongoose automatically
    // put in return to make sure no more code is executed
    return res.status(422).send(err.message);
  }
});

module.exports = router;
