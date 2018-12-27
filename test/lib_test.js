const assert = require("assert");

const { getFileDetails, wc } = require("../src/lib");
const { TAB } = require("../src/constants_lib");

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

describe("getFileDetails", function() {
  it("should return total lines, words and character count with file name for a single file", function() {
    const actual = getFileDetails("file1", files.file1);
    let expected = {
      fileName: "file1",
      lineCount: 2,
      wordCount: 4,
      charCount: 15
    };
    assert.deepEqual(actual, expected);
  });
});

//=====================================================================================================

describe("wc", function() {
  it("should return total lines, words and character count with file name for a single file", function() {
    const actual = wc(["file1"], fs);
    let expected = TAB + "2" + TAB + "4" + TAB + "15 file1";
    assert.equal(actual, expected);
  });

  it("should return total lines, words and character count with file name for a single file", function() {
    const actual = wc(["-l", "file1"], fs);
    const expected = TAB + "2 file1";
    assert.equal(actual, expected);
  });
});
