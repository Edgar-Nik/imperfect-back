const router = require("express").Router();
const {
  createFineArt,
  updateFineArt,
  deleteFineArt,
  getFineArtById,
  getAllFineArts,
} = require("../controllers/fineArtController");

router.get("/:id", getFineArtById);
router.put("/:id", updateFineArt);
router.delete("/:id", deleteFineArt);
router.post("/all", getAllFineArts);
router.post("/", createFineArt);

module.exports = router;
