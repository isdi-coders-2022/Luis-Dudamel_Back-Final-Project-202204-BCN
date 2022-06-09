require("dotenv").config();
const path = require("path");
const express = require("express");
const multer = require("multer");
const {
  getFavDogs,
  deleteFavDog,
  createFavDog,
  editFavDog,
} = require("../controllers/dogControllers");
const { auth } = require("../middlewares/auth");

const upload = multer({
  dest: path.join("uploads", "images"),
  limits: { fileSize: 600000 },
});

const dogsRouter = express.Router();

dogsRouter.get("/favdogs", auth, getFavDogs);
dogsRouter.delete("/:idDog", auth, deleteFavDog);
dogsRouter.post("/create", auth, upload.single("picture"), createFavDog);
dogsRouter.put("/edit/:idDog", auth, upload.single("picture"), editFavDog);

module.exports = dogsRouter;
