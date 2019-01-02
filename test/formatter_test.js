const { singleFileFormatter, multipleFileFormatter } = require('../src/formatter.js');
const assert = require('assert');

describe('singleFileFormatter', () => {
  it('should return justified file count when single file & one option is given', () => {
    let actual = { fileName: 'file1.txt', counts: [ 10 ] };
    let expected = '\t10 file1.txt';
    assert.equal(singleFileFormatter(actual), expected);
  });

  it('should return justified file count when single file & two option is given', () => {
    let actual = { fileName: 'file1.txt', counts: [ 10,20 ] };
    let expected = '\t10\t20 file1.txt';
    assert.equal(singleFileFormatter(actual), expected);
  });
  
  it('should return justified file count when single file & three option is given', () => {
    let actual = { fileName: 'file1.txt', counts: [ 10,20,30 ] };
    let expected = '\t10\t20\t30 file1.txt';
    assert.equal(singleFileFormatter(actual), expected);
  });
});

describe('multipleFileFormatter', () => {
  it('should return justified file count when single file & one option is given', () => {
    let actual = [{ fileName: 'file1.txt', counts: [ 10 ] }, { fileName: 'file2.txt', counts: [10] }];
    let expected = '\t10 file1.txt\n' +
      '\t10 file2.txt\n' +
      '\t20 total';
    assert.equal(multipleFileFormatter(actual), expected);
  });

  it('should return justified file count when single file & two option is given', () => {
    let actual = [{ fileName: 'file1.txt', counts: [ 10, 20 ] }, { fileName: 'file2.txt', counts: [10, 20] }];
    let expected = '\t10\t20 file1.txt\n' +
      '\t10\t20 file2.txt\n' +
      '\t20\t40 total';
    assert.equal(multipleFileFormatter(actual), expected);
  });

  it('should return justified file count when single file & three option is given', () => {
    let actual = [{ fileName: 'file1.txt', counts: [ 10, 20, 30 ] }, { fileName: 'file2.txt', counts: [10, 20, 30] }];
    let expected = '\t10\t20\t30 file1.txt\n' +
      '\t10\t20\t30 file2.txt\n' +
      '\t20\t40\t60 total';
    assert.equal(multipleFileFormatter(actual), expected);
  });
});
