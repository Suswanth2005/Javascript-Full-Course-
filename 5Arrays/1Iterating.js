//Arrays are used to store multiple values in a single variable.

let fruits = ["apple","mango","banana","grapes"];
console.log(fruits);

let names = ["Kishore","Suswanth","Ravi","Rakesh","Hari","Lohith","Ganesh","Venkatesh"]
for(let i=0;i<10;i++){
    console.log(names[i]);  //it will print "undefined" for the index which is not present in the array
}

//To print the exact number elements we use length property

for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

/** for let of */

//for let of is used to iterate over the elements of an array without the length function

for(let name of names){
    console.log(name);
}



/**for let in */

//for let in prints the indexes of elements of an array

for(let index in names){
    console.log(index);
}
