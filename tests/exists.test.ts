import Mathly from "../src/index";

test("sum method", () => {
  // Basic tests with two numbers
  expect(Mathly.sum(20, 40)).toBe(60);
  expect(Mathly.sum(1000, 1000)).toBe(1000 + 1000);

  // Basic tests with an array
  expect(Mathly.sum([60, 20])).toBe(60 + 20);
  expect(Mathly.sum([50000, 50000])).toBe(50000 + 50000);

  // Mixed tests with numbers and arrays of numbers
  expect(Mathly.sum(100, 200, [1000, 20000])).toBe(21300);

  // @ts-ignore Make sure it will not accept non-numbers
  expect(Mathly.sum(1, "2")).toThrowError();
});
