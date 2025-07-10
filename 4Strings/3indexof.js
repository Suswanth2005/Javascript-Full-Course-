//indexof

let longMessage = "this is long message to test the indexof method in javascript"
let index = longMessage.indexOf("t");  // the inexof() method returns the index of the first occurrencd of the specified character
//if we want he index of other character
// we need to specifiy the starting index(where the search should start)

console.log(longMessage.indexOf("t",6))

console.log(index);


//check if the character is present in the string or not

//anonymous function
let namedFunction = function(text,character){
    if(text.includes(character))
        return `${character} is present in the string`;
    else
        return `${character} is not present in the string`;
}

let output = namedFunction("abhjeet",'a')
console.log(output);


//arrow function

const checkCharcter = (text1,char)=> text1.indexOf(char)=== -1 ? `${char} is not present in the string` : `${char} is present in the string`;

let output1 = checkCharcter("abhjeet7@gmail.com",'@');
console.log(output1);
