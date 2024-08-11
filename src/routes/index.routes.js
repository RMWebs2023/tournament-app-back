const { Router } = require("express");
const getPlayer = require("./getPlayer.routes.js");
const postPlayer = require("./postPlayer.routes.js");
const deletePlayer = require("./deletePlayer.routes.js");

const router = Router();

router.use("/", getPlayer);
router.use("/", postPlayer);
router.use("/", deletePlayer);

module.exports = router;
