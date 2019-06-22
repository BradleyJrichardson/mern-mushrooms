const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_PROD;
const app = new express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

// database connection
mongoose
  .connect(mongoURI, { useNewUrlParser: true }, err => {
    if (err) {
      console.log("mongodb not on");
    }
  })
  .then(() => {
    console.log("connected");
  });

// connect to router
// app.use(require("./routes"));

app.get("/mushroom", (req, res) => {
  axios
    .get(
      "https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Suillus_luteus"
    )
    .then(response => {
      const data = response.data.lead;
      const binomial_name = data.normalizedtitle;
      const description = data.description;
      const image = data.image.urls[800];
      console.log(binomial_name);
      console.log(description);
      console.log(image);

      const blockToParse = data.sections[0].text;
      console.log(blockToParse);
    })
    .catch(err => {
      console.log(err);
    });
});

// listen on port 3000
app.listen(5000, () => console.log("listening on port 5000"));
