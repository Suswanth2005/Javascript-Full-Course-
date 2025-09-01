const userName = "Suswanth";
try{
    console.log(userName1);
}catch(error){     //when javascript encounters an error it returns error object, and that error object is passed to catch block as error parameter
    console.log("error occured");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
finally{
    console.log("finally executed");
}
console.log(userName);