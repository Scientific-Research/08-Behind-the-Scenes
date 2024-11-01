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

/* Method barrowing: */
const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // console.log(2037 - this.year); // 2037 - 2017 = 20

/* A function is a avlue => we can copy that to a const value too! */
const f = jonas.calcAge;
// console.log(f);
// f(); it will not work!

// var firstName1 = 'Matilda';
/* In Objekt: */
const jonas2 = {
  firstName1: 'Maxi',
  year: 1991,
  calcAge: function () {
    // console.log(jonas); OR
    console.log(this);
    console.log(2037 - year); // 2037 - 1980 = 57
    console.log(2037 - this.year); // 2037 - 1991 = 46
  },

  // greet: () => {
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName1}`); // Hey Matilda because of var keyword
    console.log(`Hey ${this.firstName1}`); // Hey Maxi without var keyword
  },
};

// To avoid such problems:
// 1. Never ever use the arrow function as method in an object!
// 2. Never ever use the var keyword

jonas2.greet();
// console.log(this.firstName);

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  // Arguments(2) [2, 5, ...]
  // Arguments(4) [2, 5, 8, 12, ...]
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = () => {
  // console.log(arguments);
  // arguments is not defined => arguments are not defined for arrow function and they are only defined for declaration function and expression function!
  // return a + b;
};

addArrow(2, 5);
addArrow(2, 5, 8, 12);

/* Primitive types vs. Object(reference) Types */
let age = 30;
let oldAge = age;
age = 31;

console.log(age); // 31
console.log(oldAge); // 30

// const me = 10
const me1 = {
  name: 'Jonas',
  age: 30,
};

const friend = me1;
friend.age = 27;
friend.name = 'Abdol';

console.log(me1); // name: 'Abdol', age: 27,
console.log(friend); // name: 'Abdol', age: 27,

/* Primitive values vs. Reference values in Practice */
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName); // Davis Williams

/* and now an Object: */
// const jessica = {
//   firstName: 'jessica',
//   lastName: 'Williams',
//   age: 27,
// };

const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  /* Comparing a nested object and a function(method) inside an object: */
  // Abdoli: function () {
  //   firstName = 'Lura';
  //   lastName = 'Kamili';
  //   age = 47;
  // },
  /* defining a new object inside jessica object: => a nested object */
  friend: {
    firstName: 'Laura',
    lastName: 'Bulbuli',
    age: 47,
  },
};

// const Liz = jessica;
// Liz.age = 30;
// console.log(jessica);
// console.log(Liz);

// Liz = {};
// ERROR: Assignment to constant variable. we can change some property or methods inside the object, although it is constant(const). But when i want to assign a new value to the whole object like here, it will give me an error! BUT WHEN IT IS A LET VARIABLE, IT WILL WORK! SO, THERE IS DIFERENCE BETWEEN WHEN WE ASSIGN A NEW VALUE TO THE WHOLE OBJECT OR WHEN WE CHNAGE ONLY A PROPERTY IN THIS OBJECT!

/* What is the solution: make a copy of jessica in anew variable using spread operator, BUT IT DOES ONLY A SURFACE COPY AND NOT A DEEP COPY*/
const jessicaCopy = { ...jessica };
const Liz = jessicaCopy;
Liz.firstName = 'Liz';
Liz.age = 30;
Liz.friend.age = 75;
console.log(jessica);
console.log(Liz);

/* Or using the assign() function to do the same(Copy) for us: BUT IT DOES ONLY A SURFACE COPY AND NOT A DEEP COPY:*/
const jessicaCopy2 = Object.assign({}, jessica);
const Liz2 = jessicaCopy2;
Liz2.firstName = 'Liz';
Liz2.age = 30;
Liz.friend.age = 80;
console.log(jessica);
console.log(Liz2);
