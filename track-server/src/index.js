const express = require("express");
const mongoose = require("mongoose");
// bodyParser to handle JSON objects
//it will automacially parse infromation associated with
// the body property of the incoming requests.
// const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();
// this needs to go before the authRoutes so that the info gets parsed
// json() is being called as a function
//app.use(bodyParser.json());
app.use(express.json());
app.use(authRoutes);
const mongoUri = "#";
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
