//how to write
//const variable = require("readline-sync");
// const variable1 = variable.question("text");

const userData = require("readline-sync");
const data=userData.question("What is your name \n");
console.log(`Welcome "${data}"`);

const age = userData.question("Enter your Age\n");
console.log(`your age is ${age}`);

const birthYear = 2025-age;
console.log(birthYear);

const bydefault = 2025+age;
console.log(bydefault);             //in terminal the output will be printed by "concatinating" both 2025 and age
                                     // in readlinesync the text we enter in terminal by default "String" we have to typecaste the datatype

const casting = 2025+Number(age);
console.log(casting);
