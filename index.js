const express = require("express");
const mongoose = require("mongoose");
const bodyParser = requrie("body-parser");

require("./models/User");
require("./models/Game");
require("./models/Character");

require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

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

const PORT = process.env.port || 5000;

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

app.listen(PORT);
