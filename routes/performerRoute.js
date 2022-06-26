const router = require("express").Router();
const {
  createPerformer,
  updatePerformer,
  deletePerformer,
  getPerformerById,
  getAllPerformers,
} = require("../controllers/performerController");

router.get("/:id", getPerformerById);
router.put("/:id", updatePerformer);
router.delete("/:id", deletePerformer);
router.post("/all", getAllPerformers);
router.post("/", createPerformer);

module.exports = router;
