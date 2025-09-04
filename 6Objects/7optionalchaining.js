let obj={
    name:"Kishore",
    age:24,
    address:{  
        city:"Bangalore",
        // state:"Karnataka"
    }
}
//if we try to access a property which is not present in the object it will return undefined
console.log(obj.address.city);  //Bangalore
console.log(obj.address.country);  //undefined

//if we try to access the property of undefined it will give syou error
// console.log(obj.address.country.name);   //since obj.address.country is undefined we accessing undefined.name will give you error

// to avoid this error we can use optional chaining operator "?."

console.log(obj.address?.state);

console.log(obj.address.country?.place);  // it will return undefined instead of giving error


// we can do it for functions also


let obj1={
    name:"Kishore",
    age:24, 
    greet: function(){
        console.log("Hello welcome Kishore");
    }
}

obj1.greet();  // Hello welcome Kishore4

obj1.bye(); // it will give you error since bye function is not present in obj1

obj1.bue?.();  // it will return undefined instead of giving error



