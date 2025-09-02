// sort method sorts the elements of an array in place and returns the sorted array.
// it sorts by checking UNICODE VALUE OF elements


let names = ['apples','oranges','bananas','grapes'];
names.sort();
console.log(names);     //here it sorts in alphabetical order

//but 

let names1 = ['apples','Oranges','bananas','grapes','ball'];
names1.sort();
console.log(names1);    //here first two letters are same in banana and ball but in third letter l comes first so ball comes first


let numbers = [5,3,8,1,4];
numbers.sort();
console.log(numbers);

//Drawback of sort method
let numbers1 = [15,3,8,1,4];
numbers1.sort();
console.log(numbers1);  //it gives wrong output because it checks first digit only so 15 comes before 3


//sort method converts numbers into string then checks its unicod evalue so 15 comes first rather than 3

//to avoid this we use compare function
let numbers2 = [15,3,8,1,4,65,72,90];

function sortinAscendingorder(a,b){
    return a-b;
}

numbers2.sort(sortinAscendingorder);
console.log(numbers2);  //now it gives correct output

