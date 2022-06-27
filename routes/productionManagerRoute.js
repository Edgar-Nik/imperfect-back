const router = require("express").Router();
const {
  createProductionManager,
  updateProductionManager,
  deleteProductionManager,
  getProductionManagerById,
  getAllProductionManagers,
  uploadImages,
  uploadGif,
} = require("../controllers/productionManagerController");
const multer = require("multer");

const storage = multer.memoryStorage();
const imageResize = require("../helpers/imageResize");
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});
router.get("/:id", getProductionManagerById);
router.put("/:id", updateProductionManager);
router.delete("/:id", deleteProductionManager);
router.post("/all", getAllProductionManagers);
router.post("/images/:id", upload.array("images"), imageResize, uploadImages);
router.post("/gif/:id", upload.array("images"), imageResize, uploadGif);
router.post("/", createProductionManager);

module.exports = router;
