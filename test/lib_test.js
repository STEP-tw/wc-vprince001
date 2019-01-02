const assert = require("assert");

const { selectOptionCount, getCounts, wc } = require("../src/lib");
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

describe("getCounts", function() {
  it("should return total lines, words and character count with file name for a single file", function() {
    const actual = getCounts(files.file1, ["lineCount"]);
    let expected = [2];
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

  it("should return total lines, words and character count with file name for a two files", function() {
    const actual = wc(["file1", "file1"], fs);
    let expected = TAB + "2" + TAB + "4" + TAB + "15 file1\n";
    expected += TAB + "2" + TAB + "4" + TAB + "15 file1\n";
    expected += TAB + "4" + TAB + "8" + TAB + "30 total";
    assert.equal(actual, expected);
  });
});
