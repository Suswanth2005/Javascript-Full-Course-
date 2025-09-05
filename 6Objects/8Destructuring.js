// Destructring Object

let aboutMe ={
    name:"Kishore",
    age:24,
    address:{
        city:"Bangalore",
        state:"Karnataka"
    }
}

//Destructring

let {name,age} = aboutMe;  // it will create two variables name and age and assign the values of name and age properties of "aboutMe" object to them
console.log(name);     // it will print the name property of "aboutMe" object
console.log(age);

// if we change the value of name or age it will not affect the original object

// to destructure nested objects

// let{address} = aboutMe;
// console.log(address);   // it will print the address object

//Assume the above two lines of code is not there
// we was not destructured the address so below if we try to access the address object it will give error

let {address:{city,state}} = aboutMe;     
// console.log(address);                     // because we are trying to access the properties of address object directly
console.log(city);



// we can also change the key names while destructuring

let{name:userName, address:userAddress}= aboutMe;
console.log(userName);
console.log(userAddress);

// it will give an error if we try to acess the original key names
// console.log(name);   



//Example

let Company={
    Role:{
        Engineers:{
            employee1:{
                name1:"Kishore",
                age1:24,
                skills:["javascript","reactjs","nodejs"]
    
            },
            employee2:{
                name1:"Ashish",
                age1:30,
                skills:["java","springboot","hibernate"]
            }
        },
        Marketing:{
            employee1:{
                name1:"Teja",
                age1:26,
                skills:["seo","sem","contentwriting"]
            },
            employee2:{
                name1:"Ravi",
                age1:28,
                skills:["emailmarketing","affiliatemarketing","ppc"]
            },
        },
        socialmediaManager:{
            employee1:{
                name1:"Suswanth",
                age1:24,
                skills:["facebook","instagram","linkedin"]
            },
            employee2:{
                name1:"Sandeep",
                age1:27, 
                skills:["twitter","youtube","pinterest"]
            }
        }
    }
}

// now lets deconstruct
//let first i need the name of employee2 of enginners
let{Role:{Engineers:{employee2:{name1}}}}= Company;

console.log(name1);

//lets print socialmediaManager employee1 skills
let{Role:{socialmediaManager:{employee1:{skills}}}}=Company;
console.log(skills);

// / lets print all the Marketing employees

let{Role:{Marketing}}=Company;
console.log(Marketing);
