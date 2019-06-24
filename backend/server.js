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
      "https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Amanita_muscaria"
    )
    .then(response => {
      const data = response.data;
      const image = data.lead.image.urls[800];

      const operation = data.remaining.sections;
      const result = operation.filter(obj => {
        return obj.line === "Description";
      });
      const description = result[0].text;

      const paragraphs = description.match(/<p>(.*?)<\/p>/g).map(val => {
        return val
          .replace(/<[^>]*>?/gm, "")
          .replace(/&nbsp;/gm, "")
          .replace(/\n/gm, "")
          .replace(/ *\[[^)]*\] */g, "");
      });

      // console.log(description);
      console.log(paragraphs);

      blockToParse =
        data.lead.sections[0].text + data.remaining.sections[0].text;
      const processedMushroom = scrape(blockToParse);

      // description actually changes position for different mushrooms so will have to work out another way
      // const dirtyDescription = data.remaining.sections[0].text;
      // const description = result[0].text;
      //   .replace(/<[^>]*>?/gm, "")
      //   .replace(/&nbsp;/gm, "")
      //   .replace(/\n/gm, "");
      // processedMushroom.description = description;
      // console.log(processedMushroom);
    })

    .catch(err => {
      console.log(err);
    });
});

// listen on port 3000
app.listen(5000, () => console.log("listening on port 5000"));
