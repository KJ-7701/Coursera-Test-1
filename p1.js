// var company= {
//     name: "Google",
//     age: 31, 
//     ceo: {
//         name:{
//             firstname: "Sundar",
//             lastname: "Pichai"
//         },
//         age: 45,   
//         Salary: "2Cr"
//     },
// };

// console.log(company);

// var company = new Object();
// company.name = "Google";
// company.ceo = new Object();
// company.ceo.firstname = "Sundar";
// company.ceo.lastname = "Pichai";
// company.ceo.salary = "2Cr";
// company.age ="31";

// console.log(company);
// console.log(company.ceo.firstname);
// console.log(company.ceo["lastname"]);



// function makemultiplier (multiplier) {
//     function myFunc(x) {
//         return multiplier * x;
//     }

//     function b() {
//         console.log( "multiplier is: " +multiplier);
//     }
//     b();
//     return myFunc;
// }

// var doubleall = makemultiplier(2);
// console.log(doubleall(10));


//IMMEDIATELY INVOKED FUNCTION EXPRESSION
//IIFE

// (function(window) {
//     var yaakovGreeter = {};
//     yaakovGreeter.dreamOn = function () {
//         console.log("I want to see the global scope! Let me out!");
//     };
//     window.lo = yaakovGreeter; 
// })(window);

// lo.dreamOn(window);

