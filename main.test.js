import { capitalize, reverseString, calculator, caesarCipher } from './main.js';

// tests for capitalize
test('Capitalize first letter of string', () => {
  expect(capitalize('try this here')).toBe('Try this here');
});

test('Capitalize first letter of string', () => {
  expect(capitalize('Try this here')).toBe('Try this here');
});

test('Capitalize first letter of string', () => {
  expect(capitalize('a')).toBe('A');
});

test('Capitalize first letter of string', () => {
  expect(capitalize('')).toBe('');
});

test('Capitalize first letter of string', () => {
  expect(capitalize('_test')).toBe('_test');
});

test('Capitalize first letter of string', () => {
  expect(capitalize('123')).toBe('123');
});

// tests for reverse a string
test('Reverse a string', () => {
  expect(reverseString('apple')).toBe('elppa');
});

test('Reverse a string', () => {
  expect(reverseString('123456789')).toBe('987654321');
});

test('Reverse a string', () => {
  expect(reverseString('_im in here123 !!')).toBe('!! 321ereh ni mi_');
});

test('Reverse a string', () => {
  expect(reverseString('')).toBe('');
});

// tests for calculator object
test('Add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(7, 2)).toBe(5);
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test('Divide two numbers', () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test('Add two strings', () => {
  expect(() => calculator.add('123', 'this')).toThrow();
  3;
});

// test caesarCipher functions

test('Caesar Cipher normal test', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('Caesar Cipher wrap z to a test', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher case preservation test', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Caesar Cipher punctuation preservation test', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
