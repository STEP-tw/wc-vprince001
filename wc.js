const fs = require("fs");
const { wc } = require("./src/lib.js");

const main = function() {
  const userInput = process.argv[2];
  console.log(wc(userInput, fs));
};

main();
