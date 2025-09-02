//Destructring Array

// it is used to unpack values from arrays or properties from objects into distinct variables

let numbers=[1,2,3,4,5,6,7];
let [a,b,c]= numbers;
console.log(a);
console.log(b);
console.log(c);     //here elements are unpacked into different variables

// we can also skip elements while destructing

let [d,,e,,f] = numbers;
console.log(d);
console.log(e);
console.log(f);     //here second and fourth elements are skipped


let combinedArray = [['html','css','javascript'],1,2,3,4];

let [courses,x,y]= combinedArray;
console.log(courses);
console.log(x);
console.log(y);    //here first element is array and other two are numbers



// If we want to acess rst as single array we use rest operator(...)

let [courses1,...rest]=combinedArray;
console.log(rest);   //it will give all remaining elements as array

let[courses2,t,...arr]= combinedArray




console.log(...rest); //it will give all remaining elements as individual elements



// we can do it for swapping numbers also

let s=10;
let h=5;

[s,h]=[h,s];

console.log(s);
console.log(h);
