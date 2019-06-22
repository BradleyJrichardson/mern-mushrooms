const cheerio = require("cheerio");
const jsonframe = require("jsonframe-cheerio");

const scrape = dirtyData => {
  const $ = cheerio.load(dirtyData);
  // jsonframe($);
  return {
    kingdom: $(".kingdom").text(),
    division: $(".division").text(),
    class: $(".class").text(),
    order: $(".order").text(),
    family: $(".family").text()
  };
};

module.exports = { scrape };
