//includes checks whether a certain value present in the string or not

let availableSize = ['S','M','L','XL','XXL'];
const readlinesync = require("readline-sync");
let input = readlinesync.question("Enter the size you need: ");

let isAvailable = availableSize.includes(input.toUpperCase());

if(isAvailable){
    console.log("Sure Mam we have that Size");
}
else{
    console.log("Sorry Mam we don't have that size");
}

