const assert = require("assert");
const { wc, getLineCount } = require("../src/lib.js");
const { TAB } = require("../src/constants_lib");
//===================================================================================================

const files = {
  file1: "line1\nline 2\nline  3\n"
};

const fs = {
  readFileSync: function(fileName) {
    return files[fileName];
  }
};

//=====================================================================================================

describe("wc", function() {
  it("should return total lines, words and character count with file name for a single file", function() {
    const actual = wc("file1", fs);
    const expected = ["", 3, 5, 21, "file1"].join(TAB);
    assert.equal(actual, expected);
  });
});

//=====================================================================================================

describe("getFileCount", function() {
  it("should return number of lines for fileContent and fs", function() {
    assert.equal(getLineCount(files.file1, fs), 3);
  });
});
