// set interval 

// this is use for when you want to repeate or print any 
// anything repeatedly

// setInterval(() => {
//     console.log("this masssage will print after 2 sec repetedly");
// },1000);

setInterval(() => {
    let divid = (a,b)=>{
        return a/b;
    }
    console.log(divid(12,10));
}, 20000);