const { getFilterQueries } = require("../helpers/filterHelpers");
const Designer = require("../models/Designer");
//CREATE
const createDesigner = async (req, res) => {
  const newDesigner = new Designer(req.body);
  try {
    const savedDesigner = await newDesigner.save();
    res.status(200).json(savedDesigner);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//UPDATE
const updateDesigner = async (req, res) => {
  try {
    const updatedDesigner = await Designer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedDesigner);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//DELETE
const deleteDesigner = async (req, res) => {
  try {
    await Designer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_BY_ID
const getDesignerById = async (req, res) => {
  try {
    const designer = await Designer.findById(req.params.id);
    res.status(200).json(designer);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_ALL
const getAllDesigners = async (req, res) => {
  const locale = req.query.locale || "en";

  let queries = getFilterQueries(req.body, locale);
  let options = {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
  };

  try {
    let designers = await Designer.paginate(
      {
        ...queries,
      },
      options
    );

    res.status(200).json(designers);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createDesigner,
  updateDesigner,
  deleteDesigner,
  getDesignerById,
  getAllDesigners,
};
