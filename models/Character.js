const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String,
  type: String,
  moves: Schema.Types.Mixed,
  stats: Schema.Types.Mixed,
  beginnerNotes: String,
  tier: String,
  banned: Boolean,
  isDLC: Boolean,
});

mongoose.model("characters", characterSchema);
