const { Schema, model } = require("mongoose");

const ClubSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  tournament: {
    type: String,
  },
  results: {
    type: String,
  },
});

module.exports = model("club", ClubSchema);
