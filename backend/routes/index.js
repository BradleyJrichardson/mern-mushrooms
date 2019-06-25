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

// delete a mushroom by id
router.delete("/mushroom/:id", deletebyid);

// add one mushroom
router.post("/mushroom", addone);

// add base mushroom
router.post("/mushroomAll", addmushroom);

// add moves to mushroom
router.put("/mushroom/moves/:id", addmoves);

module.exports = router;
