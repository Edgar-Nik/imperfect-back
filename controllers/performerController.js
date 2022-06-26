const { getFilterQueries } = require("../helpers/filterHelpers");
const Performer = require("../models/Performer");
//CREATE
const createPerformer = async (req, res) => {
  const newPerformer = new Performer(req.body);
  try {
    const savedPerformer = await newPerformer.save();
    res.status(200).json(savedPerformer);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//UPDATE
const updatePerformer = async (req, res) => {
  try {
    const updatedPerformer = await Performer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPerformer);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//DELETE
const deletePerformer = async (req, res) => {
  try {
    await Performer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_BY_ID
const getPerformerById = async (req, res) => {
  try {
    const performer = await Performer.findById(req.params.id);
    res.status(200).json(performer);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_ALL
const getAllPerformers = async (req, res) => {
  const locale = req.query.locale || "en";

  let queries = getFilterQueries(req.body, locale);
  let options = {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
  };

  try {
    let performers = await Performer.paginate(
      {
        ...queries,
      },
      options
    );

    res.status(200).json(performers);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPerformer,
  updatePerformer,
  deletePerformer,
  getPerformerById,
  getAllPerformers,
};
