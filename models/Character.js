const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema(
  {
    name: { type: String, index: true },
    type: String,
    moves: Schema.Types.Mixed,
    stats: Schema.Types.Mixed,
    beginnerNotes: String,
    tier: String,
    banned: Boolean,
    isDLC: Boolean,
    gameId: String,
  },
  { collation: { locale: "en_US", strength: 2 } }
);

// characterSchema.createIndex({ name: "text" }, (err, res) => {
//   console.log(res);
// });

characterSchema.index(
  { name: 1 },
  { collation: { locale: "en_US", strength: 2 } },
  (err, res) => {
    console.log(res);
  }
);

mongoose.model("characters", characterSchema);
