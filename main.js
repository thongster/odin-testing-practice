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
    if (typeof a != "number" || typeof b != "number") {
        throw new Error('input must be a number')
    }
    return a + b;
  },
  subtract(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw new Error('input must be a number')
    }
    return a - b;
  },
  multiply(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw new Error('input must be a number')
    }
    return a * b;
  },
  divide(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw new Error('input must be a number')
    }
    return a / b;
  },
};

export { capitalize, reverseString, calculator };
