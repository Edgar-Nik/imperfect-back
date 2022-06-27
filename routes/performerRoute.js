const router = require("express").Router();
const {
  createPerformer,
  updatePerformer,
  deletePerformer,
  getPerformerById,
  getAllPerformers,
  uploadImages,
  uploadGif,
} = require("../controllers/performerController");
const multer = require("multer");

const storage = multer.memoryStorage();
const imageResize = require("../helpers/imageResize");
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});
router.get("/:id", getPerformerById);
router.put("/:id", updatePerformer);
router.delete("/:id", deletePerformer);
router.post("/all", getAllPerformers);
router.post("/images/:id", upload.array("images"), imageResize, uploadImages);
router.post("/gif/:id", upload.array("images"), imageResize, uploadGif);
router.post("/", createPerformer);

module.exports = router;
