
let readlinesync = require("readline-sync");
// let key = readlinesync.question("Enter the key which you want to add in object: ");

let key1 = readlinesync.question("Enter the key to access the value(name/age/height):");


let obj={
    name:"Kishore",


}

obj.age = 20;
obj.height=5.11;
// obj[key]="suswanth";   // we can add new key value pair in object using bracket notation
console.log(obj[key1]);
