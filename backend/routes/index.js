const express = require("express");
const router = express.Router();

const {
  index,
  findbyid,
  findbyname,
  deletebyid,
  addone,
  addmushroom,
  addmoves
} = require("../controller");

// index of mushroom
router.get("/mushroom", index);

// find a mushroom by an id "http://localhost:3000/mushroom/1"
router.get("/mushroom/:id", findbyid);

// find a mushroom by name "http://localhost:3000/mushroom/name/mushroom"
router.get("/mushroom/find/:name", findbyname);

module.exports = router;
