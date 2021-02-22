console.log("hello");

const jsdom = require("jsdom");

/* 
Fetches fund data from https://fund.cnyes.com.
Usage: please pass in a valid https://fund.cnyes.com/detail url that points to a page of a specific fund.
Returns fund data as object on success, fail status on error.
*/
const fetchFromCnyesURL = async (url) => {
  let output = {};
  try {
    const verifyDomainRegex = /https:\/\/fund.cnyes.com\/detail\/.*/g;
    if (!url.match(verifyDomainRegex)) {
      throw new Error(
        "url does not match. Please check if url starts with https://fund.cnyes.com/detail"
      );
    }
    const dom = await jsdom.JSDOM.fromURL(url);
    const raw = dom.window.document
      .querySelector("body")
      .querySelector("script")
      .textContent.replace("window.__data=", "")
      .replace("}};", "}}");
    const data = JSON.parse(raw);
    const { fundById, fundReturnPerfById, fundDocumentById } = data;

    if (
      fundById === undefined ||
      fundReturnPerfById === undefined ||
      fundDocumentById === undefined
    ) {
      throw new Error("Error in parsing data from source!");
    }
    for (const i of [fundById, fundReturnPerfById, fundDocumentById]) {
      if (Object.values(i)[0] === undefined) {
        throw new Error("Error in parsing data from source!");
      }
      output = { ...output, ...Object.values(i)[0].items };
    }
  } catch (error) {
    output = { status: "fail", errorMessage: error.message };
  }

  return output;
};

module.exports = { fetchFromCnyesURL };
