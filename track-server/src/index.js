// require the model first
// only will be used in index.js so no const needed
require("./models/User");

const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(authRoutes);
const mongoUri = "add";
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
app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
// Note that as of express 4.16 body-parser is no longer needed express has its own
