const { Schema, model } = require("mongoose");

const PlayerSchema = new Schema({
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

module.exports = model("player", PlayerSchema);
