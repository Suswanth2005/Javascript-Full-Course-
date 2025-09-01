let message = "Find the charcater";
let search = "find";
if(message.toLowerCase().includes(search)){
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
let vowels="aeiou";

let function1 = (sentence,vowels)=>{
    for(let char of sentence){
        if(vowels.toLowerCase().includes(char.toLowerCase())){
        return "vowels are present in this string";
    }
     
    }
    return "vowels are not present in this string";
}


let output = function1(sentence,vowels);
console.log(output);


let find = "find";
let search1 ="Find";

console.log(find.includes(search1));  // prints false because . includes is case sensitive