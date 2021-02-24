// const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const { reset } = require("nodemon");
// const requireCredits = require("../middlewares/requireCredits");
const Game = mongoose.model("games");
const Character = mongoose.model("characters");

module.exports = (app) => {
  app.get("/api/games/:game_name", async (req, res) => {
    try {
      const normalizedName = req.params.game_name
        .split("_")
        .map((nameEle) => nameEle[0].toUpperCase() + nameEle.substring(1))
        .join(" ");
      const game = await Game.find({ title: normalizedName });
      res.send(game[0]);
    } catch (err) {
      console.log("ERR::::", err);
    }
  });

  app.get("/api/games/:game_name/characters", async (req, res) => {
    try {
      const normalizedName = req.params.game_name
        .split("_")
        .map((nameEle) => nameEle[0].toUpperCase() + nameEle.substring(1))
        .join(" ");
      const game = await Game.find({ title: normalizedName });
      const characters = await Character.find({ gameId: game[0]._id });
      res.send({ char: characters[0] });
    } catch (err) {
      console.log("ERR::::", err);
    }
  });
};
