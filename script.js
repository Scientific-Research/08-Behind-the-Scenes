'use strict';

const calcAge = birthYear => {
  const age = 2037 - birthYear;
  // console.log(firstName);
  const printAge = () => {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  };

  printAge();
  return age;
};

const firstName = 'Abbas';
calcAge(1991);
// console.log(age); ERROR
// console.log(printAge()); ERROR
