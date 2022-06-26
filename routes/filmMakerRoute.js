const router = require("express").Router();
const {
  createFilmMaker,
  updateFilmMaker,
  deleteFilmMaker,
  getFilmMakerById,
  getAllFilmMakers,
} = require("../controllers/filmMakerController");

router.get("/:id", getFilmMakerById);
router.put("/:id", updateFilmMaker);
router.delete("/:id", deleteFilmMaker);
router.post("/all", getAllFilmMakers);
router.post("/", createFilmMaker);

module.exports = router;
