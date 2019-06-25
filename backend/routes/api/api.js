const express = require("express");
const axios = require("axios");
const { scrape } = require("./webscraper");
const router = express.Router();
const Mushroom = require("../../model/mushroom");

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

      // aftering rquioring in the mushrooms schema we will post to the database using this method
      const register = async (req, res) => {
        const { username, password, role } = req.body;
        if (username && password) {
          try {
            const query = await Mushroom.findOne({ binomial_name: bionomial });
            if (query === null) {
              const mushroom = await makeMushroom(processedMushroom);
              return res.send("mushroom created and added to db");
            } else {
              return res.status(403).send("mushroom already exists");
            }
          } catch (err) {
            return res.status(404).send("an error occurred");
          }
        } else {
          return res.status(403).send("incorrect credentials");
        }
      };

      const makeMushroom = async processedMushroom => {
        const newMush = new User({
          name: username,
          password: hash,
          role: role
        });
        return await newMush.save();
      };
    })

    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
