const fs = require("fs");
const wc = require("./src/lib.js");

const main = function() {
  const userInput = process.argv.slice(2);
  wc(userInput, fs);
};

main();
