const {
  NEWLINE,
  TAB,
  WORD_SEPARATOR,
  EMTPY_STRING,
  UNICODE
} = require("./constants_lib.js");

const wc = function(fileName, fs) {
  let fileContent = fs.readFileSync(fileName, UNICODE);

  let numOfLines = getLineCount(fileContent, fs);
  let numOfWords = fileContent
    .split(WORD_SEPARATOR)
    .filter(word => word !== EMTPY_STRING).length;
  let numOfChars = fileContent.split(EMTPY_STRING).length;

  return (
    TAB + numOfLines + TAB + numOfWords + TAB + numOfChars + TAB + fileName
  );
};

const getLineCount = function(fileContent, fs) {
  let numOfLines = fileContent.split(NEWLINE).length;
  return numOfLines - 1;
};

module.exports = { wc, getLineCount };
