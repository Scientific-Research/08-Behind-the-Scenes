'use strict';
const firstName = 'Abbas';

const calcAge = birthYear => {
  const age = 2037 - birthYear;
  // console.log(firstName);
  const printAge = () => {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Stefan';
      var yearIs2024 = true; // var is a function scope and not a block scope
      const str = `Oh, and you're a millenial, ${firstName}`; // const or let is a block scope and not a function scope
      console.log(str);

      const add = (a, b) => {
        return a + b;
      };

      const output = 'NEW OUTPUT';
      console.log(output);
      add(2, 3); // add should be called in if block, e.g. here, otherwise, we will get an error.
    }
    console.log(yearIs2024);
  };

  printAge();
  return age;
};

calcAge(1991);
// console.log(age); ERROR
// console.log(printAge()); ERROR

// variable hoisting:

// console.log(me); // undefined
// console.log(job); // Cannot access 'job' before initialization
// console.log(year); // Cannot access 'job' before initialization

var me = 'Maximilian';
let job = 'teacher';
const year = 1980;

/* Functions hoisting */

// console.log(addDeclaration(2, 3)); // 5
// console.log(addExpression(2, 3)); // Cannot access 'addExpression' before initialization
// console.log(addArrow(2, 3)); // addArrow is not a function

// 1. Declaration function
// In contrast to the other two types of functions, this below function is a hoisted function, that's why we can call it before the compiler read its content!
function addDeclaration(a, b) {
  return a + b;
}

// const a = 10;
// 2. Expression function
const addExpression = function (a, b) {
  return a + b;
};

// 3. Arrow function
var addArrow = (a, b) => {
  return a + b;
};

/* An example about the hoisting that can lead to the a big Problem when we use the var and Function Declaration: */

console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // numProducts is undefined and undefined is a falsy value => a falsy value is a false value and in If statement it would be nagated and it would be true and all the shopping card would be deleted!

var numProducts = 10;

// In contrast to the other two types of functions, this below function is a hoisted function, that's why we can call it before the compiler read its content!
function deleteShoppingCart() {
  console.log('All products deleted!');
}

/* 
THREE EXTEREMLY IMPORTANT RULES TO WRITE A CLEAN CODE IN JS:
1. DEFINE THE VARIABLES ALWAYS FIRST AT THE TOP OF THE PROGRAM!
2. CALL THE FUNCTION ALWAYS AFTER IT WAS DEFINED => FOR ALL THREE ABOVE TYPES OF FUNCTIONS!
3. USE ALWAYS CONST AND WHEN WE WANT TO CHANGE THE VARIABLE, USE THE LET AND TRY TO AVOID USING THE VAR BECAUSE OF THE PROLEMS IT CAUSES!
*/

/* Another example to compare the const, let and var together: */
var x = 1;
let y = 2;
const z = 3;

console.log(window.x === x); /* true */
console.log(window.y === y); /* false */
console.log(window.z === z); /* false */

console.log(this); // this is window object

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};

calcAge1(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // window object
};

calcAgeArrow(1980);

/* In Objekt: */
const jonas = {
  year: 1991,
  calcAge: function () {
    // console.log(jonas); OR
    console.log(this);
    console.log(2037 - year); // 2037 - 1980 = 57
    console.log(2037 - this.year); // 2037 - 1991 = 46
  },
};

jonas.calcAge();
