const express = require("express");
const router = express.Router();

router.use(express.json());

router.use("/auth", require("./auth-routes"));
router.use("/user", require("./user-routes"));
router.use("/mush", require("./mush-routes"));

module.exports = router;
