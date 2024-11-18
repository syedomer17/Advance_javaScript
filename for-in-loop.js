// for in loop (only objects)

let object ={
    fName:"Syed Omer",
    lName:"Ali",
    age:17
}
for(let i in object){
    console.log(i);// it only print the key not the value
}
for(let i in object){
    console.log(i,object[i]);// this will print the keys
    // and also the values of it
}