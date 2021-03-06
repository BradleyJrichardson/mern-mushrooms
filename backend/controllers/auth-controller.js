const User = require("../models/User");
const {
  checkPassword,
  generateUser,
  generateAccessToken
} = require("../utils/auth-utils");

// register post endpoint
const register = async (req, res) => {
  console.log("register ");
  const { username, password, email } = req.body;
  if (username && password) {
    try {
      const query = await User.findOne({ name: username });
      console.log(query);
      if (query === null) {
        const user = await generateUser(username, password, email);
        const token = await generateAccessToken(user);
        return res.send({ token });
      } else {
        return res.status(403).send("user already exists");
      }
    } catch (err) {
      console.log(err);
      return res.status(404).send("an error occurred");
    }
  } else {
    return res.status(403).send("incorrect credentials");
  }
};

// login post endpoint
const login = async (req, res) => {
  console.log(req.body);
  const { username, password, email } = req.body;
  console.log(username);
  if (username && password) {
    try {
      console.log("0");
      const query = await User.findOne({ name: username });
      if (query !== null) {
        console.log("1");
        const result = await checkPassword(password, query.password);
        if (!result) {
          console.log("2");
          return res.status(403).send("incorrect credentials");
        } else {
          console.log("3");
          const token = await generateAccessToken(query);
          return res.send({ token });
        }
      } else {
        console.log("4");
        return res.status(403).send("incorrect credentials");
      }
    } catch (err) {
      console.log("5");
      return res.status(404).send("an error occurred");
    }
  } else {
    console.log("6");
    return res.status(403).send("incorrect credentials");
  }
};

module.exports = {
  register,
  login
};

// test("Sends token when correct credentials are passed", () => {
//   const req = {
//     email: "brad@gmail.com",
//     username: "brad",
//     password: "password"
//   };
//   expect(login(req)).toBe(true);
// });
