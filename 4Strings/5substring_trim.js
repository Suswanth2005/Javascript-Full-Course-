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


