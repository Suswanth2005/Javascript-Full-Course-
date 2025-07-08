//  in javscript other than or an And opertaot there is another operator "Byll coalescing(??)"

// for Null coalescing the only falsy values are "null" and "undefined"

//Example

const a = 0;
console.log(a||1);  //here it will print 1 or operator thinks 0 as false values

// but

const b =0;
console.log(b ?? 1);

let c; //undefined
console.log(c ?? 0);

const d = 10;
console.log(10+(c ?? 9));




