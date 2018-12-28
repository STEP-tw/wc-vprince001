const {
  HYPHEN,
  EMPTY_STRING,
  OPTION_LINE_COUNT,
  OPTION_CHAR_COUNT,
  OPTION_WORD_COUNT
} = require("./constants_lib.js");

const getLongOption = function(shortOption) {
  const options = {
    l: OPTION_LINE_COUNT,
    c: OPTION_CHAR_COUNT,
    w: OPTION_WORD_COUNT
  };
  return options[shortOption];
};

const createParsedArgs = function(options, fileNames) {
  return { options, fileNames };
};

const parse = function(args) {
  const options = args.filter(optionCandidate =>
    optionCandidate.startsWith("-")
  );

  let fileNames = args.slice(options.length);
  let shortOptions = options.join(HYPHEN);
  shortOptions = shortOptions.split(EMPTY_STRING);

  let longOptions = shortOptions.map(getLongOption);

  if (longOptions.length < 1) {
    longOptions = [OPTION_LINE_COUNT, OPTION_CHAR_COUNT, OPTION_WORD_COUNT];
  }

  let allOptions = [OPTION_LINE_COUNT, OPTION_WORD_COUNT, OPTION_CHAR_COUNT];
  longOptions = allOptions.filter(option => longOptions.includes(option));

  return createParsedArgs(longOptions, fileNames);
};

module.exports = { parse };
