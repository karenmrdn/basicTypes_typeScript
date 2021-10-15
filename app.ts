function add(n1: number, n2: number) {
  return n1 + n2;
}

// function with a type of void (returns nothing)
function printResult(num: number) {
  console.log("Result:", num);
}

printResult(add(5, 12));
