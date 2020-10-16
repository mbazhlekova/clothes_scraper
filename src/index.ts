import cheerio from "cheerio";
import puppeteer from "puppeteer";

const url = "https://www.grailed.com/shop/8B9Z5H_WyA";

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
    $(".feed > .feed-item").each(function () {
      console.log($(this));
    });
    console.log(menuLinks);
  });
