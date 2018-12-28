const { TAB, SPACE, NEWLINE } = require("./constants_lib");

const singleFileFormatter = function(detail) {
  return TAB + detail.counts.join(TAB) + SPACE + detail.fileName;
};

const multipleFileFormatter = function(allFilesDetails) {
  let output = [];
  let totalCount = [0, 0, 0];

  allFilesDetails.forEach(det => {
    output.push(singleFileFormatter(det));
    totalCount[0] += det.counts[0];
    totalCount[1] += det.counts[1];
    totalCount[2] += det.counts[2];
  });
  totalCount = totalCount.filter(count => !isNaN(count));
  let totalFileDetail = {
    counts: totalCount,
    fileName: "total"
  };
  output.push(singleFileFormatter(totalFileDetail));
  return output.join(NEWLINE);
};

module.exports = { singleFileFormatter, multipleFileFormatter };
