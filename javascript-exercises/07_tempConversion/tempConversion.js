// I personally used .toFixed(1) because I found it
// more readable than 'Math.round(formula * 10) * 10.

const ftoc = function(fahrenheit) {
  // [°C] = ([°F] − 32) × 5⁄9
let conversion = ((fahrenheit - 32) * 5/9).toFixed(1);
return Number(conversion);
};

const ctof = function(celsius) {
  // [°F] = [°C] × 9⁄5 + 32	
  conversion = (celsius * 9/5 + 32).toFixed(1);
  return Number(conversion);
};

console.log(typeof (ftoc(32)))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
