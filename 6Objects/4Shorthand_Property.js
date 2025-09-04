//shorthand property

function getObj(name,age){
    return{
        name:name,
        age:age                      // This is generally how we write
    }
}

const obj = getObj("Kishore",24);
console.log(obj);


//if key and value are same we can write in shorthand property


function getObj1(name,age){
    return{
        name,
        age
    }
}
const obj1 = getObj1("Kishore",24);
console.log(obj1);


// we can also do in other ways

const student ="ashish";
const age="27";

console.log({student,age});
