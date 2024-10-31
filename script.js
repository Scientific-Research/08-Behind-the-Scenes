'use strict';

const calcAge = birthYear => {
  const age = 2037 - birthYear;
  // console.log(firstName);
  const printAge = () => {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  };

  printAge();
  return age;
};

const firstName = 'Abbas';
calcAge(1991);
// console.log(age); ERROR
// console.log(printAge()); ERROR
