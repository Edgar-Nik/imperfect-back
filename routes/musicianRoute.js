const router = require("express").Router();
const {
  createMusician,
  updateMusician,
  deleteMusician,
  getMusicianById,
  getAllMusicians,
  uploadImages,
  uploadGif,
} = require("../controllers/musicianController");
const multer = require("multer");

const storage = multer.memoryStorage();
const imageResize = require("../helpers/imageResize");
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});
router.get("/:id", getMusicianById);
router.put("/:id", updateMusician);
router.delete("/:id", deleteMusician);
router.post("/all", getAllMusicians);
router.post("/images/:id", upload.array("images"), imageResize, uploadImages);
router.post("/gif/:id", upload.array("images"), imageResize, uploadGif);
router.post("/", createMusician);

module.exports = router;
