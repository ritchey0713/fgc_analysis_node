var fs = require("fs");
const path = require("path");
const sfvPath = path.join(__dirname, "../frameData/sfv.json");

let jsonData = JSON.parse(fs.readFileSync(sfvPath, "utf-8"));

const names = Object.keys(jsonData);

const createCharacters = () => {
  return names.map((name) => {
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
      game_id: "60367a2731b01ed1ee4999ac",
    };
  });
};

module.exports = createCharacters();
