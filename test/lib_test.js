const assert = require("assert");

const { wc } = require("../src/lib");

//===================================================================================================

const files = {
  file1: "line 1\nline  2\n"
};

const fs = {
  readFileSync: function(fileName) {
    return files[fileName];
  }
};

//=====================================================================================================

describe("wc", function() {
  it("should return total lines, words and character count with file name for a single file", function() {
    const actual = wc(["file1"], fs);
    const expected = ["", 2, 4, 15, "file1"].join("\t");
    assert.equal(actual, expected);
  });

  it("should return total lines, words and character count with file name for a single file", function() {
    const actual = wc(["-l", "file1"], fs);
    const expected = ["", 2, "file1"].join("\t");
    assert.equal(actual, expected);
  });
});
