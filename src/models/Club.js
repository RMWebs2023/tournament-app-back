const { Schema, model } = require("mongoose");

const ClubSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  courts: {
    type: Number,
  },
  tournament: {
    type: String,
  },
  results: {
    type: String,
  },
});

module.exports = model("club", ClubSchema);
