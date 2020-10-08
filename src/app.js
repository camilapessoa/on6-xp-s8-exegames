const express = require("express");
const app = express();
const gameRouter = require("./routes/gamesRoutes");

app.use("/", gameRouter);

module.exports = app;