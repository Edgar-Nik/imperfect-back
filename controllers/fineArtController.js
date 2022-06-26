const { getFilterQueries } = require("../helpers/filterHelpers");
const FineArt = require("../models/FineArt");
//CREATE
const createFineArt = async (req, res) => {
  const newFineArt = new FineArt(req.body);
  try {
    const savedFineArt = await newFineArt.save();
    res.status(200).json(savedFineArt);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//UPDATE
const updateFineArt = async (req, res) => {
  try {
    const updatedFineArt = await FineArt.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFineArt);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//DELETE
const deleteFineArt = async (req, res) => {
  try {
    await FineArt.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_BY_ID
const getFineArtById = async (req, res) => {
  try {
    const fineArt = await FineArt.findById(req.params.id);
    res.status(200).json(fineArt);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_ALL
const getAllFineArts = async (req, res) => {
  const locale = req.query.locale || "en";

  let queries = getFilterQueries(req.body, locale);
  let options = {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
  };

  try {
    let fineArts = await FineArt.paginate(
      {
        ...queries,
      },
      options
    );

    res.status(200).json(fineArts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createFineArt,
  updateFineArt,
  deleteFineArt,
  getFineArtById,
  getAllFineArts,
};
