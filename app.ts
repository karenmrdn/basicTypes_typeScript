let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Andrew";
// userName = userInput; // here will be error, if userInput is unknown, but if userInput is any, here won't be any error
if (typeof userInput === "string") {
  userName = userInput;
} // with unknown we need extra type check to be able to assign unknown value to the value with the fixed type
