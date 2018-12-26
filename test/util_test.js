const assert = require("assert");

const {
  getLines,
  getLineCount,
  getWords,
  filterEmptyStrings,
  getWordCount,
  getChars,
  getCharCount
} = require("../src/util_lib");

//=====================================================================================================

const files = {
  file1: "line 1\nline  2\n",
  lines: ["line 1", "line  2", ""],
  words: ["line", "1", "line", "", "2", ""],
  filteredWords: ["line", "1", "line", "2"],
  characters: "line 1\nline  2\n".split("")
};

//=====================================================================================================

describe("getLines", function() {
  it("should return array of all lines for fileContent", function() {
    const actual = getLines(files.file1);
    const expected = "line 1\nline  2\n".split("\n");
    assert.deepEqual(actual, expected);
  });
});

//=====================================================================================================

describe("getLineCount", function() {
  it("should return number of lines for fileContent", function() {
    const actual = getLineCount(files.lines);
    const expected = 2;
    assert.equal(actual, expected);
  });
});

//=====================================================================================================

describe("getWords", function() {
  it("should return array of all words for fileContent", function() {
    const actual = getWords(files.file1);
    const expected = "line 1 line 2 ".split(" ");
    assert.deepEqual(actual, expected);
  });
});

//=====================================================================================================

describe("filterEmptyStrings", function() {
  it("should return array of words without empty strings for fileContent", function() {
    const actual = filterEmptyStrings(files.words);
    const expected = "line 1 line 2".split(" ");
    assert.deepEqual(actual, expected);
  });
});

//=====================================================================================================

describe("getWordCount", function() {
  it("should return number of words for fileContent", function() {
    const actual = getWordCount(files.filteredWords);
    const expected = 4;
    assert.equal(actual, expected);
  });
});

//=====================================================================================================

describe("getChars", function() {
  it("should return array of all characters for fileContent", function() {
    const actual = getChars(files.file1);
    const expected = files.file1.split("");
    assert.deepEqual(actual, expected);
  });
});

//=====================================================================================================

describe("getCharCount", function() {
  it("should return number of characters for fileContent", function() {
    const actual = getCharCount(files.characters);
    const expected = 15;
    assert.equal(actual, expected);
  });
});
