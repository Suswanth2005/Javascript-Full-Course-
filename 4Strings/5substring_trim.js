//subString

let name1 = "abhjeet singh";
let output = name1.substring(0,7); 
//substring(startIndex, endIndex) method returns the part of the string between the specified start and end indexes

console.log(output);


//trim()

//trim() method removes whitespace from both ends of a string
let name2 ="                 Hello abhjeet singh              ";

console.log(name2);

console.log(name2.substring(0,6)); //  it will print starting 0-->6 which is space

console.log(name2.trim());

console.log(name2.trim().substring(0,6)); //it will print starting 0-->6 which is "Hello" without space



//slice function

//slice: Allows negative indices, counting from the end of the string.

let name3 = "prakash sakari kumar";
let output2 = name3.slice(0,7);
console.log(output2); //prints "prakash"

//we can use negative values

let output3 = name3.trim().slice(-13,-7);
console.log(output3); //prints "sakari kumar" (last 10 characters)

let output4 = name3.slice(-13,15);
console.log(output4); //prints "sakari" (from -13 to 7, which is "sakari")

