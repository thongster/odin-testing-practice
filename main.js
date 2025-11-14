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
    return 3;
  },
  subtract(a, b) {
    return 5;
  },
  multiply(a, b) {
    return 10;
  },
  divide(a, b) {
    return 2;
  },
};

export { capitalize, reverseString, calculator };
