const { test, expect } = require('@jest/globals');
const calculator = require('./index');

test('Happy path addition', () => {
	expect(calculator.add(2, 2)).toBe(4);
});

test('Happy path subtract', () => {
	expect(calculator.subtract(5, 2)).toBe(3);
});

test('Happy path division', () => {
	expect(calculator.divide(10, 5)).toBe(2);
});

test('Happy path multiply', () => {
	expect(calculator.mutiply(3, 2)).toBe(6);
});

test('Division to get result with 2 decimal', () => {
	expect(calculator.divide(1, 3)).toBe(0.33);
});
