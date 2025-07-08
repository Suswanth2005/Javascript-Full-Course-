function returnFunction(x,y){
    return x+y;                       //we never use console.log in functions 
                                // why?? -> we cant store the value which is printed in the function for that reason we use return

    console.log("This message will not print")     //this message won't print

    // when the return executed it comes out of the function we cannot print or do anything after return function

//return keyword, return's the value to the function itself that's why we need to use console.log print the value;
    

}

console.log(returnFunction(2,3));  //generally it means "console.log("27")";  //"return" keyword returns the value to function

//we can store the value also

const result = returnFunction(5,6);
console.log(result);


/* Pure function: a function is said to be a pure function when the function accepts parameter, when it doesnt change the value of parameter
and returns the value;*/