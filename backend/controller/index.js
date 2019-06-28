const mushroom = require("../model/mushroom");

const index = (req, res) => {
  mushroom.find({}).then(allmushroom => {
    console.log(allmushroom);
    return res.json(allmushroom);
  });
};

const findbyid = (req, res) => {
  const { id } = req.params;
  mushroom
    .findOne({ id: id })
    .then(doc => {
      console.log(doc);
      return res.json(doc);
    })
    .catch(err => res.json(err));
};

const findbyname = (req, res) => {
  const { name } = req.params;
  mushroom
    .findOne({ name: name })
    .then(doc => {
      console.log(doc);
      return res.json(doc);
    })
    .catch(err => res.json(err));
};

module.exports = {
  index,
  findbyid,
  findbyname
};
