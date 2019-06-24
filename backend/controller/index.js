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

const addone = (req, res) => {
  const { id, name, height, weight, moves } = req.body;
  mushroom
    .create({ id, name, height, weight, moves })
    .then(newdoc => {
      res.json(newdoc);
    })
    .catch(err => res.json(err));
};

const deletebyid = (req, res) => {
  const { id } = req.params;
  mushroom.deleteOne({ id: id }, function(err) {});
};

const addmushroom = (req, res) => {
  mushroom.insertMany(mushroomArray, function(error, docs) {});
};

const addmoves = (req, res) => {
  const { id } = req.params;
  console.log(req.body.moves);
  mushroom
    .findOne({ id })
    .then(doc => {
      doc.moves = doc.moves.concat(req.body.moves);
      doc
        .save()
        .then(doc => res.send(`${doc.name} has been updated`))
        .catch(error => console.log(error));
    })
    .catch(err => res.json(err));
};

const mushroomArray = [
  {
    id: 1,
    name: "bulbasaur",
    height: 7,
    moves: ["razor-wind", "swords-dance"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    id: 2,
    name: "ivysaur",
    height: 10,
    moves: ["cut", "bind", "swords-dance"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    id: 3,
    name: "venusaur",
    height: 20,
    moves: ["cut", "swords-dance"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id: 4,
    name: "charmander",
    height: 6,
    moves: ["mega-punch", "fire-punch"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    id: 5,
    name: "charmeleon",
    height: 11,
    moves: ["mega-punch", "fire-punch"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  }
];

module.exports = {
  index,
  findbyid,
  findbyname,
  addone,
  deletebyid,
  addmushroom,
  addmoves
};
