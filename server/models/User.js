const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please enter a username"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characthers"],
  },
});

// Fire function after doc saved to db
userSchema.post("save", function (doc, next) {
  console.log("User password updated");
  next();
});

// Static method to login user
userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({username});

  if (user) {
    const auth = await bcrypt.compare(password, user.password);

    if (auth) {
      return user;
    } else {
      throw Error("Incorrect password");
    }
  } else {
    throw Error("Incorrect username");
  }
};

const User = mongoose.model("user", userSchema);

module.exports = User;
