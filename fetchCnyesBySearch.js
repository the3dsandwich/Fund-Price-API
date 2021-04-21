const jsdom = require("jsdom");

/* 
Fetches by searching on https://fund.cnyes.com.
Returns list of name strings
*/
const fetchCnyesBySearch = async (name) => {
  console.log(`[fetchCnyesBySearch] received query name ${name}`);
  let output = {};
  const queryUrl = `https://fund.cnyes.com/search/?fundName=${name}`;
  try {
    const dom = await jsdom.JSDOM.fromURL(queryUrl);
    const raw = dom.window.document
      .querySelector("body")
      .querySelectorAll("div._U-dAb")[1]
      .querySelector("tbody")
      .querySelectorAll("a");
    if (raw == null || raw.length == 0) {
      throw new Error(
        "Cannot find requested fund. Please check your search query."
      );
    }
    raw.forEach((a) => {
      output[a.title] = a.href.replace("/report/", "");
    });
  } catch (error) {
    output = { status: "fail", errorMessage: error.message };
  }

  return output;
};

module.exports = { fetchCnyesBySearch };
