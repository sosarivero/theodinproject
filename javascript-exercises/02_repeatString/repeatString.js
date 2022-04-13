"use strict";

const repeatString = function(string, n) {
  if (n < 0) {
    return "ERROR";
  }

  repeatedString = ""
  for (let i = 0; i < n; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
