export let testNaN = (array: (number | number[])[]) => {
  let arr = array.flatMap((n) => n);

  arr.map((v) => {
    if (typeof v !== "number")
      throw new Error(`NaN Exception: Value '${v}' is not not a number...`);
  });
};
