const express = require("express");
const axios = require("axios");
const { scrape } = require("./webscraper");
const router = express.Router();
const Mushroom = require("../model/mushroom");

router.get("/pullmushroom", (req, res) => {
  axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Suillus_luteus`
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
      const processedMushroom = scrape(blockToParse);
      processedMushroom.description = description[0];

      const mycologyobj = processedMushroom.mycology;
      const cloud_images = [
        "https://res.cloudinary.com/djx4kaofm/image/upload/v1561810576/mushrooms/Suillus_luteus_3_iwrz7f.jpg",
        "https://res.cloudinary.com/djx4kaofm/image/upload/v1561810581/mushrooms/Suillus_luteus_1_fqp73a.jpg",
        "https://res.cloudinary.com/djx4kaofm/image/upload/v1561810578/mushrooms/Suillus_luteus_5_jeyd7x.jpg",
        "https://res.cloudinary.com/djx4kaofm/image/upload/v1561810576/mushrooms/Suillus_luteus_2_qbb0v5.jpg",
        "https://res.cloudinary.com/djx4kaofm/image/upload/v1561810583/mushrooms/Suillus_luteus_4_d5xqog.jpg"
      ];

      const makeMushroom = async () => {
        const newMush = new Mushroom({
          common_name: ["Slippery Jack", "Sticky bun"],
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
      console.log(bionomial);
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
