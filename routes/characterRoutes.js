const mongoose = require("mongoose");
const Game = mongoose.model("games");
const Character = mongoose.model("characters");
const { normalizeSlug } = require("../services/normalize.js");

module.exports = (app) => {
  app.get("/api/characters", async (req, res) => {
    try {
      const characters = await Character.find();
      res.send(characters);
    } catch (err) {
      console.log("ERR::::", err);
    }
  });

  app.get("/api/characters/:char_name", async (req, res) => {
    const charName = req.params.char_name.replace("_", "");
    // const regEx = new RegExp(`.*${charName}.*`);
    // const texter = await Character.find({ $text: { $search: regEx } });
    // console.log(texter);
    try {
      const characters = await Character.find({ name: charName });
      // const characters = await Character.find({ name: regEx }).collation({
      //   locale: "en_US",
      //   strength: 2,
      // });
      res.send(characters);
    } catch (err) {
      console.log("ERR::::", err);
    }
  });
};
