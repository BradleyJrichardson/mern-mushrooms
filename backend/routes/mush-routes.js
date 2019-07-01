const express = require("express");
const router = express.Router();
const { getMushrooms } = require("../controllers/mush-controller");

router.get("/index", getMushrooms);

module.exports = router;
