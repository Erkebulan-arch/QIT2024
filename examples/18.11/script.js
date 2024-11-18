// function calculator(a, b,) {
//     return a + b;
// }

// console.log(calculator(4, 7, 4));
// console.log(calculator(3, 19, 7));
// console.log(calculator(21, 37, 10));


// function calculator(a, b, c) {
//     switch (c) {
//         case "+":
//             return a + b;
//             break;
//         case "*":
//             return a * b;
//             break;    
//     }
// }

// console.log(calculator(4, 7, "+"));
// console.log(calculator(17, 8, "*"));


 
// let name = prompt('Enter your name:');

// const salemBer = function(aty) {
//     return 'Salem, ' + aty + '!'; 
// }

// console.log(salemBer(name));


// let name = prompt('Enter your name:');
// let zhas = prompt('zhasynyz kanshada:');

// const salemBer = function(aty) {
//     return 'Salem, ' + aty + '!';
// } 
// console.log(salemBer(name));

// const jas = function(your) {
//     return 'senin jasyn , ' + your + '!';
// } 
// console.log(jas(zhas));


// let san1 = prompt("san engyz1");
// let san2 = prompt("san engyz2");
// let san3 = prompt("san engyz3");


// function kobeitu( a, b, c){
//     return a * b* c
// }

// console.log(kobeitu(san1, san2, san3));



// function welcome() {
//     alert("Welcome to my site" + "\n" + Date());
// }


// let number = +prompt("Enter any number");

// function sum(num) {
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result += i;
//     }
//     return result;

// }
// console.log(sum(number));


// let number = +prompt("Enter any number");
// let degree = +prompt("Enter degree") 

// function findDegree(a, b) {
//     let result = 1;

//     for (let i = 1; i <= b; i++) {
//         result = result * a;
//     }
//     return result;

// }

// console.log(findDegree(Number, degree));




// let number = prompt("Enter any number");

// function findFactorial(num) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//             result *= i;
//     }
//     return result;
// }

// console.log(findFactorial(number));


let num1 = +prompt("san 1");
let num2 = +prompt("san 2");

function findMax(a, b) {
    if(a > b) {
        return a + "Ulken, " + b + "Kishi"
        
    } else if(b < a){
        return b + "Ulken, " + a + "Kishi"
        
     
    }
}

console.log(findMax(num1, num2));



