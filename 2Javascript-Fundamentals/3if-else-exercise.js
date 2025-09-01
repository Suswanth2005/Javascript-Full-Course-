//take 3 strings input from user print the smallest one

const variable = require("readline-sync");
const string1 = variable.question("Enter the first string\n");
const string2 = variable.question("enter the second string\n");
const string3 = variable.question("Enteer the third string\n");

if(string1.length<string2.length){
    if(string1.length<string3.length){
        console.log(`string1 ${string1} is  smallest string among three`);
    }
    else{
        console.log(`string3 ${string3} is smallest string among three`);
    }
}
else if(string2.length<string1.length){
    if(string2.length<string3.length){
    console.log(`string2 ${string2} is smallest string among 3`);
    }
    else{
        console.log(`string3 ${string3} is smallest string among 3`);
    }
}

else{
    console.log("check the entered strings");
}


// we can use "&&" operator