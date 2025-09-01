//functions are used to reuse the same code

function printMessage(){
    console.log("Welcome to functions chapter");
}

printMessage();


//Parameters and Arguments

function printMessage1(a,b){
    console.log(a+b);
}

printMessage1(2,3);
printMessage1(3,4);
printMessage1(3);         //here i only entered one argument but javascript doesn't give any errors


//exercise


function add(min,max){
    let result=0;
    for(let i=min;i<=max;i++){
        result=i+result;
    }
    console.log(result);
}

add(1,10);
