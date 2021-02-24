// const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const { reset } = require("nodemon");
// const requireCredits = require("../middlewares/requireCredits");
const Game = mongoose.model("games");
const Character = mongoose.model("characters");
const { normalizeSlug } = require("../services/normalize.js");

module.exports = (app) => {
  app.get("/api/games/:game_name", async (req, res) => {
    try {
      // const normalizedName = req.params.game_name
      //   .split("_")
      //   .map((nameEle) => nameEle[0].toUpperCase() + nameEle.substring(1))
      //   .join(" ");
      const game = await Game.find({
        title: normalizeSlug(req.params.game_name),
      });
      res.send(game[0]);
    } catch (err) {
      console.log("ERR::::", err);
    }
  });

  app.get("/api/games/:game_name/characters", async (req, res) => {
    try {
      // const normalizedName = req.params.game_name
      //   .split("_")
      //   .map((nameEle) => nameEle[0].toUpperCase() + nameEle.substring(1))
      //   .join(" ");
      const game = await Game.find({
        title: normalizeSlug(req.params.game_name),
      });
      const characters = await Character.find({ gameId: game[0]._id });
      res.send({ char: characters });
    } catch (err) {
      console.log("ERR::::", err);
    }
  });
};
