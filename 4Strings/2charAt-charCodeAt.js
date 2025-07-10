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



