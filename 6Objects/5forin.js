// we can use "in" operator to iterate over the properties of object

const obj={
    name:"Kishore",
    age:24
}

const isAvailable = "name" in obj;    //in returns true or false
console.log(isAvailable);

const isAvailable1 = "height" in obj;
console.log(isAvailable1);             // since height is not a key in ibj it returns false


// we can use "for in "loop to iterate over the objects

for(let key in obj){
    console.log(key);    // it will print the keys of object

    // to the values

    console.log(obj[key]);   // to access the values we have to use bracket notation
    console.log(key,obj[key]);
}
