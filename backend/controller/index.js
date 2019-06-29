const mushroom = require("../model/mushroom");

const getMushrooms = async (req, res) => {
  const mushrooms = await mushroom.find({});
  res.status(200).send(mushrooms);
};

module.exports = {
  getMushrooms
};
