const {
  getLines,
  getLineCount,
  getWords,
  filterEmptyStrings,
  getWordCount,
  getChars,
  getCharCount
} = require("./util_lib.js");

const { TAB, UNICODE } = require("./constants_lib");

const wc = function(fileName, fs) {
  let fileContent = fs.readFileSync(fileName, UNICODE);

  let lines = getLines(fileContent);
  let numOfLines = getLineCount(lines);

  let words = getWords(fileContent);
  let filteredWords = filterEmptyStrings(words);
  let numOfWords = getWordCount(filteredWords);

  let characters = getChars(fileContent);
  let numOfChars = getCharCount(characters);

  return (
    TAB + numOfLines + TAB + numOfWords + TAB + numOfChars + TAB + fileName
  );
};

module.exports = { wc };
