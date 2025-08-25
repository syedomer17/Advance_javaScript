let array = [1,2,3,4];
let odd = array.filter((n)=> n%2===0);
console.log(odd);
let ch = odd.map((n)=> n*2);
console.log(ch);
let check = array.reduce((acc,curr)=> acc + curr,0);
console.log(check);