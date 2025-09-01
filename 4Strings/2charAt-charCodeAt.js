//charAt()
//charAt() method "returns" a value so we can assign to any variable

let message ="find the Charcater";
let index = 9;
console.log(message.charAt(index));
let character = message.charAt(index); //prints the character at the specified index

console.log(character); //prints the character at index 8


let index1 = 100;

console.log(message.charAt(index1)); //it doesnot throw any error, instead it returns empty string



try{
    console.log(message.charAt(index1));
}catch(error){
    console.log("Error occured: Character index out of bonds");
}


//charCodeAt() it prints the ASCII value of character

let vowels = "aeiou";
console.log(vowels.charCodeAt(0));

for(let i=0;i<vowels.length;i++){
    console.log(`The ASCII value of character ${vowels.charAt(i)} is ${vowels.charCodeAt(i)}`);
}

// String.fromCharCode() method returns the character corresponding to the specified ASCII value4


for(let i=97;i<=122;i++){
    console.log(`The character corresponding to the ASCII value is ${String.fromCharCode(i)}`);
}

for(let i=65;i<=90;i++){
    console.log(`The charcters are ${String.charAt(i)}`);
}

//here we cannot use the charAt() method because it is not static it is an instance method it cnnot be used directly it can be used with help of 
// string   example String.charAt();  but the string need to be defined


// But String.fromCharCode() is a static method it can be used directly with String
// example String.fromCharCode();



