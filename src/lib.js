const wc = function(fileNames, fs) {
  const tab = "\t";
  let fileContent = fs.readFileSync(fileNames);
  let numOfLines = fileContent.split("\n").length;
  let numOfWords = fileContent.split(/[ \n]+/).filter(word => word !== "").length;
  let numOfChars = fileContent.split("").length;

  numOfLines--;
  return (
    tab + numOfLines + tab + numOfWords + tab + numOfChars + tab + fileNames
  );
};

module.exports = { wc };
