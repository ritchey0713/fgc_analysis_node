const mongoose = require("mongoose");
const { Schema } = mongoose;
const gameSchema = require("./Game");

const userSchema = new Schema({
  googleId: String,
  games: [gameSchema],
  age: Number,
  ranking: Number,
  years_played: Number,
  competing: Boolean,
});

mongoose.model("users", userSchema);
