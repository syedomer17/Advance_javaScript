// set time out 

setTimeout(()=>{
    console.log("this meassage will print after 2 second");
},3000);

// let us do it in function

setTimeout(function(){
function mult(a,b){
    return a*b;
}console.log(mult(2,3));
},3000);

setTimeout(function(){
    let add = (l,b)=>{
        return l*b;
    }
    console.log(add(12,13));
},1000);