const Variable = require("readline-sync");
const marksObtained = Variable.question("Enter the marks you have obtained");

const result = (marksObtained <100 && marksObtained>=90) ? "O grade" : (marksObtained <90 && marksObtained>=80 )? "A grade" :(marksObtained<79 && marksObtained >=70) ? "B grade": (marksObtained<69 && marksObtained>=40) ? "c grade":"failed";
console.log(result);