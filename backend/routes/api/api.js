const express = require("express");
const axios = require("axios");
const { scrape } = require("./webscraper");
const router = express.Router();
const mushroom = require("../model/mushroom");

router.get("/pullmushroom", (req, res) => {
  axios
    .get(
      "https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Psilocybe_subaeruginosa"
    )
    .then(response => {
      const data = response.data;
      const image = data.lead.image.urls[800];
      console.log(image);
      const operation = data.remaining.sections;
      const result = operation.filter(obj => {
        return obj.line === "Description";
      });
      const dirtyDescription = result[0].text;

      const description = dirtyDescription.match(/<p>(.*?)<\/p>/g).map(val => {
        return val
          .replace(/<[^>]*>?/gm, "")
          .replace(/&nbsp;/gm, "")
          .replace(/\n/gm, "")
          .replace(/ *\[[^)]*\] */g, "");
      });
      blockToParse =
        data.lead.sections[0].text + data.remaining.sections[0].text;
      const processedMushroom = scrape(blockToParse);

      processedMushroom.description = description[0];
      console.log(processedMushroom);

      router.post("/postmushroom", addone);
      // aftering rquioring in the mushrooms schema we will post to the database using this method
      const addone = (req, res) => {
        mushroom
          .create({ id, name, height, weight, moves })
          .then(newdoc => {
            res.json(newdoc);
          })
          .catch(err => res.json(err));
      };
    })

    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
