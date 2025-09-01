//user enters a number if nunmber is greater than 50 ask user to enter a small number

const variable = require("readline-sync");
const Number = variable.question("enter a number lessthan 50 ")
while(Number){
    if(Number<50){
        console.log(Number);
        break;
    }
    else{
        console.log("Enter the Number lessthan 50");
        break;
    }
    
    
}