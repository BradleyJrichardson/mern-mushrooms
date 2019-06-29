const express = require("express");
const axios = require("axios");
const { scrape } = require("./webscraper");
const router = express.Router();
const Mushroom = require("../../model/mushroom");

router.get("/pullmushroom", (req, res) => {
  axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Agaricus_subrufescens`
    )
    .then(response => {
      const data = response.data;
      const image = data.lead.image.urls[800];
      const operation = data.remaining.sections;
      const result = operation.filter(obj => {
        return obj.line === "Description";
      });
      const dirtyDescription = result[0].text;
      if (!dirtyDescription) {
        console.log(mush);
      }
      const description = dirtyDescription.match(/<p>(.*?)<\/p>/g).map(val => {
        return val
          .replace(/<[^>]*>?/gm, "")
          .replace(/&nbsp;/gm, "")
          .replace(/\n/gm, "")
          .replace(/ *\[[^)]*\] */g, "");
      });
      blockToParse =
        data.lead.sections[0].text + data.remaining.sections[0].text;
      data.remaining.sections[1].text + data.remaining.sections[2].text;
      // data.remaining.sections[3].text +
      // data.remaining.sections[4].text +
      // data.remaining.sections[5].text +
      // data.remaining.sections[6].text;
      const processedMushroom = scrape(blockToParse);
      processedMushroom.description = description[0];

      const mycologyobj = processedMushroom.mycology;
      const cloud_images = [
        "https://res.cloudinary.com/djx4kaofm/image/upload/v1561802225/mushrooms/Agaricus_subrufescens_1_q5nc0u.jpg",
        "https://res.cloudinary.com/djx4kaofm/image/upload/v1561802208/mushrooms/Agaricus_subrufescens_2_eopsp1.jpg",
        "https://res.cloudinary.com/djx4kaofm/image/upload/v1561802199/mushrooms/Agaricus_subrufescens_3_tsin5g.jpg"
      ];

      const makeMushroom = async () => {
        const newMush = new Mushroom({
          common_name: [
            "Almond mushroom",
            "Mushroom of the sun",
            "God's mushroom"
          ],
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
          description: processedMushroom.description,
          images: cloud_images
        });
        return await newMush.save();
      };

      const bionomial = processedMushroom.bionomial_name;
      // // aftering rquioring in the mushrooms schema we will post to the database using this method
      const checkMushroom = async () => {
        try {
          const query = await Mushroom.findOne({ binomial_name: bionomial });
          if (query === null) {
            const mushroom = await makeMushroom();
            console.log("success");
          } else {
            console.log("mushroom exists");
          }
        } catch (err) {
          console.log(err);
          console.log("fail");
          console.log(mush);
        }
      };
      checkMushroom();
    })

    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
