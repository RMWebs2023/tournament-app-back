const { Router } = require("express");
const Player = require("../models/Player.js");

const router = Router();

router.post("/", async (req, res) => {
    console.log(req.body)
  try {
    const data = Player(req.body);
    await data.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
