import { capitalize, reverseString } from './main.js';

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
