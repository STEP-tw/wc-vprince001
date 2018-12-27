const { NEWLINE, WORD_SEPARATOR, EMPTY_STRING } = require("./constants_lib");

const getLines = fileContent => fileContent.split(NEWLINE);
const getLineCount = lines => lines.length - 1;

const getWords = fileContent => fileContent.split(WORD_SEPARATOR);
const filterEmptyStrings = words => words.filter(word => word !== EMPTY_STRING);
const getWordCount = words => words.length;

const getChars = fileContent => fileContent.split(EMPTY_STRING);
const getCharCount = characters => characters.length;

module.exports = {
  getLines,
  getLineCount,
  getWords,
  filterEmptyStrings,
  getWordCount,
  getChars,
  getCharCount
};
