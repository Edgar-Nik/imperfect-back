const router = require("express").Router();
const {
  createProductionManager,
  updateProductionManager,
  deleteProductionManager,
  getProductionManagerById,
  getAllProductionManagers,
} = require("../controllers/productionManagerController");

router.get("/:id", getProductionManagerById);
router.put("/:id", updateProductionManager);
router.delete("/:id", deleteProductionManager);
router.post("/all", getAllProductionManagers);
router.post("/", createProductionManager);

module.exports = router;
