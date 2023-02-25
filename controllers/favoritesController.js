const asyncHandler = require("express-async-handler");
const favoritePhoto = require("../models/favoritePhotoModel");

const addToFavorites = asyncHandler(async (req, res) => {
  const { user, photoUrl, description, username, explanation } = req.body;

  if (!user || !photoUrl || !description || !username || !explanation) {
    res.status(400);
    throw new Error("Please make sure that all fields are completed");
  }

  const newPhoto = await favoritePhoto.create({
    user,
    photoUrl,
    description,
    username,
    explanation,
  });

  res.status(200).json({ Message: "Added to Favorites", newPhoto });
});

const getFavorites = asyncHandler(async (req, res) => {
  const favorites = await FavoritePhoto.find({ user: req.user._id }).select(
    "-__v"
  );

  res.status(200).json({ favorites });
});

const deleteFromFavorites = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const favorite = await FavoritePhoto.findById(id);

  if (!favorite) {
    res.status(404);
    throw new Error("Favorite not found");
  }

  if (favorite.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await favorite.remove();

  res.status(200).json({ message: "Favorite removed" });
});

module.exports = {
  addToFavorites,
  getFavorites,
  deleteFromFavorites,
};

// const asyncHandler = require("express-async-handler");
// const favoritePhoto = require("../models/favoritePhotoModel");

// function addToFavorites(req, res) {
//   asyncHandler(async () => {
//     const { user, photoUrl, description, username, explanation } = req.body;

//     if (!user || !photoUrl || !description || !username || !explanation) {
//       res.status(400);
//       throw new Error("Please make sure that all fields are completed");
//     }

//     const newPhoto = await favoritePhoto.create({
//       user,
//       photoUrl,
//       description,
//       username,
//       explanation,
//     });

//     res.status(200).json({ Message: "Added to Favorites", newPhoto });
//   })();
// }

// function getFavorites(req, res) {
//   asyncHandler(async () => {
//     const favorites = await favoritePhoto
//       .find({ user: req.user._id })
//       .select("-__v");

//     res.status(200).json({ favorites });
//   })();
// }

// function deleteFromFavorites(req, res) {
//   asyncHandler(async () => {
//     const { id } = req.params;

//     const favorite = await favoritePhoto.findById(id);

//     if (!favorite) {
//       res.status(404);
//       throw new Error("Favorite not found");
//     }

//     if (favorite.user.toString() !== req.user._id.toString()) {
//       res.status(401);
//       throw new Error("Not authorized");
//     }

//     await favorite.remove();

//     res.status(200).json({ message: "Favorite removed" });
//   })();
// }

// module.exports = {
//   addToFavorites,
//   getFavorites,
//   deleteFromFavorites,
// };
