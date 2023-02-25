//import dependencies

const express = require("express");
const router = express.Router();
const {
  getPhotos,
  getPhotoById,
  getPhotosByUsername,
} = require("../controllers/photoController");

router.route("/").get(getPhotos);
router.route("/:id").get(getPhotoById);
router.route("/user/:username").get(getPhotosByUsername);

module.exports = router;
