const mongoose = require("mongoose");
const { Schema } = mongoose;
const characterSchema = require("./Character");

const gameSchema = new Schema({
  title: { type: String, required: true },
  developer: { type: String, required: true },
  characters: [characterSchema],
  leagues: {
    type: [String],
    validate: {
      validator: (v) => {
        !Array.isArray(v) || v.length < 0;
      },
      message: "MUST have at least one league",
    },
    required: [true, "league must exist"],
  },
  activePlayers: { type: Number, min: [100, "not enough players for league"] },
  communityActive: { type: Boolean, required: true },
  discords: {
    type: [String],
    validate: (v) => Array.isArray(v) && v.length > 0,
  },
});

mongoose.model("games", gameSchema);
