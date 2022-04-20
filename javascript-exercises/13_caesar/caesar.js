'use strict';

const caesar = function (text, shift) {
  let codified = '';

  Array.from(text).forEach((char) => {
    // Gets unicode of the character
    let n = char.charCodeAt();
    // If it's uppercase...
    if (char.match(/[A-Z]/)) {
      // Do this operation to get the shift index in regular alphabetical order.
      n = n - 64 + shift;
      // To handle negative shift numbers.
      if (n < 0) n += 26;
      n > 26
        ? // If it "overflows" out of the alphabet, then use modulo.
          (codified += String.fromCharCode((n % 26) + 64))
        : (codified += String.fromCharCode(n + 64));
      // For lower case numbers, same stuff.
    } else if (char.match(/[a-z]/)) {
      n = n - 96 + shift;
      if (n < 0) n += 26;
      n > 26
        ? (codified += String.fromCharCode((n % 26) + 96))
        : (codified += String.fromCharCode(n + 96));
      // If it's not an alphabetical character, just add it to the string.
    } else {
      codified += char;
    }
  });
  return codified;
};

// Do not edit below this line
module.exports = caesar;
