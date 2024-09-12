const { Router } = require("express");
const Player = require("../../models/Player.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Player.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
