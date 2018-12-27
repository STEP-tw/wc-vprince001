const {
  HYPHEN,
  EMPTY_STRING,
  OPTION_LINE_COUNT,
  OPTION_CHAR_COUNT,
  OPTION_WORD_COUNT
} = require("./constants_lib.js");

const isOption = candidate =>
  candidate.startsWith(HYPHEN) && candidate.length > 1;

const getLongOption = function(shortOption) {
  const options = {
    l: OPTION_LINE_COUNT,
    c: OPTION_CHAR_COUNT,
    w: OPTION_WORD_COUNT
  };
  return options[shortOption];
};

const createParsedArgs = function(options, fileName) {
  return { options, fileName };
};

const removeHyphen = optionWithHyphen => optionWithHyphen.substr(1);

const getShortOptions = combinedOption =>
  removeHyphen(combinedOption).split(EMPTY_STRING);

const parse = function(args) {
  const optionCandidate = args[0];
  let fileName = args[1];
  const shortOptions = getShortOptions(optionCandidate);
  let longOptions = shortOptions.map(getLongOption);

  if (!isOption(optionCandidate)) {
    fileName = args[0];
    longOptions = [OPTION_LINE_COUNT, OPTION_WORD_COUNT, OPTION_CHAR_COUNT];
  }

  return createParsedArgs(longOptions, fileName);
};

module.exports = { parse };
