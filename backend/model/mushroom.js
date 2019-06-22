// user schema
const mongoose = require("mongoose");

const mushSchema = new mongoose.Schema({
  binomial_name: {
    type: String,
    required: true
  },
  common_name: {
    type: String,
    required: false
  },
  edible: {
    type: Boolean,
    required: true
  },
  undercap_type: {
    type: String,
    required: true
  },
  gill_attachment: {
    type: String,
    required: true
  },
  cap_morphology: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: false
  },
  class: {
    type: String,
    required: false
  },
  order: {
    type: String,
    required: false
  },
  family: {
    type: String,
    required: false
  },
  genus: {
    type: String,
    required: false
  }

  // image: {
  //   data: Buffer,
  //   type: String,
  // }
});

module.exports = mongoose.model("mushroom", mushSchema);
