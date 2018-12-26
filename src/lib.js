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

const getFileDetails = function(filename, fileContent) {
  const lines = getLines(fileContent);
  const lineCount = getLineCount(lines);

  const words = getWords(fileContent);
  const filteredWords = filterEmptyStrings(words);
  const wordCount = getWordCount(filteredWords);

  const characters = getChars(fileContent);
  const characterCount = getCharCount(characters);
  return { lineCount, wordCount, characterCount };
};

const wc = function(fileName, fs) {
  const fileContent = fs.readFileSync(fileName, UNICODE);

  const { lineCount, wordCount, characterCount } = getFileDetails(
    fileName,
    fileContent
  );

  return (
    TAB + lineCount + TAB + wordCount + TAB + characterCount + TAB + fileName
  );
};

module.exports = { wc };
