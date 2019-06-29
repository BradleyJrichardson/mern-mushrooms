// user schema
const mongoose = require("mongoose");

const mushSchema = new mongoose.Schema({
  binomial_name: {
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
    required: false
  },
  images: { type: [String] }
});

module.exports = mongoose.model("mushroom", mushSchema);
