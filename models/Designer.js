const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const DesignerSchema = Schema({
  specialist: {
    type: String,
    required: true,
  },
  full_name: {
    am: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
  },
  higer_education: {
    type: Boolean,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  experience_date: {
    type: Date,
    required: true,
  },
  languages: {
    type: Array,
  },
  specialized_in: {
    type: Array,
  },
  softwares: {
    type: Array,
  },
  images: {
    type: Array,
  },
  videos: {
    type: Array,
  },
  image: {
    type: String,
  },
  gif: {
    type: String,
  },
});

DesignerSchema.plugin(mongoosePaginate);

module.exports = model("Designer", DesignerSchema);
