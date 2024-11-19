//for of loops in (arrays and strings)

//purpose : It iterates over arrays and strings NOT objects.

let number = [1,2,3,4,5];
for(let i of number){//const or let here (line 13) is MUST ; 
// because it will take var by default
    console.log(i);
}
// for of loop is work only in string and arralet 

let str = "hello";
for(let i of str){
    console.log(i);
}