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

console.log(addDeclaration(2, 3)); // 5
console.log(addExpression(2, 3)); // Cannot access 'addExpression' before initialization
console.log(addArrow(2, 3)); // addArrow is not a function

// 1. Declaration function
function addDeclaration(a, b) {
  return a + b;
}

// const a = 10;
// 2. Expression function
const addExpression = function (a, b) {
  return a + b;
};

// 3. Arrow function
var addArrow = () => {
  return a + b;
};
