const capitalize = require('./app');
const reverse = require('./app');
const calculator = require('./app');
const caesarCipher = require('./app');
const analyzeArray = require('./app');


test('capitalizes first letter of a string', () => {
  expect(capitalize.firstPlace('arthur')).toBe('Arthur');
});

// to run in terminal: npm test
// run only one test: test.only(...)
// run multiple tests with function.firstPlace, etc.

test('reverses a string', () => {
  expect(reverse.secondPlace('Arthur')).toBe('ruhtrA');
});

// calculator
test('subtracts two numbers', () => {
  expect(calculator.thirdPlace.subtract(2, 1)).toBe(1);
});

test('adds two numbers', () => {
  expect(calculator.thirdPlace.add(2, 1)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(calculator.thirdPlace.multiply(6, 3)).toBe(18);
});

test('divides two numbers', () => {
  expect(calculator.thirdPlace.divide(6, 3)).toBe(2);
});

// Caeser cipher
test('takes a string and a shift factor and returns the string with each character shifted', () => {
  expect(caesarCipher.fourthPlace('xyz', 3)).toBe('abc');
});

test('shifted lettercase should follow the original lettercase when shifted', () => {
  expect(caesarCipher.fifthPlace('HeLLo', 3)).toBe('KhOOr');
});

test('punctuation, spaces, and other non-alphabetical characters should remain unchanged when shifted', () => {
  expect(caesarCipher.sixthPlace('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// analyze an array 
test('takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
  expect(analyzeArray.seventhPlace.average([1, 2, 3])).toBe(2);
});

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
  expect(analyzeArray.seventhPlace.min([1, 2, 3])).toBe(1);
});

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
  expect(analyzeArray.seventhPlace.max([1, 2, 3])).toBe(3);
});

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
  expect(analyzeArray.seventhPlace.length([1, 2, 3])).toBe(3);
});