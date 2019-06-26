const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_PROD;
const app = new express();
const api = require("./routes/api/api");
const cors = require("cors");

app.use(cors());

// connect to api
app.use("/api", api);

// connect to router
app.use(require("./routes"));

// defining some options to pass into connect
const options = {
  useNewUrlParser: true,
  family: 4
};

// database connection
mongoose
  .connect(mongoURI, options, err => {
    console.log("entered");
    if (err) {
      console.log(err);
      return;
    }
  })
  .then(() => {
    console.log("connected to mongoDB");
  });

// listen on port 5000
app.listen(5000, () => console.log("listening on port 5000"));
