// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Andrew";
// // userName = userInput; // here will be error, if userInput is unknown, but if userInput is any, here won't be any error
// if (typeof userInput === "string") {
//   userName = userInput;
// } // with unknown we need extra type check to be able to assign unknown value to the value with the fixed type

// This function never produces a return value, so its type is never
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // OR
  // while (true) {}
}

const result = generateError("An error occurred", 500);
console.log(result); // undefined will not be shown in the console
