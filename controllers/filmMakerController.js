const FilmMaker = require("../models/FilmMaker");
const { getFilterQueries } = require("../helpers/filterHelpers");
//CREATE
const createFilmMaker = async (req, res) => {
  const newFilmMaker = new FilmMaker(req.body);
  try {
    const savedFilmMaker = await newFilmMaker.save();
    res.status(200).json(savedFilmMaker);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//UPDATE
const updateFilmMaker = async (req, res) => {
  try {
    const updatedFilmMaker = await FilmMaker.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFilmMaker);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};

//DELETE
const deleteFilmMaker = async (req, res) => {
  try {
    await FilmMaker.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_BY_ID
const getFilmMakerById = async (req, res) => {
  try {
    const filmMaker = await FilmMaker.findById(req.params.id);
    res.status(200).json(filmMaker);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_ALL
const getAllFilmMakers = async (req, res) => {
  const locale = req.query.locale || "en";

  let queries = getFilterQueries(req.body, locale);
  let options = {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
  };

  try {
    let filmMakers = await FilmMaker.paginate(
      {
        ...queries,
      },
      options
    );

    res.status(200).json(filmMakers);
  } catch (err) {
    res.status(500).json(err);
  }
};

const uploadImages = async (req, res) => {
  try {
    const images = req.images;

    const updatedFilmMaker = await FilmMaker.findByIdAndUpdate(
      req.params.id,
      {
        $push: { images: { $each: images } },
        $set: { image: images && images[0] ? images[0] : null },
      },
      { new: true }
    );
    res.status(200).json(updatedFilmMaker);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};
const uploadGif = async (req, res) => {
  try {
    const images = req.images;

    const updatedFilmMaker = await FilmMaker.findByIdAndUpdate(
      req.params.id,
      {
        $set: { gif: images[0] },
      },
      { new: true }
    );
    res.status(200).json(updatedFilmMaker);
  } catch (err) {
    const status = err.name === "ValidationError" ? 422 : 500;
    res.status(status).json(err);
  }
};
module.exports = {
  createFilmMaker,
  updateFilmMaker,
  deleteFilmMaker,
  getFilmMakerById,
  getAllFilmMakers,
  uploadImages,
  uploadGif,
};
