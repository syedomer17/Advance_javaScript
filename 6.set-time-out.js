// set time out 
// set time out is a function
// setTimeout(()=>{
//     console.log("this meassage will print after 2 second");
// },3000);

// let us do it in function

// setTimeout(function(){
// function mult(a,b){
//     return a*b;
// }console.log(mult(2,3));
// },3000);

// setTimeout((){
//     let add = (l,b)=>{
//         return l*b;
//     }
//     console.log(add(12,13));
// },1000);

// setTimeout(()=>{
//     console.log("hi");
// },2000);

// function delayMassage(name,time){
//     return setTimeout(()=>
//    {
//     console.log(`hello ${name}! this message will print after ${time}`);
//    },time *1000 );

// }delayMassage("omer",4);

// function delay (name,time){
//     return setTimeout(()=>{
//         console.log(`hi ${name} this message will print after ${time}`)


//     },time*1000);
// }
// delay("omer",5);

function add(a,b){
    setTimeout(()=>{
        console.log(`the sum of ${a} and ${b} is:${a+b}`)
    },2000);
}
add(2,3);