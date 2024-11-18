// try catch block 
// syntax of it 

try {
    let Name = "syed omer ali";
    console.log(Names)
} catch (error) {
    console.log("an error occur:",error.message );
}
// this try catch block is made for your own sentence of 
// error 
// try catch block works for only missspell and in assing
// the vales 

// this try catch block are most usefull for every code in 
// javascript a pro developer use try catch block as
// the example

// simple function
// function Areaofrectangal(l,b){
//     try {
//         return l*b;
//     } catch (error) {
//        console.log("error is occur:",error.message); 
//     }
// }
console.log(Areaofrectangal(5,3));

// arrow function 
let areaofrectangal(l,b) => {
    try {
        return l*b;
    } catch (error) {
        console.log("error occur:",error.message);
    }
};
console.log(areaofrectangal(12,12));