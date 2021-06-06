const randomGet = function(min, max) {
  // NOTE implementation from https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);

  // NOTE in case of invalid parameters we return null
  if ((min < 0) || (max <= min)) {
    return null;
  }

  // NOTE include min and max values
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const stringCheckLen = function(checkString, maxLen){
  // TODO implement
};

// NOTE this invokations using for pass linter check
randomGet(5, 8);
stringCheckLen('Hello Kate', 20);
