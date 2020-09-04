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
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

// post request handler
// when someone calls the sign in route run this function
router.post("/signin", async (req, res) => {
  // the email and password are on rec.body
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "Must provide an email and password" });
  }
  // get user from db with the supplied email - pass email object into function.  Pass what we find into the user object
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ error: "Invalid password or email" });
  }
  try {
    // this needs to be wrapped in a try catch because if something goes wrong or passwords do not match up send message
    // have a user so do compare using the method from the user model, pass in the password the user gave us
    await user.comparePassword(password);
    // we have a password match so generage a jwt
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    // send back the token
    res.send({ token });
  } catch (err) {
    return res.status(404).send({ error: "Invalid password or email" });
  }
});
module.exports = router;
