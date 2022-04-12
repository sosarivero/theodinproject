const reverseString = function(string) {
  arrayOfString = Array.from(string)
  reversedString = "";
  for (let i = arrayOfString.length - 1; i >= 0; i--) {
    reversedString += arrayOfString[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
