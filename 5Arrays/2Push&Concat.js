//push
//Arrays are Mutable

let fruits = ["apple","mango","banana"];
console.log(fruits);


//push method is used to add elements at the end of the array
fruits.push("orange");
fruits.push("apple","kiwi");
console.log(fruits); //it will add orange,apple, kiwi at the end of the array

/*concatination*/

//concatination : combining two or more arrays

let arr =[1,2,3];
let arr1 = [4,5,6];
let arr2=[7,8,9];

let final = arr.concat(arr1,arr2); //arr will concat with arr1 first then arr2 (it will done in order)
console.log(final);

let final1 = arr.concat(arr2,arr1); //here arr2 will first concat with arr then arr1
console.log(final1);

//original arrays will not be changed

let final2 = arr.concat(arr1,arr1); // it can concat same array multiple times
console.log(final2);
