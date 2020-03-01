//const mark = require("../index");
const marks = require("../models/marks");

const testGrade = new marks();

test("testing the mark is a number", () => {
  expect(testGrade.isValidate()).toBe(false);
});

test("testing the grade mark", () => {
  expect(testGrade.computeGrade()).toBe(undefined);
});
