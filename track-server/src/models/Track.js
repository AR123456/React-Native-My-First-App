const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  // num of mili sec since 1970
  timestamp: Number,
  coords: {
    latitued: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new mongoose.Schema({
  // ObjectIDd is a value stored inside mongdb
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // ref used by mongoose to tell mongo that it is
    // an instance of a user
    ref: "User",
  },
  name: {
    type: String,
    //giving a default value of null
    default: "",
  },
  // locations are an array of points
  // pointing to a seprate schema object that is defined
  // above
  locations: [pointSchema],
});

// the point object is imbedded in trackSchema so not called out here
mongoose.model("Track", trackSchema);
