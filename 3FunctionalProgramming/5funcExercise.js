//sum of all numbers from n to m

const sumOfRange = (n, m) => {
    let sum =0;
    for(let i=n;i<=m;i++){
        sum=sum+i;
    }
    return sum;
}

const result = sumOfRange(1, 20);
console.log(result); 