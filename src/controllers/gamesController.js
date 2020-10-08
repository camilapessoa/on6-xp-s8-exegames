const games = require("../models/games.json");

exports.getAllGames = (req, res, next) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: games.length,
    data: games,
  });
};

exports.getGame = (req, res, next) => {
  const id = req.params.id;
  const game = games.find((el) => el.id == id);

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    data: game,
  });
};
