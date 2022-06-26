const router = require("express").Router();
const {
  createDesigner,
  updateDesigner,
  deleteDesigner,
  getDesignerById,
  getAllDesigners,
} = require("../controllers/designerController");

router.get("/:id", getDesignerById);
router.put("/:id", updateDesigner);
router.delete("/:id", deleteDesigner);
router.post("/all", getAllDesigners);
router.post("/", createDesigner);

module.exports = router;
