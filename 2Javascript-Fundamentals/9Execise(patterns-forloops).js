
//"Repeat" Keyword is used to repeat the values;

//Example

// const a = "suswanth ";
// console.log(a.repeat(3))

// *
// * *
// * * *
// * * * *
// * * * * *
let symbol = "* ";
for(let i=1;i<6;i++){
    console.log(symbol.repeat(i));
}

//Reverse

for(let i=5;i>=0;i--){
    console.log(symbol.repeat(i))
}

//count characters

let string = "suswanth vempati"
let count=0;
for(let i=0;i<string.length;i++){
    if(string[i]===" "){
        continue;
    }
    count++;
}
console.log(count);

//even numbers from 1-100

for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}


// "includes"

let h = "JavaScript"
let vowels = "aeiou";

for(let i=0;i<h.length;i++){
    if(vowels.includes(h[i])){
        console.log(h[i]);
    }
}