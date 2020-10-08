const express = require("express");
const router = express.Router();

const { getAllGames, getGame } = require("../controllers/gamesController");

router.route("/jogos").get(getAllGames);

router.route("/jogos/:id").get(getGame);

module.exports = router;
