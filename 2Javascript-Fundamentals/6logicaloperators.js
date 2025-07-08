//OR operator

//false values : "",null,0


const firstName = "Suswanth";
const lastName="Vempati";

//OR operator prints the true value

const userName = firstName || lastName  //"short circuting"
console.log(`Name - ${userName}`);


const firstName1 = "";
const lastName1 = "vempati";
const userName1 = firstName1 || lastName1  //Here firstName1 was empty(which is false) and second name was initialized(which is true) it will print that
console.log(`Name - ${userName1}`);


const firstName2 = "";
const lastName2 = "";
const userName2 = firstName2 || lastName2  //since both values are empty it will print nothing
console.log(`Name-${userName2}`);




const firstName3 = null;
const lastName3 = undefined;
const userName3 = firstName3||lastName3;  // if both the values are false it prints the last false value
console.log(`Name-${userName3}`);




const firstName4 ="";
const lastname4 = "";                             
const userName4 = firstName4 || lastname4 || "Fill the required field"; // we can also add description
console.log(userName4); 


let a = 12;
let b;
console.log(a+(b||5));   // since b is undefined we use or operator saying(if base is false take 5);
