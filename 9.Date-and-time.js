// date and time 
// javascript provide a built in data object to handle date and time operations


// 1. creating a date object 

let currentime = new Date();
console.log(currentime)
// it is in UTC time zone 
// t mean time 

// Dates methods
// const date = new Date();

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.toISOString());

// // javascript Epoch time 
// /*
// Epoch time (or unix timestamp)represent the  number of millisecond s
// that have elapsed since january 1,1970,00:00:00 UTC.commonly referred to as
// the unix epoch.

// */

// let a = new Date ();
// console.log(a);
// let b = new Date(1731994561922);
// console.log(b);
// let c =new Date("2024-11-19");
// console.log(c);
// let d = new Date(2023,1,11,11,20,23,20);
// console.log(d);

// // convert Date into Millisecond 

// console.log(Date.parse(new Date()));

// let ist =  new Date().toLocaleString("en-IN",{timeZone: "Asia/Kolkata",});
// console.log(ist);

let date = new Date().toLocaleString("en-US",{
    timeZone:"Asia/Kolkata",
    month:"long",
    day:"2-digit",
    year:"numeric",
    weekday:"short",
    hour:"2-digit",
    minute:"numeric",
    second:"2-digit",
    dayPeriod:"long"
})
console.log(date);

