const { Router } = require("express");
const Player = require("../models/Player.js");

const router = Router();

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Player.findByIdAndDelete(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
