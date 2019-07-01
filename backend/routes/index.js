const express = require("express");
const router = express.Router();

const { getMushrooms } = require("../controller");

// index of mushrooms
router.get("/mushroom", getMushrooms);

router.use("/auth", require("./auth-routes"));
router.use("/user", require("./user-routes"));
module.exports = router;
