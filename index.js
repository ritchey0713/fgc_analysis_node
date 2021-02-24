const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

const { createGames } = require("./services/assignObjs");
require("./models/User");
require("./models/Game");
require("./models/Character");

require("./services/passport");

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/gameRoutes")(app);

const PORT = process.env.PORT || 6600;

const dbConnection = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.log("Connection failed..", err.message);
    process.exit(1);
  }
};

dbConnection();

app.get("/", (req, res) => {
  res.send("dfg");
});

// build games
//createGames();

// build chars

app.listen(PORT);
