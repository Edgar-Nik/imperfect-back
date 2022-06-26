const { getFilterQueries } = require("../helpers/filterHelpers");
const Musician = require("../models/Musician");
//CREATE
const createMusician = async (req, res) => {
  const newMusician = new Musician(req.body);
  try {
    const savedMusician = await newMusician.save();
    res.status(200).json(savedMusician);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//UPDATE
const updateMusician = async (req, res) => {
  try {
    const updatedMusician = await Musician.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMusician);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//DELETE
const deleteMusician = async (req, res) => {
  try {
    await Musician.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_BY_ID
const getMusicianById = async (req, res) => {
  try {
    const musician = await Musician.findById(req.params.id);
    res.status(200).json(musician);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_ALL
const getAllMusicians = async (req, res) => {
  const locale = req.query.locale || "en";

  let queries = getFilterQueries(req.body, locale);
  let options = {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
  };

  try {
    let musicians = await Musician.paginate(
      {
        ...queries,
      },
      options
    );

    res.status(200).json(musicians);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createMusician,
  updateMusician,
  deleteMusician,
  getMusicianById,
  getAllMusicians,
};
