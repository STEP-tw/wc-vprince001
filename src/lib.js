const {
  getLines,
  getLineCount,
  getWords,
  filterEmptyStrings,
  getWordCount,
  getChars,
  getCharCount
} = require("./util_lib.js");

const { parse } = require("./parser.js");
const { TAB, UNICODE } = require("./constants_lib");

const getFileDetails = function(fileContent) {
  const lines = getLines(fileContent);
  const lineCount = getLineCount(lines);

  const words = getWords(fileContent);
  const filteredWords = filterEmptyStrings(words);
  const wordCount = getWordCount(filteredWords);

  const characters = getChars(fileContent);
  const characterCount = getCharCount(characters);
  return { lineCount, wordCount, characterCount };
};

const wc = function(args, fs) {
  const { option, fileName } = parse(args);

  const fileContent = fs.readFileSync(fileName, UNICODE);

  const { lineCount, wordCount, characterCount } = getFileDetails(fileContent);
  if (option == "-l") {
    return TAB + lineCount + TAB + fileName;
  }

  return (
    TAB + lineCount + TAB + wordCount + TAB + characterCount + TAB + fileName
  );
};

module.exports = { wc };
