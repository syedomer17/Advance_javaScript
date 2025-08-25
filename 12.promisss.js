/*
in js promises are a prowerful way to handle asynchronous operations they 
represent a value that may be available now or in te future or never promises
help manage asynchrous code more effectively than traditionail callbaclks 
,avoiding "callback hell".
*/
// how promises work 

/*
a promise is an object with three possible states
1.pending:operation is ongoing and has not yet completed
2. fulfuliied:the operation comleted successfully and the promise has a value
3. rejected:operation failed and the promise has a reasen or error
*/

// function checkEvenOdd(number){
//     return new Promise ((resolve,reject)=>{
//         if(number%2===0){
//             resolve(`${number} is even`);
//         }else{
//             reject(`${number} is odd`);
//         }
//     });
// }

// checkEvenOdd(4)
// .then((message)=>{
//     console.log("succesful:",message);
// })
// .catch((error)=>{
//     console.log("error:",error);
// });

// function verifyAge(age){
//     return new Promise((resolve,reject)=>{
//         if(age>=18){
//             resolve("you are eligible to vote");
//         }else{
//             reject("you are not eligible to vote");
//         }
//     });
// }

// verifyAge(20)
// .then((message)=>console.log("success:", message))
// .catch((error)=>console.log("error:",error));

// function myage(me)
// {
//     if(myage>=18){
//         return"you can vote";
//     }else{
//         return "you can't vote";
//     }
// }
// console.log(myage(23));

// function checkStock(product){
//     return new Promise((resolve,reject)=>{
//         console.log(`checking stock for ${product}...`);
//         setTimeout(()=>{
//             if(product === "laptop"){
//                 resolve(`${product} is available`);
//             }else{
//                 reject(`${product} is out of stock`);
//             }
//         },2000);
//     });
// }

// checkStock("laptop")
// .then((meassage)=>console.log("success:",meassage))
// .catch((error)=>console.log("error:",error));

function checkstock(product) {
    return new Promise((resolve, reject) => {
        console.log(`checking stock for ${product}...`);
        setTimeout(() => {
            const warehouseAvailable = true;
            if (warehouseAvailable) {
                resolve(`${product} is available in the warehouse`);
            } else {
                reject(`${product} is not available in the warehouse`);
            }
        }, 1000);
    });
}

function shiptostore(product) {
    return new Promise((resolve, reject) => {
        console.log(`shipping ${product} to the store...`);
        setTimeout(() => {
            let shipToStore = true;
            if (shipToStore) {
                resolve(`${product} has been shipped`);
            } else {
                reject(`${product} could not be shipped`);
            }
        }, 2000);
    });
}

checkstock("laptop")
    .then((message) => {
        console.log("success:", message);
        return checkstock("laptop");
    })
    .then((message) => {
        console.log("success:", message);
        return shiptostore("laptop");
    })
    .then((message) => {
        console.log("success:", message);
        console.log("process complete: your product is ready for pickup");
    })
    .catch((error) => {
        console.log("error:", error);
        console.log("process terminated: unable to proceed further");
    });
