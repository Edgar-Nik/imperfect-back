const router = require("express").Router();
const {
  createFineArt,
  updateFineArt,
  deleteFineArt,
  getFineArtById,
  getAllFineArts,
  uploadImages,
  uploadGif,
} = require("../controllers/fineArtController");
const multer = require("multer");

const storage = multer.memoryStorage();
const imageResize = require("../helpers/imageResize");
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});
router.get("/:id", getFineArtById);
router.put("/:id", updateFineArt);
router.delete("/:id", deleteFineArt);
router.post("/all", getAllFineArts);
router.post("/images/:id", upload.array("images"), imageResize, uploadImages);
router.post("/gif/:id", upload.array("images"), imageResize, uploadGif);
router.post("/", createFineArt);

module.exports = router;
