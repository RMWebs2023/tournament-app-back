const { Router } = require("express");
const Player = require("../../models/Player.js");

const router = Router();

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const playerModify = req.body;
    await Player.findByIdAndUpdate(id, playerModify);
    res.status(201).json({ message: "Se ha modificado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
