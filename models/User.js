const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    default: 0,
  },
  snum: {
    type: Number,
    minlength: 5,
    unique: true,
  },
  email: {
    type: String,
    maxlength: 50,
    trim: true,
  },
  phonenumber: {
    type: String,
    maxlength: 20,
  },
  password: {
    type: String,
    minlength: 5,
  },
  dept: {
    type: String,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
