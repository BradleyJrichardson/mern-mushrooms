const cheerio = require("cheerio");
const jsonframe = require("jsonframe-cheerio");

const scrape = dirtyData => {
  const $ = cheerio.load(dirtyData);
  // jsonframe($);

  const mycology = $(".infobox").text();
  console.log(mycology);
  const startIndex = mycology.indexOf("Mycological characteristics");
  const slicedMycology = mycology.slice(startIndex);

  const indexOfEnd = (string, slicedMycology) => {
    var io = slicedMycology.indexOf(string);
    return io == -1 ? -1 : io + string.length;
  };

  const lastIndexOfHeader = indexOfEnd(
    "Mycological characteristics",
    slicedMycology
  );

  const LastIndexOf1 = indexOfEnd("hymenium", slicedMycology);

  const hymeniumSporeType = slicedMycology
    .slice(lastIndexOfHeader, LastIndexOf1)
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  const firstIndexOf3 = slicedMycology.lastIndexOf("hymenium");
  const capType = slicedMycology
    .slice(LastIndexOf1, firstIndexOf3)
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  const firstIndexOf4 = slicedMycology.indexOf("stipe");
  const hymeniumShapeType = slicedMycology
    .slice(firstIndexOf3, firstIndexOf4)
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  const firstIndexOf5 = slicedMycology.lastIndexOf("spore");
  const stipeType = slicedMycology
    .slice(firstIndexOf4, firstIndexOf5)
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  const firstIndexOf6 = slicedMycology.indexOf("ecology");
  const ecologyType = slicedMycology
    .slice(firstIndexOf5, firstIndexOf6)
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  const firstIndexOf7 = slicedMycology.indexOf("edibility");
  const edibilityType = slicedMycology
    .slice(firstIndexOf7)
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  const mycologyObj = {
    hymeniumSporeType: hymeniumSporeType,
    capType: capType,
    hymeniumShapeType: hymeniumShapeType,
    stipeType: stipeType,
    ecologyType: ecologyType,
    edibilityType: edibilityType
  };

  const doublestring = $(".infobox")
    .find("tbody")
    .find("tr")
    .find("th")
    .find("i")
    .text();

  const firstChar = doublestring[0];
  const indexToSplit = doublestring.lastIndexOf(firstChar);
  const slicedName = doublestring.slice(indexToSplit);

  return {
    bionomial: slicedName,
    kingdom: $(".kingdom").text(),
    division: $(".division").text(),
    class: $(".class").text(),
    order: $(".order").text(),
    family: $(".family").text(),
    mycology: mycologyObj
  };
};

module.exports = { scrape };
