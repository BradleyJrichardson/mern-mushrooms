const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_PROD;
const app = new express();
const axios = require("axios");
const cors = require("cors");
const { scrape } = require("./webscraper/webscraper");

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
      const data = response.data;
      const binomial_name = data.lead.normalizedtitle;
      const description = data.lead.description;
      const image = data.lead.image.urls[800];
      let edible;

      if (description.indexOf("edible") >= 0) {
        edible = true;
      } else {
        edible = false;
      }

      section0 = data.lead.sections[0].text;
      section1 = data.remaining.sections[0].text;
      const blockToParse = section0 + section1;
      const cleanedMushroom = scrape(blockToParse);
      console.log(cleanedMushroom);
      const string = blockToParse.replace(/<[^>]*>?/gm, "");
      console.log(string);
    })
    .catch(err => {
      console.log(err);
    });
});

// listen on port 3000
app.listen(5000, () => console.log("listening on port 5000"));
