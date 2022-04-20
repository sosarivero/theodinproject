// Note: this is pretty much copied from the solutions tree.
// My initial solution involved adding a new attribute "age" to the objects
// to make them easier to compare, but it is bad because it is unnecessary.
//
// After looking at the solution, I realized I can use {} with =>, which solved
// some issues I was having, and I realized I was able to make another function.

'use strict';

const findTheOldest = function (array) {
  return array.reduce((a, b) => {
    const aAge = getAge(a.yearOfBirth, a.yearOfDeath);
    const bAge = getAge(b.yearOfBirth, b.yearOfDeath);
    return aAge > bAge ? a : b;
  });
};

function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
