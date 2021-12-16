export default class Mathly {
  public static sum(...numbers: (number | number[])[]): number {
    let product = 0;

    numbers.map((n) => {
      if (typeof n == "number") return (product = product + n);
      if (typeof n == "object")
        n.map((dn) => {
          if (typeof dn == "number") product = product + dn;
          else
            throw new Error(
              `A Non-Number Value has been passed to sum method: ${dn}`
            );
        });
    });

    return product;
  }
}
