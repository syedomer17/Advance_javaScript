//json
// javascript object notation is a lightweight data interchang format 
// it is easy for humans to read and write and ease for machines to parse 
// and generate it is widely used to transmit data between a server and
// a web application or within various programming environments

/*
1. lightweight
2.human readable
3.language independent : through derived from js json is supported by many languages
4.structured:json allows hierarchicl data structure like array and object
*/

// json syntax 
// {"name":"omer","age":17}

// key are always in doubles quotes

/*
string:"hello"
number :14
object : ["key":"value"]
array :[1,2,3]
boolean:true or false
null:null
*/
// why use Json
/*
1.interoperablity : Json is used to transfer data between a server and client
2. apls:most moderb=n APLs returns data in Json format
3.Lightweight:Json is compact making it faster to transimit 
4. ease of use : many libraries in various programmin language make handling Json
*/

/*
key methods :
Json.stringify(object): converts a js object into a Json string
Json.parse(string):converts a Json string into a js object
*/

let person = {
    name: "syed omer ali",
    age: 17,
    isAlive: true,
    number: 9701889473
}
let check = JSON.stringify(person);
console.log(typeof check, check);

let parsedobj = JSON.parse(check);
console.log(typeof parsedobj, parsedobj);