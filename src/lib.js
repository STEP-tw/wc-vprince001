const { parse } = require("./parser.js");
const { UNICODE } = require("./constants_lib");
const { format } = require("./formatter.js");

const {
  getLines,
  getLineCount,
  getWords,
  filterEmptyStrings,
  getWordCount,
  getChars,
  getCharCount
} = require("./util_lib.js");

const getFileDetails = function(fileName, fileContent) {
  const lines = getLines(fileContent);
  const lineCount = getLineCount(lines);

  const words = getWords(fileContent);
  const filteredWords = filterEmptyStrings(words);
  const wordCount = getWordCount(filteredWords);

  const characters = getChars(fileContent);

  const charCount = getCharCount(characters);

  return { fileName, lineCount, wordCount, charCount };
};

const wc = function(args, fs) {
  const { options, fileName } = parse(args);

  const fileContent = fs.readFileSync(fileName[0], UNICODE);

  const fileDetails = getFileDetails(fileName, fileContent);

  return format(fileDetails, options);
};

module.exports = { getFileDetails, wc };
