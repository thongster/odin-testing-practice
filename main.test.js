import {capitalize} from "./main.js"

// tests for capitalize
test('Capitalize first letter of string', () => {
  expect(capitalize("try this here")).toBe("Try this here");
});

test('Capitalize first letter of string', () => {
  expect(capitalize("Try this here")).toBe("Try this here");
});

test('Capitalize first letter of string', () => {
  expect(capitalize("a")).toBe("A");
});

test('Capitalize first letter of string', () => {
  expect(capitalize("")).toBe("");
});

test('Capitalize first letter of string', () => {
  expect(capitalize("_test")).toBe("_test");
});

test('Capitalize first letter of string', () => {
  expect(capitalize("123")).toBe("123");
});

