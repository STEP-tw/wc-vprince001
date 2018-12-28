const { NEWLINE, WORD_SEPARATOR, EMPTY_STRING } = require("./constants_lib");

const getLineCount = function(content) {
  return content.split(NEWLINE).length - 1;
};

const getWordCount = function(content) {
  return content.split(WORD_SEPARATOR).filter(word => word != EMPTY_STRING)
    .length;
};

const getCharCount = function(content) {
  return content.length;
};

module.exports = {
  getLineCount,
  getWordCount,
  getCharCount
};
