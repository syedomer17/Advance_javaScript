// Destructuring 
// it only works in Arrays and objects only 

// In Array 
let Array1 = ["hello","i","am","omer"];
let [first,second,third,fourth]=Array1
console.log(first,second,third,fourth);

// In object 

let person = {
    fName:"Syed Omer",
    lName:"Ali",
    Age:17
}
let{lName,Age,fName}=person;
console.log(fName,lName,Age);
