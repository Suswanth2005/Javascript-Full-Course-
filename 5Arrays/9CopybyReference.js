let arr1 = [1,2,3,4];
let arr2 = arr1;   //here arr2 copy the elemnts of arr1
console.log("Array1-",arr1);
console.log("Array2-",arr2);  


//but drwaback over here is:
//lets update arr2

arr2.push(5);  //here we updated arr2 but arr1 also will gets updated

console.log("Updated array1-",arr1);      
console.log("updated array2-",arr2);

//lets assume arr1 is refering to memory adress abcd
//viceversa arr2 also will refers to the same memory address so this is the reason the both arrays gets updated

/*To overcome this we have two methods one using for loop and using spread Method*/


//Spred method

let arr3 = [...arr1];
console.log("Array1-",arr1);
console.log("Array3-",arr3);  //it will print both same

//lets update

arr3.push(6);

console.log("Updated array1-",arr1);      
console.log("updated array3-",arr3);  //here only arr3 got updated




/** using for loop */

let arr4 =[];
for(let numbers of arr1){
     arr4.push(numbers);
}

console.log("Array4-",arr4);


arr4.push(6);

console.log("Updated array1-",arr1);      
console.log("updated array4-",arr4);


