// require mongoose
const mongoose = require("mongoose");

// use mongoose object to create the idea of user model
// the case maters
const userSchema = new mongoose.Schema({
  // inside this object tell mongoose about the properties
  // that evey user in the collection is going to have
  email: {
    // the type of data that email will referance
    type: String,
    // no duplicate emails
    unique: true,
    // if not email its invalad so dont save
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//associate the schema with mongoose
// mongoose will expect this to be executed one time
// just in index js or there will be errors
// only defined once not over and over again
mongoose.model("User", userSchema);
