// require the model first
// only will be used in index.js so no const needed
require("./models/User");

const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
// require the middleware - so we can use it in any of the request handlers
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(express.json());
app.use(authRoutes);
const mongoUri =
  "##";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});
// only allow access to this route if user has a JWT
// create a middleware to handle this repetative action
// to use it put in right before the second request handler
// app.get("/", (req, res) => {
app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
// Note that as of express 4.16 body-parser is no longer needed express has its own
