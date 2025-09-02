
// we can reverse a string without loop by using split and join method
//we can use for palindrome examples


//split

//split() methos used to convert string to array or charcter array

let string = "suswanth";
string.split("");
console.log(string); //it will give string only because string is immutable

let stringArray = string.split("");
console.log(stringArray); //it will give array of characters


/**reverse 

let reversedArray = string.reverse();
console.log(reversedArray); //it will give error because string is immutable and reverse method is not applicable on string*/

let reversedArray = stringArray.reverse();
console.log(reversedArray); //it will give reversed array of characters



/**join */

//join method used to convert array to sting

let joinedString = stringArray.join("");
console.log(joinedString); //it will give string by joining all characters of array

