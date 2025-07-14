//charAt()

let message ="find the Charcater";
let index = 9;
let character = message.charAt(index); //prints the character at the specified index

console.log(character); //prints the character at index 8


//charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

let names = "jonathan";
console.log(names.charCodeAt(1));  //it will print the unicode value of the character at index 1

for(let i=0;i<names.length;i++){     //here name variable is string so we use charCodeAt()(method used only for strings not for numbers)
                                     //for numbers we use String.fromCharCode() method refrer below
    console.log(names.charCodeAt(i));
}

//String.fromCharCode() method returns a string created by using the specified sequence of UTF-16 code units.

for(let i=97;i<=122;i++){
    console.log(String.fromCharCode(i));
}
for(let i=65;i<=90;i++){
    console.log(String.fromCharCode(i));
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


let message4 = "Find the charcater";
let search = "find";
if(message4.toLowerCase().includes(search)){
    console.log(true);
}
else{
    console.log(false);
}

//using function

let display = (message1,search1)=> message1.includes(search1) ? true : false;

console.log(display("find the character","charcter"));


//lets find vowels

let sentence = "find the Vowels ";
let vowel="aeiou";

let function1 = (sentence,vowel)=>{
    for(let char of sentence){
        if(vowel.toLowerCase().includes(char.toLowerCase())){
        return "vowels are present in this string";
    }
     
    }
    return "vowels are not present in this string";
}


let output4 = function1(sentence,vowels);
console.log(output4);




