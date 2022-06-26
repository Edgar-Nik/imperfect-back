const getFilterQueries = (filters, locale = "en") => {
  let queries = {};

  const {
    age,
    experience_date,
    languages,
    genre,
    specialized_in,
    specialized_in_multilang,
    can_work_with,
    support_equipment,
    height,
    weight,
    eye_color,
    skin_tone,
    foot_size,
    other_details,
    special_skills,
    experience,
    softwares,
    breast_size,
    programs,
    music_style,
    materials,
    voice_type,
    instrument_type,
    ...rest
  } = filters;

  if (rest) {
    Object.entries(rest).forEach((item) => {
      if (item[1]) {
        queries = {
          ...queries,
          [item[0]]: { $eq: item[1] },
        };
      }
    });
  }

  if (age) {
    let dateObj = {};
    if (age.length > 1) {
      if (age[0]) {
        dateObj = {
          $gte: age[0],
        };
      }
      if (age[1]) {
        dateObj = {
          ...dateObj,
          $lte: age[1],
        };
      }
    } else {
      if (age[0]) {
        dateObj = {
          $lte: age[0],
        };
      }
    }

    queries = {
      ...queries,
      date_of_birth: dateObj,
    };
  }
  if (experience_date) {
    let dateObj = {};
    if (experience_date.length > 1) {
      if (experience_date[0]) {
        dateObj = {
          $gte: experience_date[0],
        };
      }
      if (experience_date[1]) {
        dateObj = {
          ...dateObj,
          $lte: experience_date[1],
        };
      }
    } else {
      if (experience_date[0]) {
        dateObj = {
          $lte: experience_date[0],
        };
      }
    }
    queries = {
      ...queries,
      experience_date: dateObj,
    };
  }

  if (languages) {
    queries = {
      ...queries,
      languages: {
        $in: languages,
      },
    };
  }

  if (specialized_in_multilang) {
    queries = {
      ...queries,
      [`specialized_in_multilang.${locale}`]: {
        $in: specialized_in_multilang,
      },
    };
  }
  if (specialized_in) {
    queries = {
      ...queries,
      specialized_in: {
        $in: specialized_in,
      },
    };
  }
  if (materials) {
    queries = {
      ...queries,
      materials: {
        $in: materials,
      },
    };
  }
  if (genre) {
    queries = {
      ...queries,
      genre: {
        $in: genre,
      },
    };
  }
  if (can_work_with) {
    queries = {
      ...queries,
      can_work_with: {
        $in: can_work_with,
      },
    };
  }
  if (support_equipment) {
    queries = {
      ...queries,
      support_equipment: {
        $in: support_equipment,
      },
    };
  }
  if (height) {
    let obj = {};
    if (height[0]) {
      obj = {
        $gte: height[0],
      };
    }
    if (height[1]) {
      obj = {
        ...obj,
        $lt: height[1],
      };
    }
    queries = {
      ...queries,
      height: obj,
    };
  }
  if (weight) {
    let obj = {};
    if (weight[0]) {
      obj = {
        $gte: weight[0],
      };
    }
    if (weight[1]) {
      obj = {
        ...obj,
        $lt: weight[1],
      };
    }
    queries = {
      ...queries,
      weight: obj,
    };
  }

  if (eye_color) {
    queries = {
      ...queries,
      eye_color: { $in: eye_color },
    };
  }

  if (breast_size) {
    queries = {
      ...queries,
      breast_size: { $in: breast_size },
    };
  }
  if (skin_tone) {
    queries = {
      ...queries,
      skin_tone: { $in: skin_tone },
    };
  }
  if (foot_size) {
    queries = {
      ...queries,
      foot_size: { $in: foot_size },
    };
  }
  if (other_details) {
    queries = {
      ...queries,
      other_details: { $in: other_details },
    };
  }
  if (special_skills) {
    queries = {
      ...queries,
      special_skills: { $in: special_skills },
    };
  }
  if (experience) {
    queries = {
      ...queries,
      experience: { $in: experience },
    };
  }

  if (programs) {
    queries = {
      ...queries,
      [`programs.${locale}`]: {
        $in: programs,
      },
    };
  }
  if (softwares) {
    queries = {
      ...queries,
      softwares: {
        $in: softwares,
      },
    };
  }

  if (voice_type) {
    queries = {
      ...queries,
      [`voice_type.${locale}`]: {
        $in: voice_type,
      },
    };
  }
  if (music_style) {
    queries = {
      ...queries,
      [`music_style.${locale}`]: {
        $in: music_style,
      },
    };
  }
  if (instrument_type) {
    queries = {
      ...queries,
      [`instrument_type.${locale}`]: {
        $in: instrument_type,
      },
    };
  }
  return queries;
};

module.exports = {
  getFilterQueries,
};
