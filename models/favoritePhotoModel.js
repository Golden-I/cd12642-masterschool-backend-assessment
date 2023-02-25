const { Schema, model } = require("mongoose");

const favoritePhotoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  photoUrl: String,
  description: String,
  username: String,
  explanation: String,
});

const FavoritePhoto = model("FavoritePhoto", favoritePhotoSchema);

module.exports = FavoritePhoto;
