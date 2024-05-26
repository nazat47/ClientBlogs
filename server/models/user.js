const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
    required: [true, "Please provide your username"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
  },
});

module.exports = mongoose.model("User", userSchema);
