const express = require("express");
const {
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller");
const auth = require("../middlewares/auth.middleware");

const movieRouter = express.Router();

movieRouter.get("/", getMovie);
movieRouter.post("/add",auth,addMovie);
movieRouter.patch("/update/:id", auth, updateMovie);
movieRouter.delete("/delete/:id", auth, deleteMovie);

module.exports = movieRouter;
