import cheerio from "cheerio";
import axios from "axios";

const url =
  "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";

//This only gets the h1 header from the website
async function getGenre() {
  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    const genre = $("h1").text();

    console.log(genre);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getGenre();
