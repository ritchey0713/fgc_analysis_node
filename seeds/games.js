require("../models/Character");
const mongoose = require("mongoose");
const Character = mongoose.model("characters");

module.exports = [
  {
    title: "Street Fighter 5",
    developer: "Capcom",
    characters: [],
    leagues: ["Capcom League"],
    activePlayers: 500,
    communityActive: true,
    discords: ["discord.gg"],
  },
  {
    title: "Super Smash Bros Ultimate",
    developer: "Nintendo",
    characters: [],
    leagues: ["Smash All-stars"],
    activePlayers: 500,
    communityActive: true,
    discords: ["discord.gg"],
  },
  {
    title: "Guilty Gear Strive *Pending Release*",
    developer: "ArcSystem Works",
    characters: [],
    leagues: ["Matchstick Melee"],
    activePlayers: 500,
    communityActive: true,
    discords: ["discord.gg"],
  },
  {
    title: "Gran Blue Fantasy:Versus",
    developer: "Nintendo",
    characters: [],
    leagues: ["Matchstick Melee"],
    activePlayers: 500,
    communityActive: true,
    discords: ["discord.gg"],
  },
];
