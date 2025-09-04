// we can copy the object by refernce
 /**there are two types of copies
  * 1.shallow copy
  * 2.deep copy
  */

 /*shallow copy means if we copy the object using = operator both the objects point to the same memory address
    * so if we update one object the other object also gets updated
 */


 let person1 = {
    name:"Kishore",
    age:24
 }

 let person2 = person1;
//  console.log(person1);
//  console.log(person2);  //it is perfectly copied

    //lets update person2

    person2.name="suswanth";

 console.log(person1);
 console.log(person2);  // both persons got changed bcoz the copy and original object are pointing to the same memory address


//object.assign() method

let person3={
    name:"Ashish",
    age:30
}

let person4=Object.assign({},person3);   // it will create a new object and copy the properties of person3 to person4
// console.log(person3);
// console.log(person4);   // it is perfectly copied


//lets update person4
person4.name="Teja";
console.log(person3);
console.log(person4);   // here only person4 got updated bcoz both objects are pointing to different memory address


/*But object.assign() method is not a deep copy*/

//spread.assign() method works only for single type of data not for "nested types"

//example

let person5 ={
    name:"Ravi",
    age:26,
    address:{
        city:"Hyderabad",
        state:"Telangana"
    }
}

let person6 = Object.assign({},person5);
// console.log(person5);
// console.log(person6);   // it is perfectly copied


//but

person6.address.city="Mumbai";
console.log(person5);
console.log(person6);   // here both objects got updated bcoz the address is pointing to the same memory address

// but in the output the both adress will get upadted

