// we can store functions in objects

//example

//we can write function in two ways

// we cannot write functions as arrow function

let obj ={
    name: "kishore",

    greetMessage : function (){
        console.log("Hello welcome Kishore")

    }
}


console.log(obj);
//to access
obj.greetMessage();



//other way

let obj1 = {
    // function bye(){
    //     console.log("You Loggedout");   // this will gives you an "syntax error"
    // }
  
    //correct method
    bye(){
        console.log("You LoggedOut");
    }
}

obj1.bye();
