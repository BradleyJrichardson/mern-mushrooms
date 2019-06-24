const cheerio = require("cheerio");
const jsonframe = require("jsonframe-cheerio");

const scrape = dirtyData => {
  const $ = cheerio.load(dirtyData);
  // jsonframe($);

  const tableData = $(".infobox")
    .find("tbody")
    .find("tr")
    .find("td")
    .text();

  return {
    kingdom: $(".kingdom").text(),
    division: $(".division").text(),
    class: $(".class").text(),
    order: $(".order").text(),
    family: $(".family").text(),
    mycology: $(".infobox").text()
  };
};

module.exports = { scrape };
