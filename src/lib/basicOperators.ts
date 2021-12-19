import { testNaN } from "../util/testNaN";

export const BasicOperators = {
  /**
   * Get the collective sum of all the numbers provided.
   *
   * @param numbers - a number or an array of numbers
   * @returns {number} The sum of all the numbers provided
   */
  sum(...numbers: (number | number[])[]): number {
    let result = 0;
    let flatNumbers = numbers.flatMap((n) => n);

    testNaN(numbers);

    flatNumbers.map((n) => {
      if (typeof n == "number") return (result = result + n);
    });

    return result;
  },

  /**
   * Subtraction a set of numbers in sequence.
   * 
   * This method will take a single number or set of numbers and subtract them in sequence.
   * The result will be the difference of the first number minus the second number, minus the third number, etc.
   *
   * @param numbers - a number or an array of numbers
   * @returns {number} The subtraction of all the numbers provided
   */
  subtract(...numbers: (number | number[])[]): number {
    let flatNumbers = numbers.flatMap((n) => n);
    console.log(flatNumbers);
    testNaN(numbers);

    return flatNumbers.reduce((a, b) => a - b);
  },

  /**
   * Subtract a number from a set of numbers.
   * 
   * This method will take a single number or set of numbers and subtract the second argument.
   * The result will be a number or set of numbers that are the difference of the first number(s) minus the second argument.
   *
   * @param numbers - a number or an array of numbers
   * @returns {number} The subtraction of all the numbers provided
   */
  subtractBy(numbers: number | number[], sub: number): number | number[] {
    testNaN([numbers]);
    testNaN([sub]);

    if (typeof numbers == "number") return numbers - sub;
    else return numbers.map((n) => n - sub);
  },

  /**
   * Multiply a set of numbers in sequential order
   *
   * This method will take all the number provided and multiply them together.  In this method brackes
   * will act like parentheses where the numbers inside will be multiplied together before being executed.
   * This follows the order of PEMDAS.
   *
   * @param numbers - The numbers that you will be multiplying together
   * @returns {number} The product of the numbers provided
   */
  multiply(...numbers: (number | (number | number[]))[]): number {
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
  },

  /**
   * Multiply a number, or set of numbers by another number.
   *
   * If provided with with a single number, this method will take that number and multiply it by the
   * multiplier, if it is passed an object, it will multiply each number in that object by the multiplier
   * and return the updated object with all the values that have been multiplied.
   *
   * @param numbers - The number or numbers that you want multiplied
   * @param multiplier - The number your multiplying by.
   *
   * @returns {number | number[]} The resulting number or set of numbers
   */
  multiplyBy(
    numbers: number | number[],
    multiplier: number
  ): number | number[] {
    testNaN([numbers]);
    testNaN([multiplier]);

    if (typeof numbers == "number") return numbers * multiplier;
    else return numbers.map((n) => n * multiplier);
  },
};
