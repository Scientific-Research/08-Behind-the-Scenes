// 'use strict';
const firstName = 'Abbas';

const calcAge = birthYear => {
  const age = 2037 - birthYear;
  // console.log(firstName);
  const printAge = () => {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Stefan';
      var yearIs2024 = true; // var is a function scope and not a block scope
      const str = `Oh, and you're a millenial, ${firstName}`; // const or let is a block scope and not a function scope
      console.log(str);

      const add = (a, b) => {
        return a + b;
      };
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
