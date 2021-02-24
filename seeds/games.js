require("../models/Character");
const mongoose = require("mongoose");
const Character = mongoose.model("characters");

module.exports = [
  {
    title: "Street Fighter 5",
    developer: "Capcom",
    characters: [
      "603683fba3c54ce724ef0ef7",
      "603683fba3c54ce724ef0ef8",
      "603683fba3c54ce724ef0ef9",
      "603683fba3c54ce724ef0efa",
      "603683fba3c54ce724ef0efb",
      "603683fba3c54ce724ef0efc",
      "603683fba3c54ce724ef0efd",
      "603683fba3c54ce724ef0efe",
      "603683fba3c54ce724ef0eff",
      "603683fba3c54ce724ef0f00",
      "603683fba3c54ce724ef0f01",
      "603683fba3c54ce724ef0f02",
      "603683fba3c54ce724ef0f03",
      "603683fba3c54ce724ef0f04",
      "603683fba3c54ce724ef0f05",
      "603683fba3c54ce724ef0f06",
      "603683fba3c54ce724ef0f07",
      "603683fba3c54ce724ef0f08",
      "603683fba3c54ce724ef0f09",
      "603683fba3c54ce724ef0f0a",
      "603683fba3c54ce724ef0f0b",
      "603683fba3c54ce724ef0f0c",
      "603683fba3c54ce724ef0f0d",
      "603683fba3c54ce724ef0f0e",
      "603683fba3c54ce724ef0f0f",
      "603683fba3c54ce724ef0f10",
      "603683fba3c54ce724ef0f11",
      "603683fba3c54ce724ef0f12",
      "603683fba3c54ce724ef0f13",
      "603683fba3c54ce724ef0f14",
      "603683fba3c54ce724ef0f15",
      "603683fba3c54ce724ef0f16",
      "603683fba3c54ce724ef0f17",
      "603683fba3c54ce724ef0f18",
      "603683fba3c54ce724ef0f19",
      "603683fba3c54ce724ef0f1a",
      "603683fba3c54ce724ef0f1b",
      "603683fba3c54ce724ef0f1c",
      "603683fba3c54ce724ef0f1d",
      "603683fba3c54ce724ef0f1e",
      "603683fba3c54ce724ef0f1f",
    ],
    leagues: ["Capcom League"],
    activePlayers: 500,
    communityActive: true,
    discords: [],
  },
  {
    title: "Super Smash Bros Ultimate",
    developer: "Nintendo",
    characters: [],
    leagues: ["Smash All-stars"],
    activePlayers: 500,
    communityActive: true,
    discords: [],
  },
  {
    title: "Guilty Gear Strive *Pending Release*",
    developer: "ArcSystem Works",
    characters: [],
    leagues: ["Matchstick Melee"],
    activePlayers: 500,
    communityActive: true,
    discords: [],
  },
  {
    title: "Gran Blue Fantasy:Versus",
    developer: "Nintendo",
    characters: [],
    leagues: ["Matchstick Melee"],
    activePlayers: 500,
    communityActive: true,
    discords: [],
  },
];
