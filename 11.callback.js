/*
in js a callback is a function that is passed as an argument to another function
and its executed after some operation is completed.callback are a key cpncept
in js and are often used for handling asynchronous operations like API calls
fill reading or event handling
*/

// Asynchronous code 
/*
1.setTimeout and setInterval 
2.HTTP Requests
3.promises
4.file system 
// they don't follow 
*/
// function prepereingreading(callback) {
//     console.log("ready");
//     console.log("read to bake");
//     callback()
// }
// function bakecake(callback) {
//     console.log("let's bake");
//     console.log("cake is bake");
//     callback()
// }
// function decoration(callback) {
//     console.log("let decorate the cake");
//     console.log("we have almost there");

// }

// prepereingreading(() => {
//     bakecake(() => {
//         decoration(() => {

//         })
//     })
// })

function weakup(next){
    console.log("weakup");
    console.log("be reay");
    next();
}
function breakfast(next){
    console.log("done with breakfast");
    next();
}
function ready(next){
    console.log("i am ready to go");
    next();
}
function driving(){
    console.log("deiving");
    console.log("arrived to cfi");
}
weakup(()=>{
    breakfast(()=>{
        ready(()=>{
            driving(()=>{

            })
        })
    })
})
// a function calling the same function inside it is called recursion
// where a function calling another function via parameter is called callback
