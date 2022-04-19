const palindromes = function (s) {
  let raw = '';

  let pattern = /[A-Za-z]/;

  [...s].forEach((char) => {
    if (pattern.test(char)) {
      raw += char;
    }
  });

  raw = raw.toLowerCase();
  reversed = raw.split('').reverse().join('');

  for (let i = 0; i < raw.length; i++) {
    if (reversed[i] !== raw[i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
