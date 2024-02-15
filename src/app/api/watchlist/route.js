// backend/routes/watchlistRoutes.js

const express = require("express");
const router = express.Router();
const watchlistController = require("../../../db/watchlistActions");

router.post("/:userId", watchlistController.addToWatchlist);
router.get("/:userId", watchlistController.getWatchlist);
router.delete("/:userId/:animeId", watchlistController.removeFromWatchlist);

module.exports = router;
