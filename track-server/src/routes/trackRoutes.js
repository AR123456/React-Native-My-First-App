const express = require("express");
const mongoose = require("mongoose");
//
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

//post request to /tracks to create a track
// this post request is coming from the front end
router.post("/tracks", async (req, res) => {
  const { name, locations } = req.body;
  if (!name || !locations) {
    return res
      .status(411)
      .send({ error: "You must provide a name and locations" });
  }
  try {
    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

// export the router
module.exports = router;
// then hook it up in index.js
