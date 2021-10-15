/* --------------------------------------------------- */
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Andrew",
//   age: 22,
//   hobbies: ["Sports", "Coding"],
//   role: [2, "author"],
// };

// person.role.push("admin"); // error won't be present: EXCEPTION from the Tuple type
// // person.role[1] = 10; // error
// // person.role = [3, "something", "new"]; // error

// console.log(person.name);

// let favoriteActivities: string[];
// favoriteActivities = ["Sports", "Coding"];

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

/* --------------------------------------------------- */
// // by default it will be 1, 2, 3, ...
// enum Role {
//   ADMIN = "author",
//   READ_ONLY = 5,
//   AUTHOR = "AUTHOR",
// }

// const person = {
//   name: "Andrew",
//   age: 22,
//   hobbies: ["Sports", "Coding"],
//   role: Role.READ_ONLY,
// };

// console.log(person.role);
