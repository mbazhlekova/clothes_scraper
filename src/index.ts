import cheerio from "cheerio";
import puppeteer from "puppeteer";

const url = "https://www.grailed.com/";

puppeteer
  .launch()
  .then((browser) => browser.newPage())
  .then((page) => {
    return page.goto(url).then(function () {
      return page.content();
    });
  })
  .then((html) => {
    const $ = cheerio.load(html);
    const menuLinks = [];
    $(".Page-Header-Menu > a").each(function () {
      menuLinks.push({
        title: $(this).text(),
      });
    });
    console.log(menuLinks);
  });
