// user schema
const mongoose = require("mongoose");

const mushSchema = new mongoose.Schema({
  binomial_name: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  order: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  mycology: {
    hymenium_spore_type: {
      type: String,
      required: false
    },
    cap_type: {
      type: String,
      required: false
    },
    hymenium_shape_type: {
      type: String,
      required: false
    },
    stipe_type: {
      type: String,
      required: false
    },
    edibility_type: {
      type: String,
      required: false
    }
  },
  description: {
    type: String,
    required: true
  },
  images: { type: [String] }
});

module.exports = mongoose.model("mushroom", mushSchema);
