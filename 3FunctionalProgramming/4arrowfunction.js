const Sum = (x,y)=>{
    return x+y;  //this is an arrow function
}

const output=Sum(2,3);
console.log(output);


// in arrow function there is no need to use "return" keyword if we have only one line of code

//example

const calculateSum = (x,y)=> x+y;

const Output1 = calculateSum(6,7);
console.log(Output1);


// we can also do comparison

const greater = (x,y)=>{
    if(x>y){
        return x+y;
    }
    else{
        return x-y;
    }
}

const output2 = greater(90,9);
console.log(output2);


//ternary operator
const ternary = (x,y)=> x>y ? x+y : x-y

const output3 = ternary(10,20);
console.log(output3);
