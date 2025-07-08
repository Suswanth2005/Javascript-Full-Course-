//Anonymous :- which has no name

let anonymousFunction = function(){
    console.log("I am anonymous function");
}

anonymousFunction();
console.log(typeof anonymousFunction);

//don't
//we cannot use "var" when we use "var" the name will become variable;
// we cannot call the function before intializing

//exmaple:

// anonymousFunction();          it will give error

// let anonymousFunction = function(){
//     console.log("I am anonymous function");
// }


// we can also give name to function

//example

// let anonymousFunction1 = function namedFunction(){  
//     console.log("I am anonymous function");
// console.log(typeof namedFunction);  //it will give function as output

// }

// anonymousFunction();

// namedFunction();  // it will give me an error as function not defined;
//                         //namedFunction is an local function


const named = function(x,y){
    return x*y;
}
const result=named(2,3);
console.log(result);