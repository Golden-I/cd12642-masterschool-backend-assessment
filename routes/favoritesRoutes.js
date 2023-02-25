const express = require("express");
const router = express.Router();
const {
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
} = require("../controllers/favoritesController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getFavorites).post(protect, addToFavorites);

router.route("/:id").delete(protect, deleteFromFavorites);
module.exports = router;
