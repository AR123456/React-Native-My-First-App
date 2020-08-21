const express = require("express");
// the router is an object that allows us to
//associate some number of route handlers to it
// we can then take that router and associate it
// "app" in index.js
const router = express.Router();

//recive post request
router.post("/signup", (req, res) => {
  // anytime that someone makes a post request to /signup
  // we want to run the function in here
  res.send("You made a post request ");
});

module.exports = router;

// note you cannot very easily test a post reqeust in the browser because when you hit the
// enter key it makes a get request
// to test this post reqeust will use postman
