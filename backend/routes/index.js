const express = require("express");
const router = express.Router();

const { getMushrooms } = require("../controller");

// index of mushrooms
router.get("/mushroom", getMushrooms);

module.exports = router;
