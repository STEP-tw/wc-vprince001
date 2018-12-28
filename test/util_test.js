const assert = require("assert");

const { getLineCount, getWordCount, getCharCount } = require("../src/util_lib");

//=====================================================================================================

const files = {
  file1: "line 1\nline  2\n"
};

//=====================================================================================================

describe("getLineCount", function() {
  it("should return number of lines for fileContent", function() {
    const actual = getLineCount(files.file1);
    const expected = 2;
    assert.equal(actual, expected);
  });
});

//=====================================================================================================

describe("getWordCount", function() {
  it("should return number of words for fileContent", function() {
    const actual = getWordCount(files.file1);
    const expected = 4;
    assert.equal(actual, expected);
  });
});

//=====================================================================================================

describe("getCharCount", function() {
  it("should return number of characters for fileContent", function() {
    const actual = getCharCount(files.file1);
    const expected = 15;
    assert.equal(actual, expected);
  });
});
