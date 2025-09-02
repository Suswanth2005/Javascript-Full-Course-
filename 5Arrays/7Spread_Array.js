//spread array

//spread operator is used to expand array elemnts

let arr1 = ['1','2','3','4'];
console.log(...arr1);


//by using spread we can also concat and add elemnts into array without changing the original array

let arr2 =['5','6','7','8'];

let arr3 =[...arr1,...arr2];
let arr4=[...arr1,'a','b',...arr2,'9','10'];
console.log(arr3);
console.log(arr4);



//we can also change string to array by using spred operator

let string="hello suswnath";
let stringArray = [...string];
console.log(stringArray);
