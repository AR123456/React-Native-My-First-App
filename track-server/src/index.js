// creating an express server with one port to test
const express = require("express");
// app here references the entier application
const app = express();
// associating routes right after the app declairation
// pass in function as second argument
// anytime someone runs a get type http request to the root route
// of our app run this function
// the function gets called automaticaly with req - a request object
// the request object represents the incoming HTTP request
// the function also gets called automatically with a res object which
// represents the outgoing response
app.get("/", (req, res) => {
  // sending plain text to whoever made the request
  res.send("Hello World ");
});

// now app needs to listen to a specific port on local machine
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
