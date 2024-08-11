const { Router } = require("express");
const getPlayer = require("./getPlayer.routes.js");
const postPlayer = require("./postPlayer.routes.js");

const router = Router();

router.use("/", getPlayer);
router.use("/", postPlayer);

module.exports = router;
