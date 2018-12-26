const { HYPHEN } = require("./constants_lib.js");

const isOption = candidate =>
  candidate.startsWith(HYPHEN) && candidate.length > 1;

const parse = function(args) {
  const optionCandidate = args[0];
  let fileName;

  if (optionCandidate == "-l") {
    option = "-l";
    fileName = args[1];
  }

  if (!isOption(optionCandidate)) {
    fileName = args[0];
    option = "";
  }

  return { option, fileName };
};

module.exports = { parse };
