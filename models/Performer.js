const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const PerformerSchema = Schema({
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
  gender: {
    type: String,
  },
  higer_education: {
    type: Boolean,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  languages: {
    type: Array,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  breast_size: {
    type: String,
  },
  waist: {
    type: Number,
  },
  hips: {
    type: Number,
  },
  skin_tone: {
    type: String,
  },
  eye_color: {
    type: String,
  },
  hair_color: {
    type: String,
  },
  hair_length: {
    type: String,
  },
  foot_size: {
    type: Number,
  },
  other_details: {
    am: { type: Array },
    en: { type: Array },
  },
  style: {
    am: { type: Array },
    en: { type: Array },
  },
  experience: {
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

PerformerSchema.plugin(mongoosePaginate);

module.exports = model("Performer", PerformerSchema);
