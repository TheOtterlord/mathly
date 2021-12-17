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
  expect(() => Mathly.sum(1, "2")).toThrow(Error);
  // @ts-ignore
  expect(() => Mathly.sum(1, 2, [1, "2"])).toThrow(Error);
});

test("sequential multiplication", () => {
  // Basic two number tests
  expect(Mathly.multiply(2, 2)).toBe(4);
  expect(Mathly.multiply(8573, 99485)).toBe(852884905);

  // Basic tests with an array
  expect(Mathly.multiply([3, 3])).toBe(9);
  expect(Mathly.multiply(2, 2, [2, 2])).toBe(16);

  // One
  expect(Mathly.multiply(1, 1, [1, 1, 1], 1, 1, [1, 1, 1])).toBe(1);

  // @ts-ignore Make sure it will throw NaN errors
  expect(() => Mathly.multiply(1, "1")).toThrow(Error);
  //@ts-ignore
  expect(() => Mathly.multiply(1, ["1"])).toThrow(Error);
});
