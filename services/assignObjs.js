require("../models/Character");
require("../models/Game");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Character = mongoose.model("characters");
const Game = mongoose.model("games");

const sfvPath = path.join(__dirname, "../frameData/sfv.json");

const gamesJson = require("../seeds/games");

const createGames = async () => {
  await gamesJson.forEach((game) => {
    const gameDoc = new Game(game);
    gameDoc.save();
  });
};

const getGameId = async (gameName) => {
  try {
    const games = await Game.find({ title: gameName });

    const game = await games[0]._id;

    // console.log(game._id);
    return game;
  } catch (err) {
    console.log(err);
  }
};

// create sfv chars
// let x = getGameId("Street Fighter 5").then((res) => createCharacters(res));

let jsonData = JSON.parse(fs.readFileSync(sfvPath, "utf-8"));

const names = Object.keys(jsonData);

const createCharacters = async (gameId) => {
  let charArr = names.map((name) => {
    return {
      name,
      moves: Object.keys(jsonData[name]["moves"]).map((moveType) => ({
        [moveType]: Object.keys(jsonData[name]["moves"][moveType]).map(
          (moveName) => {
            let fixedName = moveName.replace(/[.]/g, " ");
            return {
              [fixedName]: jsonData[name]["moves"][moveType][moveName],
            };
          }
        ),
      })),
      stats: jsonData[name]["stats"],
      gameId,
    };
  });
  await charArr.forEach((char) => {
    const charDoc = new Character(char).save();
  });
};

const assignCharsToGame = async () => {
  const [game] = await Game.find({ title: "Street Fighter 5" });
  const chars = await Character.find({ gameId: game._id });
  game.characters = chars.map((char) => char._id);
  game.save();
};

// assignCharsToGame();
