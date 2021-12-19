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

test("sumFrom method", () => {
  // Basic tests with a single number
  expect(Mathly.sumFrom(20, 40)).toBe(60);

  // Basic tests with an array
  expect(Mathly.sumFrom([20, 40], 20)).toStrictEqual([40, 60]);

  // @ts-ignore Make sure it will not accept non-numbers
  expect(() => Mathly.sumFrom(1, "1")).toThrow(Error);
  // @ts-ignore
  expect(() => Mathly.sumFrom("1", 1)).toThrow(Error);
});

test("subtract method", () => {
  // Basic tests with two numbers
  expect(Mathly.subtract(20, 10)).toBe(20 - 10);

  // Basic tests with an array
  expect(Mathly.subtract([20, 20])).toBe(20 - 20);

  // Mixed tests with numbers and arrays of numbers
  expect(Mathly.subtract(2000, 1000, [200, 100])).toBe(700);

  // @ts-ignore Make sure it will not accept non-numbers
  expect(() => Mathly.subtract(1, "2")).toThrow(Error);
  // @ts-ignore
  expect(() => Mathly.subtract(1, 2, [1, "2"])).toThrow(Error);
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

test("multiplication by a number", () => {
  // Tests with a single multiplier
  expect(Mathly.multiplyBy(10, 0)).toBe(0);
  expect(Mathly.multiplyBy(10, 1)).toBe(10);
  expect(Mathly.multiplyBy(50, 2)).toBe(100);
  expect(Mathly.multiplyBy(34834, 45083)).toBe(1570421222);
  expect(Mathly.multiplyBy(0, 0)).toBe(0);

  // Tests with an array of numbers
  expect(Mathly.multiplyBy([0, 1], 1)).toStrictEqual([0, 1]);
  expect(Mathly.multiplyBy([50, 25], 4)).toStrictEqual([200, 100]);
  expect(Mathly.multiplyBy([234348, 69], 3478349)).toStrictEqual([
    815144131452, 240006081,
  ]);

  //@ts-ignore Make sure it will throw NaN errors
  expect(() => Mathly.multiplyBy("69", 1)).toThrow(Error);
  //@ts-ignore
  expect(() => Mathly.multiplyBy(1, "2")).toThrow(Error);
});

test("subtraction by a number", () => {
  // Tests with a single number
  expect(Mathly.subtractBy(10, 10)).toBe(0);
  expect(Mathly.subtractBy(10, 1)).toBe(9);
  expect(Mathly.subtractBy(1, 2)).toBe(-1);
  expect(Mathly.subtractBy(0, 0)).toBe(0);

  // Tests with an array
  expect(Mathly.subtractBy([0, 1], 0)).toStrictEqual([0, 1]);
  expect(Mathly.subtractBy([10, 25], 1)).toStrictEqual([9, 24]);
  expect(Mathly.subtractBy([5, 10], 15)).toStrictEqual([-10, -5]);

  //@ts-ignore Make sure it will throw NaN errors
  expect(() => Mathly.subtractBy("2", 1)).toThrow(Error);
  //@ts-ignore
  expect(() => Mathly.subtractBy(1, "2")).toThrow(Error);
});

test("sequential division", () => {
  // Test with a singile
  expect(Mathly.divide(4, 2)).toBe(2);
  expect(Mathly.divide(2, 4)).toBe(0.5);
  expect(Mathly.divide(100, 4)).toBe(25);

  // Tests with an array of numbers
  expect(Mathly.divide([10, 2], 1)).toBe(5);
  expect(Mathly.divide([75, 3])).toBe(25);
  expect(Mathly.divide([1000, 10], 10)).toBe(10);

  //@ts-ignore Make sure it will throw NaN errors
  expect(() => Mathly.divide("69", 1)).toThrow(Error);
  //@ts-ignore
  expect(() => Mathly.divide(1, ["3"])).toThrow(Error);
});

test("division by a single number", () => {
  // Test with a single divisor
  expect(Mathly.divideBy(30, 2)).toBe(15);
  expect(Mathly.divideBy(100, 4)).toBe(25);
  expect(Mathly.divideBy(75, 3)).toBe(25);

  // Tests with an array of numbers
  expect(Mathly.divideBy([75, 100], 25)).toStrictEqual([3, 4]);
  expect(Mathly.divideBy([100, 1000], 10)).toStrictEqual([10, 100]);

  //@ts-ignore Make sure it will throw NaN errors
  expect(() => Mathly.divideBy("69", 1)).toThrow(Error);
  //@ts-ignore
  expect(() => Mathly.divideBy(1, "2")).toThrow(Error);
});

test("sequential exponentiation", () => {
  // Test with two numbers (a**b)
  expect(Mathly.riseSeq(2, 2)).toBe(4);
  expect(Mathly.riseSeq(2, 3)).toBe(8);
  expect(Mathly.riseSeq(2, 0)).toBe(1);
  expect(Mathly.riseSeq(0, 0)).toBe(1);

  // Tests with an array of numbers
  expect(Mathly.riseSeq([2, 3])).toStrictEqual(8);

  // Test with many numbers in a mix
  expect(Mathly.riseSeq(2, [2, 2])).toStrictEqual(16);
  expect(Mathly.riseSeq(2, [2, 2], 2)).toStrictEqual(256);

  //@ts-ignore Make sure it will throw NaN errors
  expect(() => Mathly.riseSeq("1")).toThrow(Error);
  //@ts-ignore
  expect(() => Mathly.riseSeq(["1"])).toThrow(Error);
});

test("raise all to an exponent", () => {
  // Test with a single number
  expect(Mathly.riseTo(2, 2)).toBe(4);
  expect(Mathly.riseTo(0, 3)).toBe(0);
  expect(Mathly.riseTo(3, 0)).toBe(1);

  // Test with an array of numbers
  expect(Mathly.riseTo([2, 3], 2)).toStrictEqual([4, 9]);
  expect(Mathly.riseTo([0, 3], 2)).toStrictEqual([0, 9]);

  //@ts-ignore Make sure it will throw NaN errors
  expect(() => Mathly.riseTo("1", 1)).toThrow(Error);
  //@ts-ignore
  expect(() => Mathly.riseTo(["1"], 1)).toThrow(Error);
});
