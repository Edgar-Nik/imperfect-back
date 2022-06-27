const router = require("express").Router();
const {
  createFilmMaker,
  updateFilmMaker,
  deleteFilmMaker,
  getFilmMakerById,
  getAllFilmMakers,
  uploadImages,
  uploadGif,
} = require("../controllers/filmMakerController");
const multer = require("multer");

const storage = multer.memoryStorage();
const imageResize = require("../helpers/imageResize");
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});
router.get("/:id", getFilmMakerById);
router.put("/:id", updateFilmMaker);
router.delete("/:id", deleteFilmMaker);
router.post("/all", getAllFilmMakers);
router.post("/images/:id", upload.array("images"), imageResize, uploadImages);
router.post("/gif/:id", upload.array("images"), imageResize, uploadGif);
router.post("/", createFilmMaker);

module.exports = router;
