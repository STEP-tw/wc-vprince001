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

const createParsedArgs = function(options, fileName) {
  return { options, fileName };
};

const parse = function(args) {
  const options = args.filter(optionCandidate =>
    optionCandidate.startsWith("-")
  );
  let fileName = args.slice(options.length);
  let shortOptions = options;
  shortOptions = shortOptions.join(EMPTY_STRING).replace(HYPHEN, EMPTY_STRING);
  shortOptions = shortOptions.split(EMPTY_STRING);

  let longOptions = shortOptions.map(getLongOption);

  if (longOptions.length < 1) {
    longOptions = [OPTION_LINE_COUNT, OPTION_CHAR_COUNT, OPTION_WORD_COUNT];
  }

  return createParsedArgs(longOptions, fileName);
};

module.exports = { parse };
