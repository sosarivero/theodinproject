const removeFromArray = function(array, ...targets) {
  // Make a clone of the array to avoid side effects.
  const returnArray = [...array]

  for (let target of targets) {
    index = returnArray.indexOf(target);
    if (index == -1) continue;

    returnArray.splice(index, 1);
  }

  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
