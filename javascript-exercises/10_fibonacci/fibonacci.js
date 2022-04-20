const fibonacci = function (n) {
  if (n < 0) return 'OOPS';

  let previous = 0;
  let current = 1;

  // i needs to start at 1 for the correct number of loops.
  for (let i = 1; i < n; i++) {
    // Create a temporary value in order to do all the switching of values.
    let tmp = previous;
    previous = current;
    current += tmp;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
