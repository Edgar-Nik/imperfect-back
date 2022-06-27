const { getFilterQueries } = require("../helpers/filterHelpers");
const ProductionManager = require("../models/ProductionManager");

//CREATE
const createProductionManager = async (req, res) => {
  const newProductionManager = new ProductionManager(req.body);
  try {
    const savedProductionManager = await newProductionManager.save();
    res.status(200).json(savedProductionManager);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//UPDATE
const updateProductionManager = async (req, res) => {
  try {
    const updatedProductionManager = await ProductionManager.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProductionManager);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//DELETE
const deleteProductionManager = async (req, res) => {
  try {
    await ProductionManager.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_BY_ID
const getProductionManagerById = async (req, res) => {
  try {
    const productionManager = await ProductionManager.findById(req.params.id);
    res.status(200).json(productionManager);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_ALL
const getAllProductionManagers = async (req, res) => {
  const locale = req.query.locale || "en";

  let queries = getFilterQueries(req.body, locale);
  let options = {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
  };

  try {
    let productionManagers = await ProductionManager.paginate(
      {
        ...queries,
      },
      options
    );

    res.status(200).json(productionManagers);
  } catch (err) {
    res.status(500).json(err);
  }
};

const uploadImages = async (req, res) => {
  try {
    const images = req.images;

    const updatedProductionManager = await ProductionManager.findByIdAndUpdate(
      req.params.id,
      {
        $push: { images: { $each: images } },
        $set: { image: images && images[0] ? images[0] : null },
      },
      { new: true }
    );
    res.status(200).json(updatedProductionManager);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};
const uploadGif = async (req, res) => {
  try {
    const images = req.images;
    console.log(images);
    const updatedProductionManager = await ProductionManager.findByIdAndUpdate(
      req.params.id,
      {
        $set: { gif: images[0] },
      },
      { new: true }
    );
    res.status(200).json(updatedProductionManager);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

module.exports = {
  createProductionManager,
  updateProductionManager,
  deleteProductionManager,
  getProductionManagerById,
  getAllProductionManagers,
  uploadImages,
  uploadGif,
};
