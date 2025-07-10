//charAt()

let message ="find the Charcater";
let index = 9;
let character = message.charAt(index); //prints the character at the specified index

console.log(character); //prints the character at index 8


//charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

let names = "jonathan";
console.log(names.charCodeAt(1));  //it will print the unicode value of the character at index 1

for(let i=0;i<names.length;i++){
    console.log(names.charCodeAt(i));
}


//includes() method checks if a string contains a specific character or substring.

let message1 ="Find the vowels in this string";
let finalString = ""
let vowels = "aeiou";
for(let i=0;i<message.length;i++){
    if(vowels.includes(message[i].toLowerCase())){
        finalString+=message[i];
    }
}
console.log(finalString);


//indexof

let longMessage = "this is long message to test the indexof method in javascript"
let index2 = longMessage.indexOf("t");  // the inexof() method returns the index of the first occurrencd of the specified character
//if we want he index of other character
// we need to specifiy the starting index(where the search should start)

console.log(longMessage.indexOf("t",6))

console.log(index2);

