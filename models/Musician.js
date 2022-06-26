const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const MusicianSchema = Schema({
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
  voice_type: {
    am: {
      type: String,
    },
    en: {
      type: String,
    },
  },
  instrument_type: {
    am: {
      type: String,
    },
    en: {
      type: String,
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
  music_style: {
    am: {
      type: String,
    },
    en: {
      type: String,
    },
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

MusicianSchema.plugin(mongoosePaginate);

module.exports = model("Musician", MusicianSchema);
