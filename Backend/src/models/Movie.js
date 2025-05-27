const mongoose = require("mongoose");

const MovieModel = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  genre: String,
  rating: String,
});

module.exports = mongoose.model("Movie", MovieModel);
