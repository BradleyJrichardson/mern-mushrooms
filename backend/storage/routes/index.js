const express = require("express");
const router = express.Router();

router.use("/mushroom", require("./mush-routes"));
router.use("/auth", require("./auth-routes"));
router.use("/user", require("./user-routes"));
module.exports = router;
