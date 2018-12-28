const {
  singleFileFormatter,
  multipleFileFormatter
} = require("./formatter.js");

const { parse } = require("./parser.js");
const { UNICODE } = require("./constants_lib");

const { getLineCount, getWordCount, getCharCount } = require("./util_lib.js");

const selectOptionCount = function(option) {
  let options = {
    wordCount: getWordCount,
    charCount: getCharCount,
    lineCount: getLineCount
  };

  return options[option];
};

const getCounts = function(fileContent, options) {
  let counts = [];

  options.forEach(option => {
    counts.push(selectOptionCount(option)(fileContent));
  });
  return counts;
};

const wc = function(args, fs) {
  const { options, fileNames } = parse(args);

  let output = [];

  fileNames.forEach(fileName => {
    const fileContent = fs.readFileSync(fileName, UNICODE);
    const counts = getCounts(fileContent, options);

    output.push({
      fileName,
      counts
    });
  });

  if (fileNames.length > 1) {
    return multipleFileFormatter(output);
  }
  return singleFileFormatter(output[0]);
};

module.exports = { selectOptionCount, getCounts, wc };
