// const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
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
      res.send(game);
    } catch (err) {
      console.log("ERR::::", err);
    }
  });
};
