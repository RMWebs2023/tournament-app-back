const { Router } = require("express");
const getPlayer = require("./routesPlayer/getPlayer.routes.js");
const postPlayer = require("./routesPlayer/postPlayer.routes.js");
const deletePlayer = require("./routesPlayer/deletePlayer.routes.js");

const router = Router();

router.use("/", getPlayer);
router.use("/", postPlayer);
router.use("/", deletePlayer);

module.exports = router;
