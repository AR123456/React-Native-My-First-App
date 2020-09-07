const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");
//Just define the tack model once- add to index.js at top like User model
const Track = mongoose.model("Track");
// create router object
const router = express.Router();
// user must be signed in, making use ot the requireAuth middleware
router.use(requireAuth);

// allow user to fetch all the tracks that they have created
router.get("/tracks", async (req, res) => {
  // who is the user? > inspect the user object
  //  req.user._id;
  // query db to find their tracks
  // finding all the track where the userId is = req.user._id
  const tracks = await Track.find({ userId: req.user._id });
  // getting back an array
  res.send(tracks);
});

// export the router
module.exports = router;
// then hook it up in index.js
