const wc = function(fileName, fs) {
  const tab = "\t";

  let fileContent = fs.readFileSync(fileName, "utf8");

  let numOfLines = getLineCount(fileContent, fs);
  let numOfWords = fileContent.split(/[ \n]+/).filter(word => word !== "")
    .length;
  let numOfChars = fileContent.split("").length;

  return (
    tab + numOfLines + tab + numOfWords + tab + numOfChars + tab + fileName
  );
};

const getLineCount = function(fileContent, fs) {
  let numOfLines = fileContent.split("\n").length;
  return numOfLines - 1;
};

module.exports = { wc, getLineCount };
