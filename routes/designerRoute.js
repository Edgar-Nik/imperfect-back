const router = require("express").Router();
const {
  createDesigner,
  updateDesigner,
  deleteDesigner,
  getDesignerById,
  getAllDesigners,
  uploadImages,
  uploadGif,
} = require("../controllers/designerController");
const multer = require("multer");
const storage = multer.memoryStorage();
const imageResize = require("../helpers/imageResize");
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});

router.get("/:id", getDesignerById);
router.put("/:id", updateDesigner);
router.delete("/:id", deleteDesigner);
router.post("/all", getAllDesigners);
router.post("/images/:id", upload.array("images"), imageResize, uploadImages);
router.post("/gif/:id", upload.array("images"), imageResize, uploadGif);
router.post("/", createDesigner);

module.exports = router;
