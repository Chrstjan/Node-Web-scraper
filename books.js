import cheerio from "cheerio";
import axois from "axios";

const mystery =
  "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
const bookData = [];

async function getBooks(url) {
  try {
    const res = await axois.get(url);
    const $ = cheerio.load(res.data);

    const books = $("article");
    books.each(function () {
      title = $(this).find("h3").text();
      price = $(this).find(".price_color").text();
      stock = $(this).find("availability").text().trim();

      bookData.push({ title, price, stock });
    });

    console.log(bookData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getBooks(mystery);
