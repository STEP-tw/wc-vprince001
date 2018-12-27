const assert = require("assert");
const { parse } = require("../src/parser.js");

describe("parse", function() {
  it("should return all options and fileName in object for only fileName in array", function() {
    const args = ["file1"];
    const actual = parse(args);
    const expected = {
      options: ["lineCount", "wordCount", "charCount"],
      fileName: "file1"
    };

    assert.deepEqual(actual, expected);
  });

  it("should return lineCount as options and fileName in object for -l and fileName in array", function() {
    const args = ["-l", "file1"];
    const actual = parse(args);
    const expected = { options: ["lineCount"], fileName: "file1" };

    assert.deepEqual(actual, expected);
  });
});
