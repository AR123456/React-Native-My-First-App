// take an incoming request and perform some preproccessing on it
// make sure user has the token and if they do allow them to have access
// to some routes in the applicaiton, if they do not reject and send error message
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");
// define and export a function
module.exports = (req, res, next) => {
  //in here if the user has the valid token we will call next
  // next goes on to the chain of middle wares, if there are no more
  // middlewares will run the request handler in index.js
  //1) authenticate the user- establish mechanism of how user is going
  // to share the JWT .  It neeeds to be in a header called authorisation.
  // how the user will share the token with the API this is in a GET request to local 3000
  // pull the authorization header off of req.headers -
  // any incoming requests to server - any headers attached to request placed inside headers property so we are pulling off the authorization header
  // express automaticaly down cases any header names
  const { authorization } = req.headers;
  // authorization === "Bearer akjadkfdkj"
  if (!authorization) {
    return res.status(401).send({ error: "You have no auth header" });
  }
  // there is an authorization header  so extract the token replace word Bearer with an empty string
  const token = authorization.replace("Bearer ", "");
  // validate the token with jwt.verify
  // first arg is the token , second is the secret key, the third arg is callback function to be invoked ater the JWT has done some validation on the token.  this is async await syntax - if no problem we will get the payload
  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    // the payload is whatever info we suck in with our JWT, in this case the user id from the database {userId: user._id}
    if (err) {
      return res.status(401).send({ error: "Error with the jwt" });
    }
    // we verified the token , now extract the ID from the payload
    const { userId } = payload;
    const user = await User.findById(userId);
    // assign the user model to the req object
    req.user = user;
    // call next cause we are done with this middle ware go on to next
    next();
  });
};
