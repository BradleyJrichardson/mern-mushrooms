const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_PROD;
const app = new express();
const api = require("./routes/api/api");

const cors = require("cors");

app.use(cors());

app.use("/api", api);

// database connection
mongoose
  .connect(mongoURI, { useNewUrlParser: true }, err => {
    if (err) {
      console.log("err");
    }
  })
  .then(() => {
    console.log("connected");
  });

// connect to router
app.use(require("./routes"));

// listen on port 5000
app.listen(5000, () => console.log("listening on port 5000"));
