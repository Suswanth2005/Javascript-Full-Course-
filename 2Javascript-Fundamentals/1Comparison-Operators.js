// console.log(2>3); 

// console.log("2">3);  //false, here ">" operator converts stirng to number

// console.log("01"==1);//true

// console.log("01"===1); //false  because "===" operator doesnot converts string to number

// console.log("mango">"apple"); //true, Javscript checks the ASCII value of first letter in both the strings  ASCII of m =109, ASCII of a = 97 
//                                  //109>97  so true;
// //to check AscII Value
// console.log("m".charCodeAt(0));  

// console.log("mango"=="mango");

// console.log("glow">="glows");


// //NULL UNDEFINED

// console.log(null>undefined); //null → converted to 0

//                             //undefined → converted to NaN

// console.log(null==undefined); //true;

// console.log(null===undefined);//false 

// console.log(null==0); //for == operators null value is null it wont change;

// console.log(null>1);//false  //here ">" operator converts null to zero;


// console.log(undefined<0);


console.log("a">5);  //false  because  javascript cannot change the alphabets into numbers when comparing to a number "a"-->Nan  and 5 is number