//pop used to delete the last element of array

let names =["kishore","Pavan","Siddhu","Ravi"];
let updated = names.pop();
console.log(names); //it will remove the last element of array

console.log(updated);
/*pop will update the original array and also it will return the removed element*/


//Slice method is used to extract a portion of an array into a new array object
/*slice will not update the original array it create shallow copy of an array*/

let fruits = ["apple","mango","banana","grapes","orange","kiwi"];
let  removed = fruits.slice(1,4);//it will extract from index 1 to index 4 but not including index 4
console.log(removed);
console.log(fruits); //original array will not be changed


//Example 
let userName ="prakash";
//let convert first letter to uppercase and remaining to lowercase

let updateName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
console.log(updateName);



//Splice method is used to add or remove elements from an array
/*it will update the original array*/


/*splice(index,No.of elements,"new element");*/

let cars = ["BMW","Audi","Mercedes","Tata","Hyundai"];

let removedCars= cars.splice(1,2);    //here two elements will be removed from index 1   
console.log(cars);
let cars1 = ["BMW","Audi","Mercedes","Tata","Hyundai"];

let updatedCars = cars1.splice(2,1,"Ferarri"); // here one element is removed at index 2 and added "Ferarri" at index 2
console.log(updatedCars); //it will return the removed element
console.log(cars1);