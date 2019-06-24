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

      // this method is most definately a health and safety concern!
      if (description.indexOf("edible") >= 0) {
        edible = true;
      } else {
        edible = false;
      }

      section0 = data.lead.sections[0].text;
      section1 = data.remaining.sections[0].text;
      section2 = data.remaining.sections[1].text;
      section3 = data.remaining.sections[2].text;
      section4 = data.remaining.sections[3].text;
      section5 = data.remaining.sections[4].text;
      section6 = data.remaining.sections[5].text;
      section7 = data.remaining.sections[6].text;
      section8 = data.remaining.sections[7].text;
      const blockToParse =
        section0 +
        section1 +
        section2 +
        section3 +
        section4 +
        section5 +
        section6 +
        section7 +
        section8;

      const cleanedMushroom = scrape(blockToParse);
      const mycology = cleanedMushroom.mycology;
      const startIndex = mycology.indexOf("Mycological characteristic");
      const slicedMycology = mycology.slice(startIndex);
      console.log(slicedMycology);

      const indexOfEnd = (string, slicedMycology) => {
        var io = slicedMycology.indexOf(string);
        return io == -1 ? -1 : io + string.length;
      };

      const lastIndexOfHeader = indexOfEnd(
        "Mycological characteristic",
        slicedMycology
      );
      console.log(lastIndexOfHeader);
    })

    /// Mycological characteristic
    // spores on hymenium
    // cap is convex
    // hymenium is adnate or subdecurrent
    // stipe has a ring
    // spore print is brown
    // ecology is mycorrhizal
    // edibility: edible

    .catch(err => {
      console.log(err);
    });
});

// listen on port 3000
app.listen(5000, () => console.log("listening on port 5000"));

/// how to get second third or etc index of
// var secondLastIndex = url.lastIndexOf('/', url.lastIndexOf('/')-1)
// var thirdLastIndex = url.lastIndexOf('/', (url.lastIndexOf('/', url.lastIndexOf('/')-1) -1))
// const string = blockToParse.replace(/<[^>]*>?/gm, "");

function nthIndex(str, pat, n) {
  var L = str.length,
    i = -1;
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i);
    if (i < 0) break;
  }
  return i;
}
