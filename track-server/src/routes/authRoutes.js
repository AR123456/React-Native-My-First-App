const express = require("express");

const router = express.Router();

//recive post request
//by default express dosent know how to handle JSON data
// need bodyParser for that
// bodyParser is going to parse out of incoming request and place on the body property
// of the request req
router.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("You made a post request ");
});

module.exports = router;
