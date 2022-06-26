const router = require("express").Router();
const {
  generateUploadUrl,
  uploadImages,
} = require("../controllers/s3Controller");
const multer = require("multer");

const storage = multer.memoryStorage();
const imageResize = require("../helpers/imageResize");
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});

router.get("/", generateUploadUrl);
router.post("/:id", upload.array("images"), imageResize, uploadImages);

module.exports = router;
