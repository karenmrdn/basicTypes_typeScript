function add(n1: number, n2: number) {
  return n1 + n2;
}

// function with a type of void (returns nothing)
function printResult(num: number) {
  console.log("Result:", num);
}

// callback functions can return something, even if the argument on which they're passed does NOT expect a returned value
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // error
// combineValues = 5; // error

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return true; // callback functions can return something, even if the argument on which they're passed does NOT expect a returned value
});
