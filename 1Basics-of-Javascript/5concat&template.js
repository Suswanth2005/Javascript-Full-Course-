//concatination

let userName = "Suswanth";
let age = "19";

let message = "Hi i am "+ userName+" and i am "+age+" years old";
console.log(message);


//Template literals

let firstName = "Suswanth";
let lastName = "Vempati";
let templateLiterals = `Hi my first name is ${firstName} and my last name is ${lastName}.`;
console.log(templateLiterals);

//We can write multi line in template literals but not in concatination(for that we have to use \n like that);

let aboutMe = `Hi my first name is ${firstName} and my last name is ${lastName}
               I am 19 years old
               I am currently studying in Lovely Professional University`;
console.log(aboutMe);