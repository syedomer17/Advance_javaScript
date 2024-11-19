// set interval 

// this is use for when you want to repeate or print any 
// anything repeatedly

// setInterval(() => {
//     console.log("this masssage will print after 2 sec repetedly");
// },1000);

// 

// set interval 
/*
purpose: executes a function  repeatedly at specfied interval
*/

// setInterval(() => {
//     console.log("hello omer");
// }, 1000);

let timeout = setInterval(() => {
    console.log("hi");
}, 1000);

setTimeout(() => {
    clearInterval(timeout);
}, 5000);