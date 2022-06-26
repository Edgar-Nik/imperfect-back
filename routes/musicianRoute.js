const router = require("express").Router();
const {
  createMusician,
  updateMusician,
  deleteMusician,
  getMusicianById,
  getAllMusicians,
} = require("../controllers/musicianController");

router.get("/:id", getMusicianById);
router.put("/:id", updateMusician);
router.delete("/:id", deleteMusician);
router.post("/all", getAllMusicians);
router.post("/", createMusician);

module.exports = router;
