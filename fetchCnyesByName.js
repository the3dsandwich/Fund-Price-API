const jsdom = require("jsdom");
const { fetchFromCnyesURL } = require("./fetchCnyes");

/* 
Fetches by searching on https://fund.cnyes.com.
Returns correct name string.
*/
const fetchCnyesByName = async (name) => {
  console.log(`[fetchCnyesByName] received query name ${name}`);
  let output = {};
  const queryUrl = `https://fund.cnyes.com/search/?fundName=${name}`;
  try {
    const dom = await jsdom.JSDOM.fromURL(queryUrl);
    const raw = dom.window.document
      .querySelector("body")
      .querySelectorAll("div._U-dAb")[1]
      .querySelector("tbody")
      .querySelector("a");
    if (raw == null) {
      throw new Error(
        "Cannot find requested fund. Please check your search query."
      );
    }
    const parsedUrl = raw.href.replace("/report/", "");
    output = fetchFromCnyesURL(parsedUrl);
  } catch (error) {
    output = { status: "fail", errorMessage: error.message };
  }

  return output;
};

module.exports = { fetchCnyesByName };
