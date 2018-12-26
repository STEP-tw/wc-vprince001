const assert = require("assert");
const { wc } = require("../src/lib.js");

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
    const expected = ["", 3, 5, 21, "file1"].join("\t");
    assert.equal(actual, expected);
  });
});
