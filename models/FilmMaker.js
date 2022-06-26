const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const FilmMakerSchema = Schema({
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
    required: true,
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
  specialized_in_multilang: {
    am: {
      type: Array,
    },
    en: {
      type: Array,
    },
  },
  specialized_in: {
    type: Array,
  },
  genre: {
    type: Array,
  },
  photo: {
    type: Boolean,
  },
  video: {
    type: Boolean,
  },
  can_work_with: {
    type: Array,
  },
  support_equipment: {
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
    type: Array,
  },
  special_skills: {
    type: Array,
  },
  experience: {
    type: Array,
  },
  voiceover: {
    type: Boolean,
  },
  stunt_master: {
    type: Boolean,
  },
  programs: {
    am: {
      type: Array,
    },
    en: {
      type: Array,
    },
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

FilmMakerSchema.plugin(mongoosePaginate);

module.exports = model("FilmMaker", FilmMakerSchema);
