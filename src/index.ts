export default class Mathly {
  /**
   * Get the collective sum of all the numbers provided.
   *
   * @param numbers - a number or an array of numbers
   * @returns {number} - The sum of all the numbers provided
   */
  public static sum(...numbers: (number | number[])[]): number {
    let product = 0;

    let flatNumbers = numbers.flatMap((n) => n);

    flatNumbers.map((n) => {
      if (typeof n == "number") return (product = product + n);
      else
        throw new Error(
          `A Non-Number Value has been passed to sum method: ${n}`
        );
    });

    return product;
  }
}
