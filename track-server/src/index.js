const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
// associates all the request handlers we added to the router with
// our main express application
app.use(authRoutes);
const mongoUri =
  "#";
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
