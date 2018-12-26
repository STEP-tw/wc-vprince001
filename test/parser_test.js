const assert = require("assert");
const { parse } = require("../src/parser.js");

describe("parse", function() {
  it("should return empty string as option and fileName in object for only fileName in array", function() {
    const args = ["file1"];
    const actual = parse(args);
    const expected = { option: "", fileName: "file1" };

    assert.deepEqual(actual, expected);
  });

  it("should return -l as option and fileName in object for -l and fileName in array", function() {
    const args = ["-l", "file1"];
    const actual = parse(args);
    const expected = { option: "-l", fileName: "file1" };

    assert.deepEqual(actual, expected);
  });
});
