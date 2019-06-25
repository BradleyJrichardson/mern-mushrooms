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
      required: true
    },
    cap_type: {
      type: String,
      required: true
    },
    hymenium_shape_type: {
      type: String,
      required: true
    },
    stipe_type: {
      type: String,
      required: true
    },
    edibility_type: {
      type: String,
      required: true
    }
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("mushroom", mushSchema);
