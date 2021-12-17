import { testNaN } from "../util/testNaN";

export default class BasicOperators {
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

  /**
   * Multiply a set of numbers in sequential order
   *
   * This method will take all the number provided and multiply them together.  In this method brackes
   * will act like parentheses where the numbers inside will be multiplied together before being executed.
   * This follows the order of PEMDAS.
   *
   * @param numbers - The numbers that you will be multiplying together
   * @returns {number} - The product of the numbers provided
   */
  public static multiply(...numbers: (number | (number | number[]))[]): number {
    let product: number = 0;
    let arrFinal: number[] = [];
    let calculationStarted = false;

    testNaN(numbers);

    numbers.map((n) => {
      if (typeof n == "number") return arrFinal.push(n);
      if (n instanceof Array)
        return arrFinal.push(BasicOperators.multiply(...n));
    });

    arrFinal.map((n) => {
      if (product == 0 && !calculationStarted) product = n;
      if (!calculationStarted) return (calculationStarted = true);
      return (product = product * n);
    });

    return product;
  }
}
