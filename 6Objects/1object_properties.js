/*why we need objects?

we use objects to store multiple values in a single variable


The API's will send data in form of objects*/



//object lieteral

/**object -->  {key:value} */


let person={
    name:"Kishore",
    age:24,
    hobbies:["cricket","music"],              //keys can have array as value
//keys are always in string format
    1 : "one",
    //javascript implicitly converts keys which is "1" to string 

}

console.log(person);  //1 converted to string "1"


//to access the properties we have two ways

//dot notation

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

//bracket notation

console.log(person["name"]);  // in bracket notation the key should be in string format
console.log(person["hobbies"]);


// Reason for having two ways to access the properties

let twoways={
    "first name":"kishore",   //if key has space we have to use bracket notation
}


// console.log(twoways.first name); // it will give error

// In order to access above key we use bracket notation

console.log(twoways["first name"]);

//other way refer 3computed property.js
