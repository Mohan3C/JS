// const { readFileSync } = require("node:fs");

// console.log("Learning JS — no excuses");
// console.log('Hello');

// const name = "chaman";
// const age = 25;

// let number = 1;

// if (number == 1) {
//     for (let i = 1; i <= 5; i++){
//         console.log(i);
//     }
// }
// else if (number == 2) {
//     for (let i = 5; i > 0; i--){
//         console.log(i);
//     }
// }
// else {
//     console.log(age);
// }

// while(number<=10){
//     console.log(`while loop Number is: ${number}`);
//     number++;
// }

// function try1(a,b){
//     a = a;
//     b = b;

//     console.log("try1: " +(a + b));
    
// }

// try1(5, 3)

// function hello() {
//     let a = 4;
//     let b = 5;
//     let c = a + b;
//     console.log(c);
// }


// const hi = () => { let a = 5; let b = 5; let c = a + b; console.log(c); } // for testing 

// // const a = () => {return (b,c) }

// hi()

// // a()

// function process(callback) {
//   callback();
// }

// process(function() {
//   console.log("Task done");
// });

// const Why = {
//     name: "mohan",
//     greet: function () {
//         console.log("Hi "+ this.name)
//     }
// }


// class Car {
//     constructor() {
//         let color = 'red';
//     }
// }



//  Backticks allow us to embed any expression into the string, by wrapping it in ${…}


// const number = 5;

// let a = 4

// console.log(`Is ${number} is greater than ${a}?`)


// this keyword 

// let user = { name: "mohan" };
// let admin = { name: "Admin" };

// function sayhi() {
//     console.log(this.name)
// }

// user.v = sayhi;

// admin.v = sayhi;

// user.v is used for key and it value, but if we want to access the function og that key, we have use Parenthesis"()".

// user.v();
// admin.v();



// console.log(admin["v"]()) // same here if we want to access the function inside the key, we have to use Parenthesis"()".
//  admin["v"] is a reference and "()" is excution. 


// assign, merging , joining in Objects

// const obj1 = { first_name: " John" };
// const obj2 = { last_name: " teto" };

// const obj3 = {obj1,obj2} // It will join them in nested like this - { obj1: { name: ' John' }, obj2: { name: ' teto' } }

// const obj3 = {};

// const var1 = Object.assign({},obj1, obj2) // source obj`s keys must be different from each other, otherwise same key will merge into one with last assign value.
//  first obj will be the target and rest will be source, so if we didn`t want changes in any current then we can take a empty object "{}" as the target

// We can merge objects in another way using spread operator

// const var2 = {...obj1,...obj2} // this work same as Object.assign()

// console.log(obj3);
// console.log(var1);
// console.log(var2)



// de-structure



// const varab = {
//     course: "JavaScript",
//     price: 999,
//     Instructor : "Mohan"
// }

// const { Instructor : inst} = varab  // This is de-structure syntax = const {Key:rename(optional)} = Object

// console.log(inst);



// difference between "===" and "=="

// let num1 = "5";

// if (num1 === 5) {           // "===" is checking the value and datatype, where "==" is checking only value.
//     console.log("False")
// }

// if (num1 == 5) {
//     console.log("True")
// }




// Function

// function greet(user = "Guest") {        /// "' ="Guest" '" is default value
//     console.log(`Good Morning, ${user}`)
// }

// greet  // this is only reference, but if we want to execute the function then we have to use "()"


// greet("mohan")



// function one() {
//     const username = "Mohan";

//     function two() {
//         const website = "youtube"

//         console.log(username);
        
//         return website
//     }
    
//     const fun= two()

//     console.log(fun);
// }

// one()



// IIFE - Immediately Invoked Function Expression("()()")


// (function one() {
//     const username = "Mohan";
//     console.log(username)
// })();               // We have to use ";" for end the function 

// 1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
// 2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
// 3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
// 4.We can use parameter inside first parentheses.
// 5. To write two or multiple IIFE one should be end with semicolon ;




// array


const myArray = [1, 2, 3, 4, 5, 6, 6]

for (const key of myArray) {
    console.log(key);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}