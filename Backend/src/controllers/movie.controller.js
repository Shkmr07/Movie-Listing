const Movie = require("../models/Movie");
const customStatus = require("../utils/customStatus");

async function addMovie(req, res) {
  const payload = req.body;
  try {
    const movie = await Movie.create(payload);
    customStatus(res, 201, "Movie added successful", { movie });
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}

async function updateMovie(req, res) {
  const {id} = req.params;
  const payload = req.body;
  console.log(id)
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return customStatus(res, 404, "Movie not found");
    }
    const updatedMovie = await Movie.findByIdAndUpdate(id, payload, {
      new: true,
    });
    customStatus(res, 200, "movie updated successful", { updatedMovie });
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}

async function getMovie(req, res) {
  try {
    const movies = await Movie.find();
    customStatus(res, 200, "List of movie", { movies });
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}

async function deleteMovie(req, res) {
  const {id} = req.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return customStatus(res, 404, "Movie not found");
    }

    await Movie.findByIdAndDelete(id);
    customStatus(res, 200, "Movie deleted successful");
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}


module.exports =  {addMovie,getMovie,deleteMovie,updateMovie}