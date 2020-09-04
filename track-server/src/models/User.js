// require mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// using a pre save hook
// In Brads tutorial he handles hash and salt differenlty, he does in route
// this will happen before we save a user into our db
// dont use an arrow function here the user is "this"
// this function takes in next so that if it is not a modified user do the next thing
userSchema.pre("save", function (next) {
  // rename this to user
  const user = this;
  if (!user.isModified("password")) {
    //if the user has not modified their password in anyway go on
    return next();
  }
  // we land here if this is a new or modified password
  // tell bcrupt how many salt rounds to use callback err, salt
  bcrypt.genSalt(10, (err, salt) => {
    // check for errors
    if (err) {
      return next(err);
    }
    // if no problem with the salt
    // hash user.password (aka this.password), pass in the salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      // if there is a problem with hashing
      if (err) {
        return next(err);
      }
      // update the users password with the hash
      user.password = hash;
      // call next to go on with saving the user
      next();
    });
  });
});
/// Now implement what to do to at log in.  Run the provided password
// through the hashing algorythem and compare the two results
// this could go in the reuqest handler but Steve is putting here
// this function can be use whenever a user logs in
////// code to automate the password checking process ///
//atach method to userr model
// dont use an arrow here, we are working with "this"
// pass in the password from user Steve is calling it candidatePassword
userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  // returning a promise we are assembling ourselvs- has 2 args resolve and reject
  // we need this promise so we can make use of async await syntax
  // bcypt relies on callbacks entierly
  return new Promise((resolve, reject) => {
    //user bcrypt to automate the comparison process
    // candidatePassword vs user.password from the db
    // passin a callback with err if problem and boolian true /faulse if there is a match.
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(false);
      }
      // if isMatch is true we are good to go
      resolve(true);
    });
  });
};

mongoose.model("User", userSchema);
