/* --------------------------------------------------- */
type Combinable = number | string;
type ResultCombinable = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ResultCombinable
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combinedAges = combine(12, 20, "as-number");
console.log(combinedAges);

const combinedTextAges = combine("12", "20", "as-number");
console.log(combinedTextAges);

const combinedNames = combine("Andrew", "Lara", "as-text");
console.log(combinedNames);
