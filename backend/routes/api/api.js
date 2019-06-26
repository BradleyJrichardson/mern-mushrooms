const express = require("express");
const axios = require("axios");
const { scrape } = require("./webscraper");
const router = express.Router();
const Mushroom = require("../../model/mushroom");

router.get("/pullmushroom", (req, res) => {
  axios
    .get(
      "https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Boletus_edulis"
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

      const mycologyobj = processedMushroom.mycology;

      const makeMushroom = async () => {
        console.log("above");
        console.log(mycologyobj);
        console.log(processedMushroom);
        console.log("line 40");
        const newMush = new Mushroom({
          binomial_name: processedMushroom.bionomial_name,
          kingdom: processedMushroom.kingdom,
          division: processedMushroom.division,
          class: processedMushroom.class,
          order: processedMushroom.order,
          family: processedMushroom.family,
          mycology: {
            hymenium_spore_type: mycologyobj.hymenium_spore_type,
            cap_type: mycologyobj.cap_type,
            hymenium_shape_type: mycologyobj.hymenium_shape_type,
            stipe_type: mycologyobj.stipe_type,
            ecology_type: mycologyobj.ecology_type,
            edibility_type: mycologyobj.edibility_type
          },
          description: processedMushroom.description
        });
        return await newMush.save();
      };

      const bionomial = processedMushroom.bionomial_name;

      // // aftering rquioring in the mushrooms schema we will post to the database using this method
      const checkMushroom = async () => {
        try {
          const query = await Mushroom.findOne({ binomial_name: bionomial });
          console.log(query);
          if (query === null) {
            console.log(processedMushroom);
            const mushroom = await makeMushroom();
            console.log("success");
          } else {
            console.log("mushroom exists");
          }
        } catch (err) {
          console.log(err);
          console.log("fail");
        }
      };
      checkMushroom();
    })

    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
