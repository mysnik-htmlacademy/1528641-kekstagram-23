const getRandomNumber = function(min, max) {
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


const checkString = function(str, maxLen){
  return str.length <= maxLen;
};

// eslint-disable-next-line arrow-body-style
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

export {getRandomNumber, getRandomArrayElement, checkString};
