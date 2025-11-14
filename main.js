function capitalize(string) {
  if (
    typeof string != 'string' ||
    string.length === 0 ||
    typeof string[0] != 'string'
  )
    return string;

  const newString = string[0].toUpperCase() + string.slice(1);
  return newString;
}

function reverseString(string) {
  let reversedStringArray = [];
  for (const char of string.split('')) {
    reversedStringArray.unshift(char);
  }
  const reversedString = reversedStringArray.join('');
  return reversedString;
}

const calculator = {
  add(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('input must be a number');
    }
    return a + b;
  },
  subtract(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('input must be a number');
    }
    return a - b;
  },
  multiply(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('input must be a number');
    }
    return a * b;
  },
  divide(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('input must be a number');
    }
    return a / b;
  },
};

function caesarCipher(string, key) {
  let stringArray = string.split('');
  let newStringArray = [];

  stringArray.forEach((char) => {
    let asciiChar = char.charCodeAt(0);
    if (asciiChar >= 97 && asciiChar <= 122) {
      asciiChar = asciiChar + key;
      if (asciiChar > 122) {
        asciiChar = asciiChar - 26;
      }
    } else if (asciiChar >= 65 && asciiChar <= 90) {
      asciiChar = asciiChar + key;
      if (asciiChar > 90) {
        asciiChar = asciiChar - 26;
      }
    }
    newStringArray.push(asciiChar);
  });

  newStringArray.forEach((char, index) => {
    newStringArray[index] = String.fromCharCode(char);
  });

  return newStringArray.join('');
}

function analyzeArray(array) {
  let object = {
    average: null,
    min: null,
    max: null,
    length: null,
  };

  object.average =
    array.reduce((total, current) => {
      return total + current;
    }, 0) / array.length;

  object.min = Math.min(...array);

  object.max = Math.max(...array);

  object.length = array.length;

  return object;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
