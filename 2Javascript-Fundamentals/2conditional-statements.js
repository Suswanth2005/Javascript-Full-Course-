const Variable = require("readline-sync");
const number = Number(Variable.question("Enter a number \n"));

if(number %3===0){
    console.log(`the entered number ${number} is divisible by 3`);

}
else{
    console.log("it is not divisible");
}



//else checks the above if condition

if(number %3==0){
    console.log("yes it is divisible by 3");
}
if(number %4 ==0){
    console.log("yes it is divisible by 4");
}
else{
    console.log("no it is not divisible by 4");  //else condition is printed because the if condition above else is false..
}