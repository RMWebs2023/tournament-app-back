const { Schema, model } = require("mongoose");

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  document: {
    type: Number,
    required: true,
  },
  birth: {
    type: Date,
  },
  province: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  category: {
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
