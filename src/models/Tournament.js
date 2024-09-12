const { Schema, model } = require("mongoose");

const TournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  players: {
    type: String,
  },
  capacityPlayers: {
    type: Number,
    required: true,
  },
  dateInit: {
    type: Date,
    required: true,
  },
  dateFinish: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = model("tournament", TournamentSchema);
